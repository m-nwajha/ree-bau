import Link from "next/link";
import { slugify } from "@/utils/slugify";
import type { ProjektItem } from "@/@types/projekt";

const ProjektCard = ({ item }: { item: ProjektItem }) => {
  return (
    <div className="project-post">
      <Link href={`/projekte/${slugify(item.title)}`}>
        <figure>
          <img className="w-100" src={item.image} alt={item.title} />
        </figure>
        <div className="project-data">
          <h3 className="text-black">{item.title}</h3>
          <p>{item.short}</p>
          <span className="project-icon">
            <i className="fa-solid fa-angles-right" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjektCard;
