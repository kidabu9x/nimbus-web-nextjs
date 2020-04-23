import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
