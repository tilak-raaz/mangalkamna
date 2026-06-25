import "server-only";

import nodemailer from "nodemailer";

export type InquiryType = "contact" | "appointment";

export interface ContactInquiryPayload {
  type: "contact";
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AppointmentInquiryPayload {
  type: "appointment";
  name: string;
  phone: string;
  email: string;
  date: string;
  service: string;
  notes: string;
}

export type FormInquiryPayload =
  | ContactInquiryPayload
  | AppointmentInquiryPayload;

const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = Number(process.env.SMTP_PORT || "587");
const smtpSecure =
  (process.env.SMTP_SECURE || "false").toLowerCase() === "true";
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const recipientEmail =
  process.env.MAIL_TO_EMAIL || "Hospitalmangalkamna@gmail.com";
const senderName = process.env.MAIL_FROM_NAME || "Mangalkamna Hospital Website";
const senderEmail = process.env.MAIL_FROM_EMAIL || smtpUser || recipientEmail;

function assertMailerConfig() {
  if (!smtpHost) {
    throw new Error("Missing SMTP_HOST in environment configuration.");
  }

  if (!smtpUser) {
    throw new Error("Missing SMTP_USER in environment configuration.");
  }

  if (!smtpPass) {
    throw new Error("Missing SMTP_PASS in environment configuration.");
  }
}

function getMailer() {
  assertMailerConfig();

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 0; width: 180px; vertical-align: top; font-weight: 700; color: #334155;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(value || "-")}</td>
    </tr>
  `;
}

function buildEmailContent(payload: FormInquiryPayload) {
  if (payload.type === "appointment") {
    const subject = `Appointment Request - ${payload.name}`;
    const heading = "Appointment Request";

    return {
      subject,
      heading,
      text: [
        `${heading}`,
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Preferred Date: ${payload.date}`,
        `Service Needed: ${payload.service}`,
        `Notes: ${payload.notes || "-"}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px; color: #681412;">${heading}</h2>
          <p style="margin: 0 0 20px; color: #475569;">A new appointment request has been submitted from the website.</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
            ${buildRow("Name", payload.name)}
            ${buildRow("Phone", payload.phone)}
            ${buildRow("Email", payload.email)}
            ${buildRow("Preferred Date", payload.date)}
            ${buildRow("Service Needed", payload.service)}
            ${buildRow("Notes", payload.notes)}
          </table>
        </div>
      `,
    };
  }

  const subject = `Contact Us Inquiry - ${payload.subject}`;
  const heading = "Contact Us Inquiry";

  return {
    subject,
    heading,
    text: [
      `${heading}`,
      `Name: ${payload.fullName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      `Message: ${payload.message}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin: 0 0 16px; color: #681412;">${heading}</h2>
        <p style="margin: 0 0 20px; color: #475569;">A new contact message has been submitted from the website.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
          ${buildRow("Name", payload.fullName)}
          ${buildRow("Phone", payload.phone)}
          ${buildRow("Email", payload.email)}
          ${buildRow("Subject", payload.subject)}
          ${buildRow("Message", payload.message)}
        </table>
      </div>
    `,
  };
}

export async function sendFormInquiryEmail(payload: FormInquiryPayload) {
  const mailer = getMailer();
  const content = buildEmailContent(payload);

  await mailer.sendMail({
    from: `"${senderName}" <${senderEmail}>`,
    to: recipientEmail,
    replyTo: payload.email,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });

  return {
    recipientEmail,
    subject: content.subject,
    heading: content.heading,
  };
}
