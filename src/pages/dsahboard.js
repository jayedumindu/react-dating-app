import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  CssBaseline,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const styles = {
  cols: {
    height: "300vh",
    boxSizing: "border-box",
    backgroundColor: "rgba(178, 226, 201, 0.5)",
  },
  menus: {
    position: "fixed",
    height: "100vh",
    width: "calc(100% / 5)",
    backgroundColor: "red",
  },
};

function Dashboard() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xxl">
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
              <Button color="inherit">Log In</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Grid
          container
          sx={{ width: "100vw", height: "100%", width: "100%" }}
          justifyContent="center"
          spacing={0}
        >
          <Grid
            container
            item
            sx={{ ...styles.cols, ...styles.menus, top: 0, left: 0 }}
          >
            <Typography variant="h3">First Col</Typography>
          </Grid>
          <Grid container item lg={7} sx={styles.cols}>
            <Typography variant="h3">First Col</Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ ...styles.cols, ...styles.menus, top: 0, right: 0 }}
          >
            <Typography variant="h3">First Col</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
