import App from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

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
        <Component {...pageProps} />
        <style jsx global>{`
			      @font-face {
			        font-family: 'Roboto';
            }
            body, html {
              font-family: 'Roboto';
            }
				`}</style>
      </>
    );
  }
}