import Head from "next/head";

export default function Meta() {
  const title = "CodeDay - Intro to Github";
  const description = "Learn the basics of Git/GitHub!";
  const keywords = "codeday, github, hello world";
  const author = "";
  const twitter = "@codeday";
  //const image = "/ogimage.png"; // This is your OpenGraph image
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <link
        rel="preload"
        href="/font/Sofia/Sofia Pro Regular Az.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/font/Sofia/Sofia Pro Bold Az.otf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}
