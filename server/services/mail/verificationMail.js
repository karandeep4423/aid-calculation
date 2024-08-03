const mailer = require('./mailerService');

const sendVerificationEmail = async (to, verificationToken) => {

    const mailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email de Verification</title>
        </head>
        <body>
            <p>Veuillez cliquer <a href="${process.env.APP_URL}/verify-email/${verificationToken}">ici</a> pour vérifier votre adresse e-mail</p>
        </body>
        </html>
    `;

    try {
        await mailer.sendEmail(
            to,
            'Email de Verification',
            mailHtml
        );
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { sendVerificationEmail };
