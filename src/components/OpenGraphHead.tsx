import Head from "next/head";

type Props = {
  title: string;
  description?: string;
};

export const OpenGraphHead = ({ title, description }: Props) => {
  // pages/_document.tsx のHead要素へprefixを追加してください。
  // 例：<Head prefix="og: https://ogp.me/ns# website: https://ogp.me/ns/website#">
  return (
    <Head>
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/yu-ko-ba/yu-ko-ba.github.io/main/public/maskable_icon_x128.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@yu_ko_ba" />
      <meta name="twitter:creator" content="@yu_ko_ba" />

      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </Head>
  );
};
