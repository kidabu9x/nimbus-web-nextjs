import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Link,
  makeStyles,
  Box
} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailIcon from '@material-ui/icons/Email';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: "#3c3d41",
    color: "#fff"
  },
  copyRight: {
    textAlign: "center",
    backgroundColor: "#333333"
  },
  logo: {
    height: 30
  },
  iframe: {
    width: "100%"
  }
}));

const CustomLink = ({ href, text, isBlock = true }) => {
  return (
    <Typography
      component="span"
      variant="body2"
      display={isBlock ? "block" : "inline"}
      gutterBottom
    >
      <Link href={href} color="inherit" underline="none">
        {text}
      </Link>
    </Typography>
  )
}

const Footer = ({ categories }) => {
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

  const getHalfOfCategories = (firstHalf = true) => {
    const newCategories = [...categories];
    return firstHalf
      ? newCategories.splice(0, Math.ceil(newCategories.length / 2))
      : newCategories.splice(
        Math.ceil(newCategories.length / 2),
        newCategories.length
      );
  };

  const classes = styles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" style={{ paddingTop: 40 }}>
        <Grid container spacing={1} style={{ marginBottom: 40 }}>
          <Grid item xs={12} sm={4} style={{ marginBottom: 40 }}>
            {visible
              ?
              <img
                alt="logo"
                src="/images/logo_footer.png"
                className={classes.logo}
              />
              :
              <div aria-label="logo" ref={placeholderRef} />
            }
            <Typography variant="body2" gutterBottom>
              CÔNG TY TNHH NIMBUS
              </Typography>
            <Typography variant="body2" gutterBottom>
              Địa chỉ: Số 5 ngõ 128 Phố Vọng, Hà Nội
            </Typography>
            <Typography variant="body2" gutterBottom>
              Địa chỉ: Số 5 ngõ 128 Phố Vọng, Hà Nội
            </Typography>
            <Typography variant="body2" gutterBottom>
              Giấy phép ĐKKD số 0107927478 do Sở Kế hoạch và Đầu tư Hà Nội cấp
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tên miền:{" "}
              <CustomLink
                href="https://nimbus.com.vn"
                text="https://nimbus.com.vn"
                isBlock={false}
              >
              </CustomLink>
            </Typography>
            <Typography variant="body2">
              Hotline: 0969 849 603
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} style={{ marginBottom: 40 }}>
            <Grid container spacing={0}>
              <Grid item xs>
                {getHalfOfCategories().map((category, index) => (
                  <CustomLink key={index.toString()} href={`/${category.slug}`} text={category.title}>
                  </CustomLink>
                ))}
              </Grid>
              <Grid item xs>
                {getHalfOfCategories(false).map((category, index) => (
                  <CustomLink key={index.toString()} href={`/${category.slug}`} text={category.title}>
                  </CustomLink>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} style={{ marginBottom: 40 }}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnimbustrainingcenter%2F&tabs=timeline&width=300&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=709969695863741"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className={classes.iframe}
            />
            <Box display="flex" justifyContent="center">
              <Link href="tel:+84969849603">
                <ContactsIcon></ContactsIcon>
              </Link>
              <Link href="https://www.facebook.com/nimbustrainingcenter/">
                <FacebookIcon></FacebookIcon>
              </Link>
              <Link href="https://www.facebook.com/nimbustrainingcenter/">
                <EmailIcon></EmailIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.copyRight}>
        <Typography variant="caption" gutterBottom align="center">
          Copyright @ 2020 - Bản quyền của Công ty TNHH Giáo dục và Đào tạo
          Nimbus
        </Typography>
      </div>
    </footer >
  );
};

export default Footer;
