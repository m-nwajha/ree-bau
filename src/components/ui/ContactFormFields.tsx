import {
  contactFormFields,
  type ContactFormField,
} from "@/constants/contact-form-fields";
import { services } from "@/mocks/services";

export type ContactFormValues = Record<ContactFormField["name"], string>;

export const emptyContactFormValues: ContactFormValues = Object.fromEntries(
  contactFormFields.map((field) => [field.name, ""]),
) as ContactFormValues;

const rowFields = contactFormFields.filter((field) => field.type !== "textarea");
const textFields = contactFormFields.filter((field) => field.type === "textarea");
const rows: ContactFormField[][] = [];
for (let i = 0; i < rowFields.length; i += 2) {
  rows.push(rowFields.slice(i, i + 2));
}

const ContactFormFields = ({
  values,
  onChange,
}: {
  values: ContactFormValues;
  onChange: (name: ContactFormField["name"], value: string) => void;
}) => {
  return (
    <>
      {rows.map((row, index) => (
        <div className="row g-0" key={index}>
          {row.map((field) => (
            <div className="col-md-6" key={field.name}>
              <label htmlFor={`cf-${field.name}`}>{field.label}</label>
              {field.type === "select" ? (
                <div className="select-wrapper">
                  <select
                    className="form-control"
                    id={`cf-${field.name}`}
                    name={field.name}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(e) => onChange(field.name, e.target.value)}
                  >
                    <option value="">{field.placeholder}</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  id={`cf-${field.name}`}
                  placeholder={field.placeholder}
                  name={field.name}
                  required={field.required}
                  value={values[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
      {textFields.map((field) => (
        <div className="row g-0" key={field.name}>
          <label htmlFor={`cf-${field.name}`}>{field.label}</label>
          <textarea
            id={`cf-${field.name}`}
            placeholder={field.placeholder}
            name={field.name}
            required={field.required}
            value={values[field.name]}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        </div>
      ))}
    </>
  );
};

export default ContactFormFields;
