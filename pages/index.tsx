import {
  Container,
  CssBaseline,
  Box,
  Paper,
  Stack,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import ResponsiveAppBar from "../components/AppBar/ResponsiveAppBar";
import Footer from '../components/Footer/StickyFooter';
import Image from "next/image";

const theme = createTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
});

export default function Home() {
  const handleClick: any = () => {
    console.log("click!");
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Box sx={{ margin: 20, marginLeft: 48 }}>
          <Card sx={{ minWidth: 250, maxWidth: 400 }} elevation={11}>
            <div>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src="/pexels-caleb-oquendo-7765745.jpg"
                    height={400}
                    width={400}
                    priority={true}
                    alt="product"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="body1" color="#fff">
                    <div>
                      <Button fullWidth onClick={handleClick}>
                        <Typography color="#fff">Buy</Typography>
                      </Button>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          </Card>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
