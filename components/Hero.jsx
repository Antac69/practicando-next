import React from "react";
import Navbar from "./Navbar";
import style from "@/styles/Hero.module.css";
import Image from "next/image";
import fondo from "@/public/img/fondo.webp";
import Titles from "@/components/Titles";
import Card from "@/components/Card";
import Tags from "@/components/Tags";

const Hero = () => {
  return (
    <main className={style.container}>
      <Image priority alt="fondo" src={fondo}></Image>/img/fondo.webp
      <Navbar />
      <br />
      <Card></Card>
      <div className={style.containerDown}>
        <Titles></Titles>
        <Tags></Tags>
      </div>
    </main>
  );
};

export default Hero;
