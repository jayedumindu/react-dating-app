import {
  CssBaseline,
  Typography,
  Container,
  Button,
  AppBar,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const styles = {
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    height: "80%",
    margin: "auto",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 180,
    borderRadius: "0.2rem",
    paddingTop: 10,
  },
  cover: {
    backgroundImage: `url(${require("../assets/cover.jpg")})`,
    backgroundSize: "cover",
    height: "100vh",
  },
  header: {
    backgroundColor: "rgba(25, 28, 25, 0.8)",
  },
  input: {
    width: "80%",
    margin: "20px 0",
  },
  footer: {
    fontSize: "smaller",
    color: "rgba(25, 28, 25, 0.51)",
  },
};

function HomePage() {
  let [username, setName] = useState("");
  let [mail, setMail] = useState("");
  let [pwd, setPwd] = useState("");

  function checkCredentials(attr, val) {
    switch (attr) {
      case "USERNAME":
        setName(val);
        break;
      case "EMAIL":
        setMail(val);
        break;
      case "PWD":
        setPwd(val);
        break;
      default:
        console.log("credentials updated!");
        break;
    }
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xxl" sx={styles.cover}>
        <AppBar sx={styles.header}>
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Tinder
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Customize</Button>
            <Button color="inherit">Customize</Button>
          </Toolbar>
        </AppBar>
        <Container sx={styles.root} maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h1"> Tinder </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subtitle1">
                This is a dating app for Sri Lankans.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <TextField
                id="filled-basic"
                label="Enter Name"
                variant="filled"
                sx={styles.input}
                onChange={(e) => {
                  checkCredentials("USERNAME", e.target.value);
                }}
              />
              <TextField
                id="filled-basic"
                label="Enter Email"
                variant="filled"
                sx={styles.input}
                onChange={(e) => {
                  checkCredentials("EMAIL", e.target.value);
                }}
              />
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                sx={styles.input}
                onChange={(e) => {
                  checkCredentials("PWD", e.target.value);
                }}
              />
              <Button>Get Started</Button>
            </Grid>
            <Grid item sx={styles.footer} md={12}>
              <Box>
                <IconButton aria-label="facebook" color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter" color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="whatsapp" color="primary">
                  <WhatsAppIcon />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="p">All rights reserved 2022</Typography>
                <br />
                <Typography variant="p">Develpoed by jayedumindu</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default HomePage;
