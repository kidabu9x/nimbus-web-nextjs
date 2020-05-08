import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  makeStyles,
  Box,
  Link,
  InputBase,
  IconButton,
  Divider
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const styles = makeStyles(theme => ({
  root: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    boxShadow: "0px 1px 1px 1px #ccc",
    padding: theme.spacing(2, 0)
  },
  logo: {
    height: "37px",
    marginBottom: "10px"
  },
  searchBox: {
    marginLeft: theme.spacing(2)
  }
}));

const linkStyles = makeStyles(theme => ({
  link: {
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(1, 1.5),
    display: "inline-block",
    "&:hover": {
      background: "rgba(0,0,0,.05)",
      color: "rgba(0,0,0,.95)"
    }
  }
}));

const CustomLink = ({ href, title }) => {
  const classes = linkStyles();
  return (
    <Link
      className={classes.link}
      href={href}
      underline="none"
      color="textPrimary"
    >
      {title}
    </Link>
  )
}

const Header = ({ categories }) => {
  const classes = styles();
  const router = useRouter();
  const [txtSearch, setTxtSearch] = useState("");

  const onSearch = () => {
    if (txtSearch !== "") {
      router.push(`/search?query=${txtSearch}`);
    }
  };

  const onChangeTxtSearch = (evt) => {
    setTxtSearch(evt.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" flexWrap="wrap">
          <Link href="/">
            <img
              alt="logo"
              src="/images/logo.png"
              className={classes.logo}
            />
          </Link>
          <Box
            component="form"
            display="flex"
            className={classes.searchBox}
            onSubmit={onSubmit}
          >
            <InputBase
              className={classes.input}
              value={txtSearch}
              placeholder="Tìm kiếm..."
              inputProps={{ 'aria-label': 'Tìm kiếm...' }}
              onChange={onChangeTxtSearch}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <CustomLink
            href="/"
            title="Trang chủ"
          />

          {categories &&
            categories.map((category, index) => (
              <CustomLink
                key={index.toString()}
                href={`/${category.slug}`}
                title={category.title}
              />
            ))}
        </Box>
      </Container>
    </div>
  );
};

export default Header;
