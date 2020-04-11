import React, { Component } from "react";
import { config } from "../config/config.yml";
import PropTypes from "prop-types";
import { fade, withStyles } from "@material-ui/core/styles";
import Router, { withRouter } from "next/router";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab, Toolbar, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  grow: {
    padding: "8px 20px 0px 20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    borderBottom: "1px solid black",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "/",
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
    Router.push({
      pathname: newValue,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // there is a click handler on div.backdrop to close the
    // nav if the user clicks outside of the navigation component
    return (
      <AppBar color="transparent" position="static" className={classes.grow}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Viết bài
            </Button>
            <Button size="small" className={classes.margin}>
              Đăng ký
            </Button>
            <Button size="small" className={classes.margin}>
              Đăng nhập
            </Button>
          </label>
        </Toolbar>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          {config.navigation.map((navData) => (
            <Tab label={navData.text} value={navData.link} key={navData.key} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Navigation));

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
