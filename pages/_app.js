import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5qykfsbn5o"></script>
      </Head>
      <div className="container">
        <Header>
          <Nav />
        </Header>
        <Component {...pageProps} />
        <Footer />
      </div>
      <style jsx global>{`
        @font-face {
          font-family: "Arita-buri-SemiBold";
          src: url("/fonts/Arita-buriL.otf") format("truetype");
          font-weight: 100;
          font-style: normal;
        }
        @font-face {
          font-family: "Arita-buri-SemiBold";
          src: url("/fonts/Arita-buriM.otf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Arita-buri-SemiBold";
          src: url("/fonts/Arita-buriSB.otf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }
  
        }

        @font-face {
          font-family: "Noto Sans CJK KR";
          font-style: normal;
          font-weight: normal;
          src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
        }
        @font-face {
          font-family: "Noto Sans CJK KR";
          font-style: normal;
          font-weight: 100;
          src: url("/fonts/NotoSansKR-Thin.otf") format("truetype");
        }
        @font-face {
          font-family: "Noto Sans CJK KR";
          font-style: normal;
          font-weight: bold;
          src: url("/fonts/NotoSansKR-Bold.otf") format("truetype");
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: "Arita-buri-SemiBold", "Noto Sans CJK KR", sans-serif;
          vertical-align: baseline;
          box-sizing: border-box;
          text-decoration: none;
          color: #353535;

        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.2rem;
        }
        h3 {
          font-size: 1.8rem;
        }
        h4 {
          font-size: 1.33rem;
        }
        h5 {
          font-size: 0.83rem;
        }
        h6 {
          font-size: 0.67rem;
        }
      `}</style>
    </>
  );
}

export default MyApp;
