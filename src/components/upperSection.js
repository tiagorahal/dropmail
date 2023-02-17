import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Typography from "@mui/material/Typography";
import SyncIcon from "@mui/icons-material/Sync";
import LoadingButton from "@mui/lab/LoadingButton";

const calcTimeLeft = (t) => {
  if (!t) return 0;
  const left = t - new Date().getTime();
  if (left < 0) return 0;
  return left;
};

function useCountDown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));

  useEffect(() => {
    setTimeLeft(calcTimeLeft(end));

    const timer = setInterval(() => {
      const targerLeft = calcTimeLeft(end);
      setTimeLeft(targerLeft);

      if (targerLeft === 0) {
        clearInterval(timer);
      }
    });

    return () => clearInterval(timer);
  }, [end]);

  return [timeLeft, setEndTime];
}

export default function UpperSection() {
  const [text, setText] = useState("");
  const endTime = new Date().getTime() + 5000;
  const [timeLeft, setEndTime] = useCountDown(endTime);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState([]);

  const seconds = Math.floor(timeLeft / 1000) % 60;

  // const isLoadingButton = () => {
  //   setLoading(true);
  // };

    const fetchData = async () => {
      const result = await axios("http://localhost:3001");
      setEmail(result.data.introduceSession.addresses[0].address);
    };

  const copy = () => {
    navigator.clipboard.writeText(text);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://localhost:3001");
  //     setEmail(result.data.introduceSession.addresses[0].address);
  //   };

  //   fetchData();
  // }, []);

  var loadingText = `Refresh ${seconds}`;
  console.log(email)

  return (
    <div className="bg-slate-200 container mx-auto border-solid border-2 rounded-md min-h-[170px] mt-2 flex justify-center justify-items-center flex-col">
      <Paper
        component="form"
        sx={{
          position: "relative",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
          width: "55vh",
        }}
      >
        <Typography
          variant="subtitle2"
          component="h6"
          sx={{
            position: "absolute",
            top: -25,
          }}
        >
          Your temporary e-mail address.
        </Typography>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={email}
          name="test"
          inputProps={{ "aria-label": "email" }}
          onChange={(e) => setText(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={copy}
        >
          <ContentCopyIcon sx={{ color: "black" }} />
          <Typography
            fontSize="large"
            sx={{
              color: "gray",
            }}
          >
            Copy
          </Typography>
        </IconButton>
      </Paper>

      <div className="flex justify-center justify-items-center pt-1">
        <LoadingButton
          variant="text"
          loading={loading}
          size="medium"
          loadingIndicator={loadingText}
          onClick={() => fetchData()}
          sx={{
            minWidth: 300,
          }}
        >
          Refresh
          <SyncIcon />
        </LoadingButton>
      </div>
    </div>
  );
}
