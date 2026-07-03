import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, telephone, message } = await request.json();

    if (!nom || !prenom || !email || !message) {
      return Response.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "CCVR Contact <onboarding@resend.dev>",
      to: "automation@drkiavueyoann.com",
      subject: `Nouveau message de ${prenom} ${nom}`,
      replyTo: email,
      text: [
        `Nom : ${nom}`,
        `Prenom : ${prenom}`,
        `Email : ${email}`,
        `Telephone : ${telephone || "Non renseigne"}`,
        ``,
        `Message :`,
        message,
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Une erreur est survenue. Veuillez reessayer." },
      { status: 500 }
    );
  }
}
