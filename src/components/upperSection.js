import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Typography from "@mui/material/Typography";
import Button from "@mui/lab/LoadingButton";
import SyncIcon from '@mui/icons-material/Sync';

export default function UpperSection() {
  return (
    <div class="bg-slate-200 container mx-auto border-solid border-2 rounded-md min-h-[300px] mt-2 flex justify-center justify-items-center flex-col">
      <Paper
        component="form"
        sx={{
          position: "relative",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
          width: "60vh",
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
          placeholder="Email"
          name="test"
          inputProps={{ "aria-label": "email" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <ContentCopyIcon sx={{ color: "black" }} />
        </IconButton>
      </Paper>

      <div className="flex justify-center justify-items-center pt-7">
        <Button size="medium">
          Refresh
          <SyncIcon />
        </Button>
      </div>
    </div>
  );
}
