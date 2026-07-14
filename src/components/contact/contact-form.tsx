"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  city: z.string().min(2),
  monthlyBill: z.string().optional(),
  system: z.enum(["residential", "commercial", "farm", "unsure"]),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations("contactPage");
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { system: "residential", city: "Nashik" },
  });

  const onSubmit = async (data: FormValues) => {
    setPending(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // WhatsApp is primary — continue even if API fails
    }

    const text = [
      "AMMA SOLAR inquiry",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `City: ${data.city}`,
      data.monthlyBill ? `Monthly bill: ₹${data.monthlyBill}` : null,
      `System: ${data.system}`,
      data.message ? `Message: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setPending(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-border bg-white p-6 soft-shadow-lg sm:p-8"
    >
      <h2 className="text-xl font-semibold text-navy">{t("formTitle")}</h2>

      <div>
        <Label htmlFor="name">{t("name")}</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-orange">{t("name")} *</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">{t("phone")}</Label>
        <Input id="phone" type="tel" {...register("phone")} />
        {errors.phone && (
          <p className="mt-1 text-xs text-orange">{t("phone")} *</p>
        )}
      </div>
      <div>
        <Label htmlFor="city">{t("city")}</Label>
        <Input id="city" {...register("city")} />
      </div>
      <div>
        <Label htmlFor="monthlyBill">{t("monthlyBill")}</Label>
        <Input id="monthlyBill" type="number" {...register("monthlyBill")} />
      </div>
      <div>
        <Label htmlFor="system">{t("system")}</Label>
        <Select id="system" {...register("system")}>
          <option value="residential">{t("systemOptions.residential")}</option>
          <option value="commercial">{t("systemOptions.commercial")}</option>
          <option value="farm">{t("systemOptions.farm")}</option>
          <option value="unsure">{t("systemOptions.unsure")}</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea id="message" {...register("message")} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "…" : t("submitWhatsapp")}
      </Button>
    </form>
  );
}
