import React from 'react'
import {HiCubeTransparent} from 'react-icons/hi2'
import styles from "@/styles/Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={styles.container}>
        <span className={styles.logo}>
        <HiCubeTransparent size="1.25em"  color='#0C07B2'></HiCubeTransparent>
        <strong>
            Guide
        </strong>
        </span>
        <ul className={styles.rutas}>
          <li>About</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Community</li>
        </ul>
    </nav>
  )
}

export default Navbar