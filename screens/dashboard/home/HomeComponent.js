import Category from "../category/CategoryComponent";
import BlogCard from "../../../components/ui/BlogCard";
import {
  Typography,
  Container,
  Grid,
  Divider,
  Box
} from "@material-ui/core";

export default function Home({ children, features }) {
  const highlights = features.highlights;
  const categoryFeatures = features.features;
  return (
    <Container maxWidth="lg">
      {highlights && (
        <>
          <Typography variant="h5" gutterBottom>
            Nổi bật
            </Typography>
          <Divider />
          <Box marginTop={2} flexGrow={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <BlogCard blog={highlights[0]} showDescription={true} />
              </Grid>
              <Grid container item xs={12} sm={6} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <BlogCard blog={highlights[1]} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BlogCard blog={highlights[2]} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BlogCard blog={highlights[3]} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BlogCard blog={highlights[4]} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      {categoryFeatures.map((categoryFeature, index) => (
        <Category key={index.toString()} categoryFeature={categoryFeature} />
      ))}
      {children}
    </Container>
  );
}
