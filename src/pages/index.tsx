import { Container, Grid, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import appUrls from "../appUrls";
import Preview from "../components/Preview";
import theme from "../theme";
import ContentType from "../types/ContentType";
import fetchContent from "../utils/fetchContent";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {appUrls.map((url) => (
            <Grid item xs={6} sm={4} key={url}>
              <Preview src={url} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
