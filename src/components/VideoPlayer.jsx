import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  console.log(call);
  return (
    <Grid
      container
      style={{
        justifyContent: "center",
      }}
    >
      {stream && (
        <Paper
          style={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || `Untitled`}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{
                width: "550px",
              }}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper
          style={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={{
                width: "550px",
              }}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
