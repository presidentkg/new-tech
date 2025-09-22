import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
import Logo from "../../../public/NewTech-Logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.mainNav}>
        <div className={styles.group}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                src={Logo}
                alt="NewTech Logo"
                width={300}
                height={60}
                className={styles.logoImage}
              />
            </Link>
          </div>

          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>

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
            <li>
              <Link href="/cart" className={styles.navLink}>
                <FaCartShopping className={styles.icon} /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
