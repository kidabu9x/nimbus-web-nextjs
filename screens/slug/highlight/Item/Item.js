import React, { useState, useRef, useEffect } from "react";
import {
  Link,
  Grid,
  Typography,
  Box
} from "@material-ui/core";

export const HighlightItemComponent = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const placeholderRef = useRef(null);
  useEffect(() => {
    if (!visible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setVisible(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [visible, placeholderRef]);
  return (
    <Box marginBottom={1}>
      <Link href={`/${data.slug}`} color="textPrimary" underline="none">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            {(visible
              ?
              <img
                src={
                  data.thumbnail
                    ? data.thumbnail
                    : "https://react.semantic-ui.com/images/avatar/large/matthew.png"
                }
              />
              :
              <div style={{ backgroundColor: '#EEE' }} ref={placeholderRef} />
            )}
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{data.title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};
