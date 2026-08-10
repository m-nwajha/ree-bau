export type ContactFormFieldType = "text" | "tel" | "email" | "select" | "textarea";

export type ContactFormField = {
  name: "name" | "phone" | "email" | "service" | "message";
  label: string;
  placeholder: string;
  type: ContactFormFieldType;
  required?: boolean;
};

export const contactFormFields: ContactFormField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name eingeben",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Telefonnummer",
    placeholder: "Telefonnummer eingeben",
    type: "tel",
  },
  {
    name: "email",
    label: "E-Mail",
    placeholder: "E-Mail eingeben",
    type: "email",
  },
  {
    name: "service",
    label: "Services",
    placeholder: "Services",
    type: "select",
  },
  {
    name: "message",
    label: "Nachricht",
    placeholder: "Beschreiben Sie Ihr Anliegen",
    type: "textarea",
    required: true,
  },
];
