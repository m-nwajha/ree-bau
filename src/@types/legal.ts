export type LegalContent = {
  type: "paragraph" | "list";
  title?: string;
  paragraph?: string;
  list?: string[];
};
