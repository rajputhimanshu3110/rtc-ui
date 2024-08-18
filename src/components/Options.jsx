import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { id, callAccepted, name, setName, leaveCall, callEnded, callUser } =
    useContext(SocketContext);

  const [calledID, setCalledID] = useState("");
  return (
    <Container
      style={{
        width: "600px",
        margin: "35px 0",
        padding: 0,
      }}
    >
      <Paper
        elevation={10}
        style={{
          padding: "10px 20px",
          border: "2px solid black",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            style={{
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                padding: 20,
              }}
            >
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField
                label="Caller id"
                value={calledID}
                onChange={(e) => setCalledID(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  style={{
                    marginTop: 20,
                  }}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  style={{
                    marginTop: 20,
                  }}
                  onClick={() => {
                    callUser(calledID);
                  }}
                >
                  Call
                </Button>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                padding: 20,
              }}
            >
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard
                text={id}
                style={{
                  marginTop: 20,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
