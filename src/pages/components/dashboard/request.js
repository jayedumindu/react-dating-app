import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function Request() {
  return (
    <Card
      sx={{ background: "aliceblue", boxShadow: "0", marginBottom: "10px" }}
    >
      <CardContent sx={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>
            <Avatar
              alt="profile"
              src="https://picsum.photos/id/1005/367/267"
              sx={{ width: "80px", height: "80px" }}
            />
          </div>
          <div>
            <div>
              <Typography variant="subtitle1">Pasan Maduranga</Typography>
              <Typography variant="caption" sx={{ display: "block" }}>
                Have 3 mutual connects
              </Typography>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button variant="contained">Accept</Button>
              <Button>Decline</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Request;
