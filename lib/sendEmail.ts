"use server";

import { Resend } from "resend";
import { getErrorMessage } from "./error";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export async function sendEmail(formData: FormData) {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "markvayson@gmail.com",
      subject: `Message from portfolio website`,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
