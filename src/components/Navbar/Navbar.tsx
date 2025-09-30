"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
import Logo from "../../../public/NewTech-Logo.svg";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/cart-provider";

export default function Navbar() {
  const { totalQuantity } = useContext(CartContext);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  function openMobileMenu() {
    setMobileMenuIsOpen(true);
  }
  
  function closeMobileMenu() {
    setMobileMenuIsOpen(false);
    setDropdownIsOpen(false);
  }
  
  function toggleDropdown() {
    setDropdownIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) {
        setMobileMenuIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          <ul className={`${styles.navLinks} ${mobileMenuIsOpen ? styles.mobileMenu : ""}`}>
            {mobileMenuIsOpen && <li className={styles.closeButtonContainer}>
              <button 
                className={styles.closeButton}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </li>}
            <li>
              <Link onClick={closeMobileMenu} href="/about" className={styles.navLink}>
                {!mobileMenuIsOpen && <FaInfoCircle className={styles.icon} />}About
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileMenu} href="/contact" className={styles.navLink}>
                {!mobileMenuIsOpen && <FaEnvelope className={styles.icon} />}Contact
              </Link>
            </li>

            <li className={styles.cart}>
              <Link onClick={closeMobileMenu} href="/cart" className={styles.navLink}>
                {!mobileMenuIsOpen && <FaCartShopping className={styles.icon} />}Cart
              </Link>
              {totalQuantity > 0 && (
                <div className={styles.badge}>{totalQuantity}</div>
              )}
            </li>
            {mobileMenuIsOpen && 
              <li className={styles.dropdownContainer}>
                <div className={styles.dropdown}>
                  <Link onClick={closeMobileMenu} href="/products" className={styles.dropdownLink}>Products</Link>
                  <button onClick={toggleDropdown} className={styles.dropdownButton} aria-label="Toggle product categories"><Image src={dropdownIsOpen ? "/chevron-up.svg" : "/chevron-down.svg"} alt="" width={30} height={30} /></button>
                </div>
                {dropdownIsOpen && <ul className={styles.dropdownList}>
                  <Link onClick={closeMobileMenu} href="/products?category=smartphones" className={styles.navLink}>Phones</Link>

                  <Link onClick={closeMobileMenu} href="/products?category=tablets" className={styles.navLink}>Tablets</Link>

                  <Link onClick={closeMobileMenu} href="/products?category=laptops" className={styles.navLink}>Laptops</Link>
                </ul>}
              </li>
            }
          </ul>
          <button onClick={openMobileMenu} className={styles.hamburgerButton}></button>
        </div>
      </div>
    </nav>
  );
}
