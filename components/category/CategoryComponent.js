import styles from "./styles";
import CardLeft from "../home/CardLeft/CardLeft";
import CardRight from "../home/CardRight/CardRight";
import Link from "next/link";

export default function Category({ categoryFeature }) {
  return (
    <div className="container">
      <div className="header-highlight">
        <p>{categoryFeature.category.title}</p>
        <Link href={categoryFeature.category.slug}>
          <a>Xem thêm ></a>
        </Link>
      </div>
      <div className="ui two column grid">
        <div className="stretched row">
          <div className="column">
            <CardLeft blog={categoryFeature.blogs[0]} />
          </div>
          <div className="column">
            <div className="ui two column grid">
              <div className="column">
                <CardRight blog={categoryFeature.blogs[1]} />
                <CardRight blog={categoryFeature.blogs[2]} />
              </div>
              <div className="column">
                <CardRight blog={categoryFeature.blogs[3]} />
                <CardRight blog={categoryFeature.blogs[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
