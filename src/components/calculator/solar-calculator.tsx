"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { calculateSolar } from "@/lib/calculator";
import { whatsappUrl } from "@/lib/site";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export function SolarCalculator() {
  const t = useTranslations("calculatorPage");
  const tw = useTranslations("whatsapp");
  const [monthlyBill, setMonthlyBill] = useState(2500);
  const [roofArea, setRoofArea] = useState<number | "">("");
  const [budget, setBudget] = useState<number | "">("");

  const result = useMemo(
    () =>
      calculateSolar({
        monthlyBill: Number(monthlyBill) || 0,
        roofAreaSqFt: roofArea === "" ? undefined : Number(roofArea),
        budget: budget === "" ? undefined : Number(budget),
      }),
    [monthlyBill, roofArea, budget]
  );

  const waText = tw("calculatorMessage", {
    kw: String(result.recommendedKw),
    cost: String(result.estimatedCost),
    subsidy: String(result.subsidy),
    emi: String(result.emi),
    bill: String(monthlyBill),
  });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form
        className="space-y-5 rounded-2xl border border-border bg-white p-5 soft-shadow-lg sm:rounded-3xl sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <Label htmlFor="bill">{t("monthlyBill")}</Label>
          <Input
            id="bill"
            type="number"
            min={0}
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="roof">{t("roofArea")}</Label>
          <Input
            id="roof"
            type="number"
            min={0}
            value={roofArea}
            onChange={(e) =>
              setRoofArea(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>
        <div>
          <Label htmlFor="budget">{t("budget")}</Label>
          <Input
            id="budget"
            type="number"
            min={0}
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>
        <p className="text-xs text-muted">{t("disclaimer")}</p>
      </form>

      <div className="rounded-3xl bg-navy p-6 text-white soft-shadow-lg sm:p-8">
        <h2 className="text-xl font-semibold text-yellow">{t("results")}</h2>
        <dl className="mt-6 space-y-4">
          {(
            [
              [t("recommended"), t("kw", { kw: result.recommendedKw })],
              [t("estimatedCost"), formatINR(result.estimatedCost)],
              [t("subsidy"), formatINR(result.subsidy)],
              [t("netCost"), formatINR(result.netCost)],
              [t("emi"), `${formatINR(result.emi)}`],
              [t("monthlySavings"), formatINR(result.monthlySavings)],
              [t("payback"), t("years", { years: result.paybackYears })],
            ] as const
          ).map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-white/10 pb-3"
            >
              <dt className="text-sm text-white/70">{label}</dt>
              <dd className="text-lg font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
        <Button asChild size="lg" className="mt-8 w-full" variant="whatsapp">
          <a href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer">
            {t("whatsappCta")}
          </a>
        </Button>
      </div>
    </div>
  );
}
