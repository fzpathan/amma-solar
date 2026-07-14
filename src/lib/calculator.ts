import { siteConfig } from "./site";

/** Configurable rates — replace with real quotes as needed */
export const CALCULATOR_DEFAULTS = {
  costPerKw: 65000,
  averageUnitsPerKwPerMonth: 120,
  tariffPerUnit: 8,
  loanTenureMonths: 60,
} as const;

export type CalculatorInput = {
  monthlyBill: number;
  roofAreaSqFt?: number;
  budget?: number;
};

export type CalculatorResult = {
  recommendedKw: number;
  estimatedCost: number;
  subsidy: number;
  netCost: number;
  emi: number;
  monthlySavings: number;
  paybackYears: number;
  roiYears: number;
};

export function estimateUnitsFromBill(monthlyBill: number): number {
  if (monthlyBill <= 0) return 0;
  return Math.round(monthlyBill / CALCULATOR_DEFAULTS.tariffPerUnit);
}

export function recommendKw(monthlyBill: number, roofAreaSqFt?: number): number {
  const units = estimateUnitsFromBill(monthlyBill);
  let kw: number;
  if (units <= 150) kw = units <= 75 ? 1 : 2;
  else if (units <= 300) kw = units <= 225 ? 2.5 : 3;
  else kw = Math.min(10, Math.ceil(units / 120));

  if (roofAreaSqFt && roofAreaSqFt > 0) {
    const maxByRoof = Math.floor(roofAreaSqFt / 100); // ~100 sq ft per kW
    kw = Math.max(1, Math.min(kw, maxByRoof || kw));
  }
  return Math.round(kw * 2) / 2; // nearest 0.5
}

export function getSubsidy(kw: number): number {
  if (kw <= 0) return 0;
  if (kw <= 1) return Math.round(30000 * kw);
  if (kw <= 2) return 30000 + Math.round(18000 * (kw - 1));
  if (kw < 3) return 30000 + 18000 + Math.round(18000 * (kw - 2));
  return 78000;
}

export function calculateEmi(
  principal: number,
  annualRatePercent = siteConfig.loanInterestPercent,
  tenureMonths = CALCULATOR_DEFAULTS.loanTenureMonths
): number {
  if (principal <= 0) return 0;
  const r = annualRatePercent / 12 / 100;
  if (r === 0) return principal / tenureMonths;
  const factor = Math.pow(1 + r, tenureMonths);
  return (principal * r * factor) / (factor - 1);
}

export function calculateSolar(input: CalculatorInput): CalculatorResult {
  let recommendedKw = recommendKw(input.monthlyBill, input.roofAreaSqFt);
  let estimatedCost = recommendedKw * CALCULATOR_DEFAULTS.costPerKw;

  if (input.budget && input.budget > 0) {
    const maxKwByBudget = Math.floor(input.budget / CALCULATOR_DEFAULTS.costPerKw);
    if (maxKwByBudget > 0 && maxKwByBudget < recommendedKw) {
      recommendedKw = Math.max(1, maxKwByBudget);
      estimatedCost = recommendedKw * CALCULATOR_DEFAULTS.costPerKw;
    }
  }

  const subsidy = getSubsidy(recommendedKw);
  const netCost = Math.max(0, estimatedCost - subsidy);
  const monthlySavings = Math.min(
    input.monthlyBill * 0.9,
    recommendedKw * CALCULATOR_DEFAULTS.averageUnitsPerKwPerMonth * CALCULATOR_DEFAULTS.tariffPerUnit
  );
  const emi = calculateEmi(netCost);
  const paybackYears =
    monthlySavings > 0 ? Math.round((netCost / (monthlySavings * 12)) * 10) / 10 : 0;

  return {
    recommendedKw,
    estimatedCost: Math.round(estimatedCost),
    subsidy,
    netCost: Math.round(netCost),
    emi: Math.round(emi),
    monthlySavings: Math.round(monthlySavings),
    paybackYears,
    roiYears: paybackYears,
  };
}
