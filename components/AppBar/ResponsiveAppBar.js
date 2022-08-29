import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./ResponsiveAppBar.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import {
  Link,
  Stack,
  Button,
  Typography,
  Toolbar,
  IconButton,
  Box,
  AppBar,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 0.5 }}>
          <AppBar color="primary" sx={{ padding: -100 }} position="fixed">
            <Toolbar className={styles.appbar_positioning}>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <div className={styles.underline}>Get in Touch</div>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <div className={styles.underline} color="#fff">
                    About
                  </div>
                </Button>
              </Box>
              <Box>
                <div className={styles.center}>
                  <Typography variant="h3" className={styles.name}>
                    Product Page
                  </Typography>
                </div>
              </Box>
              <Typography className={styles.sign_in_position}>
                <Stack direction="row" spacing={2}>
                    <Button variant="text" className={styles.sign_in_effect}>
                      <Typography color="#fff" variant="h6" className={styles.underline}>
                        Sign In
                      </Typography>
                    </Button>
                    <Button variant="contained" color="primary">
                      <Typography color="#fff" variant="h6" className={styles.underline}>
                        Sign Up
                      </Typography>
                    </Button>
                </Stack>{" "}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
