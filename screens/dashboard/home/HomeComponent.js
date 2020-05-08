import BlogGrid from "../../../components/ui/BlogGrid";
import {
  Container
} from "@material-ui/core";

export default function Home({ children, features }) {
  const highlights = features.highlights;
  const categoryFeatures = features.features;
  return (
    <Container maxWidth="lg">
      {highlights && (
        <BlogGrid
          title="Nổi bật"
          blogs={highlights}
        />
      )}
      {categoryFeatures.map((categoryFeature, index) => (
        <BlogGrid
          key={index.toString()}
          title={categoryFeature.category.title}
          href={categoryFeature.category.slug}
          blogs={categoryFeature.blogs}
        />
      ))}
      {children}
    </Container>
  );
}
