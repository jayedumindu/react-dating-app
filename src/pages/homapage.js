import {
  CssBaseline,
  Typography,
  Container,
  Button,
  AppBar,
  Grid,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useRef } from "react";

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
  let person = useRef({ username: "", email: "", pwd: "" });

  const setPerson = (ob) => {
    person.current = ob;
  };

  //   useEffect
  useEffect(() => {
    console.log(person);
  });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xxl" sx={styles.cover}>
        <AppBar sx={styles.header}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                sx={{ marginRight: 5, fontWeight: "bold" }}
              >
                Tinder
              </Typography>
              <Button color="inherit">About</Button>
              <Button color="inherit">Download</Button>
            </Box>
            <Box sx={{ display: "flex" }}>
              {/* <GTranslateIcon sx={{ position: "relative", top: 5 }} /> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                onChange={() => {}}
                sx={{
                  fontSize: 20,
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Sinhala</MenuItem>
              </Select>
              <Button color="inherit">Log In</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Container sx={styles.root} maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h1"> Tinder </Typography>
              <Typography variant="subtitle1">
                This is a dating app for Sri Lankans.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <TextField
                id="filled-basic"
                label="Username"
                variant="filled"
                sx={styles.input}
                value={person.username}
                onChange={(e) => {
                  setPerson({ ...person, username: e.target.value });
                }}
              />
              <TextField
                id="filled-basic"
                label="E-mail"
                variant="filled"
                sx={styles.input}
                value={person.email}
                onChange={(e) => {
                  setPerson({ ...person, email: e.target.value });
                }}
              />
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                sx={styles.input}
                value={person.pwd}
                onChange={(e) => {
                  setPerson({ ...person, pwd: e.target.value });
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
