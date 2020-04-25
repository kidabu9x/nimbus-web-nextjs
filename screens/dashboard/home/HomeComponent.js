import styles from "./styles";
import CardLeft from "../category/CardLeft/CardLeft";
import CardRight from "../category/CardRight/CardRight";
import Category from "../category/CategoryComponent";
import { Typography, Container } from "@material-ui/core";

export default function Home({ children, features }) {
  const highlights = features.highlights;
  const categoryFeatures = features.features;
  return (
    <div className="container">
      <Container maxWidth="md">
        {highlights && (
          <div className="container-highlight">
            <div className="header-highlight">
              <Typography variant="h5" gutterBottom>
                Nổi bật
              </Typography>
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
      </Container>
      <style jsx>{styles}</style>
    </div>
  );
}
