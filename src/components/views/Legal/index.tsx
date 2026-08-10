import Breadcrumb from "@/components/common/Breadcrumb";
import type { LegalContent } from "@/@types/legal";

const LegalPage = ({
  title,
  description,
  content,
}: {
  title: string;
  description?: string;
  content: LegalContent[];
}) => {
  return (
    <>
      <Breadcrumb title={title} description={description} />

      <section className="gap about-first legal-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="who-we-are">
                {content.map((block, index) => (
                  <div className="mt-3" key={`${block.title ?? "block"}-${index}`}>
                    {block.title && <h3>{block.title}</h3>}
                    {block.type === "paragraph" && <p>{block.paragraph}</p>}
                    {block.type === "list" && (
                      <ul className="m-0 ps-0">
                        {block.list?.map((item, itemIndex) => (
                          <li key={`${item}-${itemIndex}`}>
                            <i className="fa-solid fa-check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
