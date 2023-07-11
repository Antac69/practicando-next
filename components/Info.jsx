import React from "react";
import styles from "@/styles/Info.module.css";
import InfoTop from "./info/InfoTop";
import InfoCards from "./info/InfoCards";
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
const Info = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <section className={styles.container}>
      <InfoTop></InfoTop>
      <InfoCards></InfoCards>
      <section className={styles.bottom}>Theme: <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button></section>
    </section>
  );
};

export default Info;
