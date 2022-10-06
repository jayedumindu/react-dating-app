import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Select,
  MenuItem,
  MenuList,
  ListItemText,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomCard from "./components/dashboard/card";

import { useRef, useState } from "react";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Request from "./components/dashboard/request";

let users = [
  {
    id: 0,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Dumindu",
    lname: "Jayasekara",
    age: 21,
    from: "Galle",
    desc: "Loves hiking, traveller, developer",
  },
  {
    id: 1,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Chathuri",
    lname: "Imasha",
    age: 23,
    from: "Akuressa",
    desc: "Artist, eat sleep and draw!",
  },
  {
    id: 2,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Pasindu",
    lname: "Gimhan",
    age: 21,
    from: "Matara",
    desc: "Photographer, loves to party and chill",
  },
];

const styles = {
  cols: {
    height: "300vh",
    boxSizing: "border-box",
    backgroundColor: "rgba(214, 225, 241, 0.5)",
  },
  menus: {
    marginTop: "64px",
    position: "fixed",
    height: "100vh",
    width: "calc(100% / 5)",
  },
  header: {
    backgroundColor: "rgba(28, 58, 102, 1)",
  },
  buttons: {
    color: "aliceblue",
  },
};

function Dashboard() {
  let [comboVal, changeComboVal] = useState(10);
  const changeCombo = (e) => {
    changeComboVal(e.target.value);
  };
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
              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(149, 170, 201, 0.5)",
                }}
              >
                <InputBase
                  placeholder="Search Tinder"
                  sx={{ p: "0 10px", width: "170px" }}
                ></InputBase>
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                <NotificationsIcon sx={styles.buttons} />
              </IconButton>
              <IconButton>
                <AccountCircle sx={styles.buttons} />
              </IconButton>
              <Button sx={{ color: "rgba(168, 179, 195, 1)" }}>Log Out</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Grid
          container
          sx={{
            width: "100vw",
            height: "100%",
            width: "100%",
            marginTop: "64px",
          }}
          justifyContent="center"
          spacing={0}
        >
          {/* menu 1 */}
          <Grid
            container
            item
            sx={{
              ...styles.cols,
              ...styles.menus,
              top: 0,
              left: 0,
              padding: 2,
              display: "block",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                width: "100%",
              }}
            >
              <Typography variant="subtitile1">Switch To</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={comboVal}
                label="Age"
                onChange={changeCombo}
              >
                <MenuItem value={10}>Matrimony</MenuItem>
                <MenuItem value={20}>Default</MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "100%" }}>
              <MenuList>
                <MenuItem>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Connects</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Saved</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Events</ListItemText>
                </MenuItem>
              </MenuList>
            </Box>
          </Grid>
          {/* where user sees content */}
          <Grid
            container
            item
            lg={7}
            sx={{ ...styles.cols, padding: 2 }}
            spacing={0}
          >
            {users.map((user) => {
              return <CustomCard userInfo={user} />;
            })}
          </Grid>
          {/* right panel */}
          <Grid
            container
            item
            sx={{
              ...styles.cols,
              ...styles.menus,
              top: 0,
              right: 0,
              padding: 2,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle1">Friend Requests</Typography>
              <Request></Request>
              <Request></Request>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
