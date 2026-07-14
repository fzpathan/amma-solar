import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  city: z.string().min(2),
  monthlyBill: z.string().optional(),
  system: z.string(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = leadSchema.parse(json);

    const apiKey = process.env.RESEND_API_KEY;
    const to =
      process.env.LEAD_TO_EMAIL ?? "munirahmedkhannsk@gmail.com";

    if (apiKey && to) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.LEAD_FROM_EMAIL ?? "AMMA SOLAR <onboarding@resend.dev>",
        to: [to],
        subject: `New solar lead: ${data.name} (${data.city})`,
        text: [
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          `City: ${data.city}`,
          `Monthly bill: ${data.monthlyBill ?? "—"}`,
          `System: ${data.system}`,
          `Message: ${data.message ?? "—"}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true, emailed: Boolean(apiKey && to) });
  } catch (error) {
    console.error("Lead API error", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
