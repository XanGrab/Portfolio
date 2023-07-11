// Firebase Config
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";

export const sendMessage = functions.https.onCall(async (data, ctx) => {
  const API_KEY = functions.config().sendgrid.key;
  sgMail.setApiKey(API_KEY);

  const TO_EMAIL_ADDRESS = functions.config().sendgrid.toaddress;
  const FROM_EMAIL_ADDRESS = functions.config().sendgrid.fromaddress;
  const msg = {
    to: TO_EMAIL_ADDRESS,
    from: { email: FROM_EMAIL_ADDRESS, name: "Contact Form" },
    replyTo: data.replyTo,
    subject: `[Contact Form] ${data.subject}`,
    text: `From ${data.replyTo}:\n\n${data.text}`,
  };

  try {
    await sgMail.send(msg).then((result) => {
      console.log("DEBUG [contact.html] Email sent");
      // response.setStatusCode(200);
      // response.setBody({ success: true });
    });
  } catch (error) {
    console.error(error);
  }
});
