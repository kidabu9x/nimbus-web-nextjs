import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../configs/theme/primary';
import "../configs/css/global.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const openGraph = {
    url: "https://nimbus.com.vn/",
    title: "Nimbus Study Hub",
    description: "Nơi nâng cao kĩ năng của bạn",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/nimbus-education/image/upload/v1588748885/blogs/uat/logo-white-bg.png"
      }
    ],
    site_name: 'Nimbus Study Hub',
  };
  return (
    <>
      <DefaultSeo
        openGraph={openGraph}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}