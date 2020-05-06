import React, { useState } from "react";
import { HighlightItemComponent } from "./Item/Item";
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  InputBase,
  IconButton,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 0.25),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const HighlightComponent = ({ data }) => {
  const classes = useStyles();

  const router = useRouter();

  const [txtSearch, setTxtSearch] = useState("");

  const onSearch = () => {
    if (txtSearch !== "") {
      router.push(`/search?query=${txtSearch}`);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const handleTextChange = (event) => {
    setTxtSearch(event.target.value);
  }

  return (
    <>
      <Box component="form" className={classes.root} onSubmit={onSubmit}>
        <InputBase
          className={classes.input}
          value={txtSearch}
          placeholder="Tìm kiếm..."
          inputProps={{ 'aria-label': 'Tìm kiếm...' }}
          onChange={handleTextChange}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>Bài viết nổi bật:</Typography>
        {data.map((highlight, index) => (
          <HighlightItemComponent key={index.toString()} data={highlight} />
        ))}
      </Box>
    </>
  );
};
