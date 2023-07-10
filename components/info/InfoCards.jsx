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
import AvatarGroup from "@mui/joy/AvatarGroup";
import Avatar from '@mui/joy/Avatar';

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
    <Grid container marginX={1.5} direction="column" gap={2}>
      <Card
        sx={{
          Width: "100%",
          minHeight: "250px",
          flexGrow: 1,
          overflow: "hidden",
          "--Card-radius": "1.5em",
          boxShadow: "none",
        }}
      >
        <CardCover>
          <Image src={cad1} alt="" />
        </CardCover>
        <Grid container columns={2} justifyContent="space-between" width="100%">
          <Chip
            variant="solid"
            size="lg"
            sx={{
              paddingLeft:2,
              bgcolor: "background.body",
              color: "info.500",
              fontFamily: "'Questrial', sans-serif",
              fontSize: "1.3em",
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
            right: "0",
            borderRadius: 50,
            padding: "1em 0.90em 1em 1.1em",
            justifyContent: "center",
            bgcolor: "common.black",
            outline: ".5em solid",
          }}
          className={styles.btnCard}
        >
          <FiPlay size={18}></FiPlay>
        </IconButton>
      </Card>
      <Card 
        sx={{
          Width: "100%",
          height: "150px",
          flexGrow: 1,
          paddingLeft: 3,
          display:'flex',
          flexDirection:'row',
          color: "white",
          "--Card-radius": "30px",
          background: "linear-gradient(90deg,#0D0BC4,#605CF4 50%)",
          alignItems:'center',
        }}
      >
        <AvatarGroup
          sx={{
            "--Avatar-ringSize": "0px",
            "--Avatar-size": "3em",
          }}
        >
          <Avatar alt="image1" src="/img/card1.jpg" />
          <Avatar alt="image2" src="/img/2 fondo.jpg"/>
          <Avatar alt="image3" src="/img/hugol-halpingston-n-g5PWDZnro-unsplash.jpg"/>
        </AvatarGroup>
          <Typography fontFamily="'Questrial', sans-serif" sx={{fontSize:'1.6em',lineHeight:'1em'}}color="initial" width="min-content">
          Explore collections
          </Typography>
        <IconButton
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            borderRadius: 50,
            padding: "1em 0.90em 1em 1.05em",
            justifyContent: "center",
            bgcolor: "common.black",
            outline: ".5em solid",
          }}
          className={styles.btnCard}
        >
          <FiChevronRight></FiChevronRight>
        </IconButton>
      </Card>
      <Card
        sx={{
          Width: "100%",
          height:'180px',
          flexGrow: 1,
          paddingLeft: 3,
          "--Card-radius": "30px",
        }}
      >
        <CardCover>
          <Image src={card3} alt="" />
        </CardCover>
        <CardContent sx={{color:'white',width:'80%'}}>
          Have questions? Contact our manager and get answers
        </CardContent>
        <CardContent sx={{flexDirection:'row',alignItems:'flex-end'}}>
          <Typography sx={{fontSize:'4em'}} lineHeight={.9} width='min-content'>
          FAQ
          </Typography>
          <Chip
            sx={{
              height:'min-content',
              paddingLeft:2,
              bgcolor: "background.body",
              color: "info.500",
              fontFamily: "'Questrial', sans-serif",
            }}
            color="neutral"
            variant="soft"
            size="lg"
          >
            Popular
          </Chip>
        </CardContent>
        <IconButton
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            borderRadius: 50,
            padding: "1em 0.90em 1em 1.05em",
            justifyContent: "center",
            bgcolor: "common.black",
            outline: ".5em solid",
          }}
          className={styles.btnCard}
        >
          <FiChevronRight></FiChevronRight>
        </IconButton>
      </Card>
    </Grid>
  );
};

export default InfoCards;
