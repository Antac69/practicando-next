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
import {
  FiDribbble,
  FiInstagram,
  FiPlay,
  FiChevronRight,
} from "react-icons/fi";
import { Box, Grid } from "@mui/joy";
import card3 from "@/public/img/2 fondo.jpg";

const InfoCards = () => {
  return (
    <Grid container marginX={1.5}>
      <Card
        sx={{
          Width: "100%",
          minHeight: "320px",
          flexGrow: 1,
          "--Card-radius": "30px",
        }}
      >
        <CardCover>
          <Image src={cad1} alt="" />
        </CardCover>
        <Grid container columns={2} justifyContent="space-between" width="100%">
          <Chip
            paddingLeft={2}
            variant="solid"
            size="lg"
            sx={{
              bgcolor: "background.body",
              fontSize: "1.3em",
              color: "info.500",
              fontFamily: "'Questrial', sans-serif",
            }}
          >
            How it works
          </Chip>
          <Grid container columnGap={1}>
            <IconButton
              color="soft"
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                padding: "8px",
                color: "info.500",
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
                color: "info.500",
              }}
            >
              <FiDribbble size={23} />
            </IconButton>
          </Grid>
        </Grid>
        <CardContent sx={{ justifyContent: "end" }}>
          <Typography
            fontFamily="'Questrial', sans-serif"
            padding={2}
            borderRadius={25}
            sx={{
              bgcolor: "background.backdrop",
              color: "common.white",
              backdropFilter: "blur(5px)",
              width: "40%",
              minWidth: "219px",
              lineHeight: "1em",
            }}
          >
            Plunge into the world <br /> of creating 3D illustrations using AI
            technologies
          </Typography>
        </CardContent>
        <IconButton
          sx={{
            position: "absolute",
            bottom: "0",
            right: 0,
            borderRadius: 50,
            padding: "1em 0.83em 1em 1.171em",
            justifyContent: "center",
            bgcolor: "common.black",
            outline: ".5em solid",
          }}
          style={styles.btnCard}
        >
          <FiPlay size={18}></FiPlay>
        </IconButton>
      </Card>
      <Card
        sx={{
          Width: "100%",
          flexGrow: 1,
          paddingLeft: 3,
          "--Card-radius": "30px",
        }}
      >
        <CardContent>Explore collections</CardContent>
        <IconButton>
          <FiChevronRight></FiChevronRight>
        </IconButton>
      </Card>
      <Card
        sx={{
          Width: "100%",
          flexGrow: 1,
          paddingLeft: 3,
          "--Card-radius": "30px",
        }}
      >
        <CardCover>
          <Image src={card3} alt="" />
        </CardCover>

        <CardContent>
          Have questions? Contact our manager and get answers
        </CardContent>
        <CardContent>
          FAQ{" "}
          <Chip
            sx={{
              background: "white",
            }}
            paddingLeft={2}
            color="neutral"
            variant="soft"
            size="lg"
          >
            Popular
          </Chip>
        </CardContent>
        <IconButton>
          <FiChevronRight></FiChevronRight>
        </IconButton>
      </Card>
    </Grid>
  );
};

export default InfoCards;
