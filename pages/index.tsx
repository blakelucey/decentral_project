import {
  Container,
  CssBaseline,
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
} from "@mui/material";
import ResponsiveAppBar from "../components/AppBar/ResponsiveAppBar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CookieConsent from "react-cookie-consent";
import { useState } from "react";
import axios from "axios";

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
  const [IP, setIP]: any = useState();
  const [checkAccepted, setCookies]: any = useState("False");
  const handleClick: any = () => {
    console.log("click!");
  };

  // Fetch IP Address with Ipify:
  fetch("https://api64.ipify.org?format=json")
    .then((results: any) => results.json())
    .then((data) => setIP(data.ip));
  console.log("IP Address: ", IP);

  // Check user language via navigator
  const userLanguage = () => {
    if (typeof window !== "undefined") {
      if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0] || navigator.language;
      }
    }
  };
  console.log("User language: ", userLanguage());

  // Check mobile or desktop:
  const isMobile: any = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      typeof window !== "undefined" ? navigator.userAgent : ""
    );
  console.log("Mobile?: ", isMobile());

  // Check browser:
  const userAgentCheck =
    typeof window !== "undefined" ? navigator.userAgent : false;
  console.log("browser: ", userAgentCheck);

  // Screen size:
  const outerWidth = typeof window !== "undefined" ? window.outerWidth : false;
  const outerHeight =
    typeof window !== "undefined" ? window.outerHeight : false;

  const screenSize =
    typeof window !== "undefined"
      ? `${outerWidth}x${outerHeight} pixels`
      : false;

  console.log("screen size: ", screenSize);

  // Browser size:
  const innerWidth = typeof window !== "undefined" ? window.innerWidth : false;
  const innerHeight =
    typeof window !== "undefined" ? window.innerHeight : false;

  const browserSize =
    typeof window !== "undefined"
      ? `${innerWidth}x${innerHeight} pixels`
      : false;

  console.log("browser size: ", browserSize);

  // Check cookies:
  const handleCookies = () => {
    setCookies("True");
  };

  console.log("cookies accepted: ", checkAccepted);

  const fetchData: any = async () => {
    const response: any = await axios.post(
      `/api/userInformation?IP=${IP}&language=${userLanguage()}&mobile=${isMobile()}&browser=${userAgentCheck}&screenSize=${screenSize}&browserSize=${browserSize}&cookiesAccepted=${checkAccepted}`
    );
    console.log('response: ', response);
  };

  console.log('fetch: ', fetchData);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Container maxWidth="lg">
          <Box sx={{ margin: 20, marginLeft: 48 }}>
            <Card sx={{ minWidth: 250, maxWidth: 400 }} elevation={11}>
              <div>
                <CardActionArea className={styles.cardBackground}>
                  <CardMedia>
                    <Image
                      src="/pexels-caleb-oquendo-7765745.jpg"
                      height={400}
                      width={400}
                      priority={true}
                      alt="product"
                    />
                  </CardMedia>
                  <CardContent className={styles.cardBackground}>
                    <Typography variant="body1" color="#fff">
                      <Tooltip title="Purchase Product">
                        <Button fullWidth onClick={handleClick}>
                          <Typography color="#fff">Buy</Typography>
                        </Button>
                      </Tooltip>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            </Card>
          </Box>
          <CookieConsent
            enableDeclineButton
            onAccept={handleCookies}
            style={{ background: "#5893df" }}
            buttonStyle={{ color: "#192231", fontSize: "13px" }}
            location="bottom"
            visible="show"
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </Container>
      </ThemeProvider>
    </div>
  );
}
