import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CustomCard(props) {
  let { id, img_url, fname, lname, age, from, desc } = props.userInfo;
  return (
    <>
      <Grid
        item
        xl={4}
        key={id}
        display="flex"
        justifyContent="center"
        sx={{ height: "fit-content" }}
      >
        <Card sx={{ width: "90%" }}>
          <CardMedia
            height="180"
            component="img"
            image={img_url}
            alt="profile-image"
          ></CardMedia>
          <CardContent>
            <Typography variant="h3">{fname}</Typography>
            <Typography variant="h5">{lname}</Typography>
            <Typography variant="subtitle">{age} from </Typography>
            <Typography variant="subtitle">{from}</Typography>
            <Typography variant="body2">{desc}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <AddIcon />
              Connect
            </Button>
            <Button size="small">More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default CustomCard;
