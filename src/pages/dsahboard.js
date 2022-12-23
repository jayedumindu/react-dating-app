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
  Divider,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomCard from "./components/dashboard/card";

import { useRef, useState } from "react";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";

import Request from "./components/dashboard/request";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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
    fname: "Kasun",
    lname: "Gunasekara",
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
  {
    id: 3,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Dumindu",
    lname: "Jayasekara",
    age: 21,
    from: "Galle",
    desc: "Loves hiking, traveller, developer",
  },
  {
    id: 4,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Kasun",
    lname: "Gunasekara",
    age: 23,
    from: "Akuressa",
    desc: "Artist, eat sleep and draw!",
  },
  {
    id: 5,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Pasindu",
    lname: "Gimhan",
    age: 21,
    from: "Matara",
    desc: "Photographer, loves to party and chill",
  },
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
    fname: "Kasun",
    lname: "Gunasekara",
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
  {
    id: 3,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Dumindu",
    lname: "Jayasekara",
    age: 21,
    from: "Galle",
    desc: "Loves hiking, traveller, developer",
  },
  {
    id: 4,
    img_url: "https://picsum.photos/id/177/367/267",
    fname: "Kasun",
    lname: "Gunasekara",
    age: 23,
    from: "Akuressa",
    desc: "Artist, eat sleep and draw!",
  },
  {
    id: 5,
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
    height: "auto ",
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
  menuItems: {
    marginLeft: "10px",
  },
};

function Dashboard() {
  let [age, setAge] = useState(0);
  let [gender, setGender] = useState(0);
  let [job, setJob] = useState(0);

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
                  // placeholder="Search Tinder"
                  sx={{ p: "0 10px", width: "170px", color: "aliceblue" }}
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
            ></Box>
            <Box sx={{ width: "100%" }}>
              <MenuList>
                <MenuItem>
                  <HomeIcon />
                  <ListItemText sx={styles.menuItems}>Home</ListItemText>
                </MenuItem>
                <MenuItem>
                  <GroupIcon />
                  <ListItemText sx={styles.menuItems}>Connects</ListItemText>
                </MenuItem>
                <MenuItem>
                  <BookmarkAddedIcon />
                  <ListItemText sx={styles.menuItems}>Saved</ListItemText>
                </MenuItem>
                <MenuItem>
                  <EmojiEventsIcon />
                  <ListItemText sx={styles.menuItems}>Events</ListItemText>
                </MenuItem>
              </MenuList>
            </Box>
            <Divider style={{ width: "100%" }} />
            {/* filter set */}
            <Box sx={{ paddingBottom: "20px" }}>
              {/* checkbox */}
              <FormGroup sx={{ padding: "10px" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Filter search results"
                />
              </FormGroup>
              <Box>
                <FormControl sx={{ m: 1, minWidth: "25%" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>18 - 25</MenuItem>
                    <MenuItem value={2}>25 - 35</MenuItem>
                    <MenuItem value={3}>Above 35</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "25%" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    autoWidth
                    label="Gender"
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "80%" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Job
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    autoWidth
                    label="Job"
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Commerce</MenuItem>
                    <MenuItem value={2}>IT and Tech</MenuItem>
                    <MenuItem value={3}>Banking</MenuItem>
                    <MenuItem value={4}>Construction</MenuItem>
                    <MenuItem value={5}>Teaching</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "80%" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Lives in
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={0}
                    onChange={(e) => {}}
                    autoWidth
                    label="Lives in"
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Galle</MenuItem>
                    <MenuItem value={2}>Matara</MenuItem>
                    <MenuItem value={3}>Colombo</MenuItem>
                    <MenuItem value={4}>Ampara</MenuItem>
                    <MenuItem value={5}>Monaragala</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Divider style={{ width: "100%" }} />
            <Box>
              <Typography variant="caption">Boosted Content</Typography>
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
            <Divider variant="middle" />
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
              <Button>See More :</Button>
              <Divider style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
