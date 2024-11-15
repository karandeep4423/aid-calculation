const mailer = require("./mailerService");

const sendAppointmentBookEmail = async (to, appointmentDetails,userName) => {
  const mailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Appointment Confirmation</title>
        </head>
        <body>
            <p>Bonjour ${userName},</p>
            <p>Votre rendez-vous a été confirmé avec les détails suivants :</p>
            <ul>
                <li><strong>Appointment Detail :</strong> ${appointmentDetails}</li>
            </ul>
            <p>Merci de nous choisir.</p>
        </body>
        </html>
    `;

  try {
    await mailer.sendEmail(to, "Confirmation de Rendez-vous", mailHtml);
  } catch (error) {
    console.log("error mail", error);
    throw new Error(error);
  }
};

const sendRescheduleAppointmentEmail = async (to, oldDetails,newDetails,userName) => {
  const mailHtml = `
    <p>Bonjour ${userName},</p>
    <p>Votre rendez-vous a été reprogrammé :</p>
    <p><strong>Ancien rendez-vous :</strong></p>
    <ul>
      <li><strong>Appointment :</strong> ${oldDetails}</li>
    </ul>
    <p><strong>Nouveau rendez-vous :</strong></p>
    <ul>
      <li><strong>Appointment :</strong> ${newDetails}</li>
    </ul>
  `;
  try {
    await mailer.sendEmail(to, "Reprogrammation de Rendez-vous", mailHtml);
  } catch (error) {
    throw new Error(error);
  }
};

const sendCancelAppointmentEmail = async (to, appointmentDetails,userName) => {
  const mailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Appointment Cancellation</title>
        </head>
        <body>
            <p>Bonjour ${userName},</p>
            <p>Votre rendez-vous prévu pour le <strong>${appointmentDetails}</strong>  a été annulé.</p>
            <p>Si vous avez des questions ou souhaitez reprogrammer, n'hésitez pas à nous contacter.</p>
        </body>
        </html>
    `;

  try {
    await mailer.sendEmail(to, "Annulation de Rendez-vous", mailHtml);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  sendAppointmentBookEmail,
  sendRescheduleAppointmentEmail,
  sendCancelAppointmentEmail,
};
