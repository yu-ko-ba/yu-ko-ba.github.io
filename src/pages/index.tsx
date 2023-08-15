import { Container, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import appUrls from "../appUrls";
import { OpenGraphHead } from "../components/OpenGraphHead";
import Preview from "../components/Preview";
import theme from "../theme";
import ContentType from "../types/ContentType";
import fetchContents from "../utils/fetchContents";

type Props = {
  contents: ContentType[];
};

export const getStaticProps = async () => {
  const contents = await fetchContents(appUrls);
  return {
    props: {
      contents: contents,
    },
  };
};

export default function Home({ contents }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <OpenGraphHead
        title="yu-ko-ba.github.io"
        description="便利だったりそうでもなかったりするツールたちのリンク集"
      />
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {contents.map((c: ContentType) => (
            <Grid item xs={6} sm={4} key={c.url}>
              <Preview
                title={c.title}
                description={c.description}
                imageUrl={c.image}
                website={c.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
