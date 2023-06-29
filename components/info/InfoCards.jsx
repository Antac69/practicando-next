import React from "react";
import styles from "@/styles/Info.module.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import cad1 from "@/public/img/card1.jpg";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/Button";
import { FiDribbble, FiInstagram } from "react-icons/fi";
import { Box, Grid } from "@mui/joy";

const InfoCards = () => {
  return (
    <Grid container marginX={1.5}>
      <Card
        sx={{
          Width: "100%",
          flexGrow: 1,
          paddingLeft: 3,
          "--Card-radius": "30px",
        }}
      >
        <CardCover>
          <Image src={cad1} alt="" />
        </CardCover>
        <Grid
          paddingTop={2}
          container
          spacing={2}
          columns={2}
          justifyContent="space-between"
        >
          <Chip
            sx={{
              background: "white",
            }}
            paddingLeft={2}
            color="neutral"
            variant="soft"
            size="lg"
          >
            How it works
          </Chip>
          <Grid container columnGap={1} paddingRight={2}>
            <IconButton
              color="soft"
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                padding: "8px",
                color: "purple",
              }}
            >
              <FiInstagram size={23} />
            </IconButton>
            <IconButton
              color="soft"
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                padding: "8px",
                color: "purple",
              }}
            >
              <FiDribbble size={23} />
            </IconButton>
          </Grid>
        </Grid>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCards;
