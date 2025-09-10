import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  FaInfoCircle,
  FaEnvelope,
  FaTag,
  FaUndo,
  FaTruck,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
import Logo from "../../../public/NewTech-Logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <ul>
          <li>
            <FaTag /> Price Match
          </li>
          <li>
            <FaUndo /> Free Returns
          </li>
          <li>
            <FaTruck /> Free Shipping For Members
          </li>
        </ul>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.logoWrapper}>
          <h1>
            <Link href="/">
              <Image
                src={Logo}
                alt="NewTech Logo"
                width={150}
                height={40}
                className={styles.logoImage}
              />
            </Link>
          </h1>
        </div>

        <div className={styles.searchWrapper}>
          <SearchBar />
        </div>

        <div className={styles.navActions}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/about" className={styles.navLink}>
                <FaInfoCircle className={styles.icon} /> About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                <FaEnvelope className={styles.icon} /> Contact
              </Link>
            </li>
          </ul>

          <div className={styles.cart}>
            <Link href="/cart" className={styles.navLink}>
              <FaCartShopping className={styles.icon} /> Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
