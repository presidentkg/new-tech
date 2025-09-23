import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/NewTech-Logo.svg";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link href="/">
          <Image
            src={Logo}
            alt="NewTech Logo"
            width={150}
            height={40}
            className={styles.logoImage}
          />
        </Link>
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
            <Link href="/Admin" className={styles.navLink}>
              <RiAdminFill  className={styles.icon} /> Admin
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Frawser/new-tech"
              className={styles.navLink}
            >
              <Image
                src="/github-mark.png"
                alt="Github Logo"
                width={150}
                height={40}
                className={styles.iconImage}
              />{" "}
              Github repo
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
