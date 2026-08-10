import Link from "next/link";

const Breadcrumb = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <section className="banner-style-one">
      <div
        className="parallax"
        style={{ backgroundImage: "url(/images/pattren-3.png)" }}
      />

      <div className="container">
        <div className="row">
          <div className="banner-details">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
          </div>
        </div>
      </div>
      <div className="breadcrums">
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <Link href="/">
                  <i className="fa-solid fa-house" />
                  <p>Home</p>
                </Link>
              </li>
              <li className="current">
                <p>{title}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
