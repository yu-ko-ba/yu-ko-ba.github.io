import { Container, ThemeProvider } from "@mui/material";
import theme from "../theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        
      </Container>
    </ThemeProvider>
  )
}
