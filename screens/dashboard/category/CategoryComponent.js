import styles from "./styles";
import CardLeft from "./CardLeft/CardLeft";
import CardRight from "./CardRight/CardRight";
import {
  Typography,
  Link
} from "@material-ui/core";

export default function Category({ categoryFeature }) {
  return (
    <div className="container">
      <div className="header-highlight">
        <Typography variant="h5" gutterBottom>
          {categoryFeature.category.title}
        </Typography>
        <Link href={categoryFeature.category.slug}>
          Xem thêm
        </Link>
      </div>
      <div className="ui stackable two column grid">
        <div className="stretched row">
          <div className="column">
            <CardLeft blog={categoryFeature.blogs[0]} />
          </div>
          <div className="column">
            <div className="ui stackable two column grid">
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
