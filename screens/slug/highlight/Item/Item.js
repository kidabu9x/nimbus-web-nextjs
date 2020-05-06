import React from "react";
import {
  Link,
  Grid,
  Typography,
  Box
} from "@material-ui/core";

export const HighlightItemComponent = ({ data }) => {
  return (
    <Box marginBottom={1}>
      <Link href={`/${data.slug}`} color="textPrimary" underline="none">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <img
              src={
                data.thumbnail
                  ? data.thumbnail
                  : "https://react.semantic-ui.com/images/avatar/large/matthew.png"
              }
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{data.title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};
