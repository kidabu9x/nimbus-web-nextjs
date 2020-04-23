import styles from "./styles";
import CardLeft from "./CardLeft/CardLeft";
import CardRight from "./CardRight/CardRight";
import Category from "../category/CategoryComponent";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});

export default function Home({ children, features }) {
  const highlights = features.highlights;
  const categoryFeatures = features.features;
  return (
    <div className="container">
      {highlights && (
        <div className="container-highlight">
          <div className="header-highlight">
            <p className="category-title">Nổi bật</p>
          </div>
          <div className="ui two column grid">
            <div className="stretched row">
              <div className="column">
                <CardLeft blog={highlights[0]} />
              </div>
              <div className="column">
                <div className="ui two column grid">
                  <div className="column">
                    <CardRight blog={highlights[1]} />
                    <CardRight blog={highlights[2]} />
                  </div>
                  <div className="column">
                    <CardRight blog={highlights[3]} />
                    <CardRight blog={highlights[4]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {categoryFeatures.map((categoryFeature, index) => (
        <Category key={index.toString()} categoryFeature={categoryFeature} />
      ))}
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}
