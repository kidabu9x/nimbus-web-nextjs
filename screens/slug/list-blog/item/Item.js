import React from "react";
import {
  Link,
  Grid,
  makeStyles,
  Box,
  Typography
} from "@material-ui/core";

const styles = makeStyles(theme => ({
  thumb: {
    maxWidth: "290px"
  }
}));

export const ListBlogItemComponent = ({ data }) => {
  const classes = styles();
  return (
    <Link href={`/${data.slug}`} color="inherit" underline="none">
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <img
            className={classes.thumb}
            src={data.thumbnail}
          />
        </Grid>
        <Grid item xs={8}>
          <Box marginBottom={2}>
            <Typography variant="h6">
              {data.title}
            </Typography>
          </Box>

          <Box marginBottom={1}>
            <Typography variant="body2">
              {data.description}
            </Typography>
          </Box>

          <Typography variant="body2">
            Đọc tiếp...
          </Typography>
        </Grid>
      </Grid>

    </Link>
  );
};
