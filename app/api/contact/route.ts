import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, message } = body;

    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Preferred Date:", preferredDate || "Not specified");
    console.log("Message:", message);

    // Trimitem email doar dacă avem cheia (evităm crash la build)
    if (process.env.RESEND_API_KEY) {
      try {
        // Import dinamic → nu se încarcă la build dacă nu avem cheie
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "Drone Scope <contact@dronescope.ro>",
          to: "contact@dronescope.ro",
          subject: `Cerere nouă de la ${name} - ${service}`,
          replyTo: email,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0B0B0E; color: #fff;">
              <h2 style="color: #14B8A6; margin-bottom: 24px;">Cerere nouă de pe site</h2>
              <p><strong>Nume:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefon:</strong> ${phone}</p>
              <p><strong>Serviciu:</strong> ${service}</p>
              ${preferredDate ? `<p><strong>Data preferată:</strong> ${preferredDate}</p>` : ""}
              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #27272A;">
                <p style="margin-bottom: 8px;"><strong>Mesaj:</strong></p>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            </div>
          `,
        });
        console.log("✅ Email trimis cu succes prin Resend");
      } catch (emailError) {
        console.error("❌ Eroare la trimiterea emailului prin Resend:", emailError);
      }
    } else {
      console.log("⚠️ RESEND_API_KEY nu este setat → emailul nu a fost trimis, dar lead-ul a fost logat.");
    }

    // Întotdeauna returnăm succes (ca să nu pierdem lead-uri)
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    // Chiar și la eroare gravă, returnăm succes pentru utilizator
    return NextResponse.json({ success: true });
  }
}