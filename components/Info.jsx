import React from "react";
import styles from "@/styles/Info.module.css";
import InfoTop from "./info/InfoTop";
import InfoCards from "./info/InfoCards";
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { Grid } from "@mui/joy";
const Info = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <section className={styles.container}>
      <InfoTop></InfoTop>
      <InfoCards></InfoCards>
      <Grid className={styles.bottom} p={2} spacing='3em'>Theme: <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button></Grid>
    </section>
  );
};

export default Info;
