import React from "react";
import styles from "@/styles/Info.module.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import cad1 from "@/public/img/card1.jpg";
import Chip from "@mui/joy/Chip";
import Button from "@mui/material/Button";
import { FiDribbble,FiInstagram } from "react-icons/fi";

const InfoCards = () => {
  return (
    <section className={styles.containerCards}>
      <Card
        component="li"
        sx={{ minWidth: 300, flexGrow: 1, "--Card-radius": "30px" }}
      >
        <CardCover>
          <Image src={cad1} alt="" />
        </CardCover>
        <div>
          <Chip color="neutral" variant="soft" size="lg">
            How it works
          </Chip>
          <div>
            <Button variant="soft" color="primary">
              <FiInstagram></FiInstagram>
            </Button>
            <Button variant="soft" color="primary">
              <FiDribbble/>
            </Button>
          </div>
        </div>
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
    </section>
  );
};

export default InfoCards;
