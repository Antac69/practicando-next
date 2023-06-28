import React from 'react'
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { selectClasses } from "@mui/joy/Select";
import Button from '@mui/joy/Button';
import { MdKeyboardArrowDown } from "react-icons/md";
import {IoIosArrowDropright} from "react-icons/io"
import styles from "@/styles/Info.module.css";

const InfoTop = () => {
  return (
    <section className={styles.top}>
    <Select
      indicator={<MdKeyboardArrowDown color="black"/>}
      sx={{
        border:'1px solid',
        borderRadius: '50px',
        width: "min-content",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
      color="neutral"
      variant="outlined"
      defaultValue="English"
    >
      <Option value='English'>
        English
      </Option>
    </Select>
    <Button sx={{ borderRadius: '50px',border:'2px solid'}}  variant="outlined"color="neutral" endDecorator={<IoIosArrowDropright size="20" />}>Let&apos;s create</Button>
  </section>
  )
}

export default InfoTop