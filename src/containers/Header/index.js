import React, {useEffect, useState} from 'react';
import PhoneSelect from "./PhoneSelect";

import {LogoIcon, ArrowIcon, UserIcon} from '../../assets/images/base-icons'

import styles from './styles.module.scss'
import useScroll from "../../hooks/useScroll";
import MobileMenu from "./MobileMenu";
import useIsMobile from "../../hooks/useIsMobile";

const MOBILE_MENU_BREAKPOINT = 965;
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useIsMobile(MOBILE_MENU_BREAKPOINT);
    const isScrolled = useScroll();

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'inherit';
        }

        return () => {
            document.body.style.overflow = 'inherit';
        };
    }, [showMenu]);


    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className='wrapper'>
                <PhoneSelect/>
                <section className={styles.navigationSection}>
                    <a href="/">
                        <img src={LogoIcon} alt="logo" title="logo"/>
                    </a>
                    <nav className={styles.navigation}>
                        <ul className={styles.list}>
                            <li className={`${styles.listItem} ${styles.dropdown}`}>
                                <div>Expertise</div>
                                <div className={styles.dropdownContent}>
                                    <ul className={styles.dropdownList}>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.listLink} href="/case-sudies">Case Sudies</a>
                            </li>
                            <li className={`${styles.listItem} ${styles.dropdown}`}>
                                <div>Cooperation</div>
                                <div className={styles.dropdownContent}>
                                    <ul className={styles.dropdownList}>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={`${styles.listItem} ${styles.dropdown}`}>
                                <div>Company</div>
                                <div className={styles.dropdownContent}>
                                    <ul className={styles.dropdownList}>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                        <li className={styles.dropdownItem}>
                                            <a href="">Test link</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.listLink} href="/blog">Blog</a>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.listLink} href="/login">
                                    <img src={UserIcon} alt="user icon"  title="user icon"/>
                                    Client login
                                </a>
                            </li>
                        </ul>
                        <a className={styles.button} href="/quote">
                            Get a Quote <img src={ArrowIcon} alt="arrow icon" title="arrow icon"/>
                        </a>
                    </nav>
                    <div
                        onClick={handleMenu}
                        className={`${styles.burgerIcon} ${ showMenu ? styles.closeIcon : ''} `}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </section>
            </div>
            {
                isMobile && <MobileMenu showMenu={showMenu}/>
            }
        </header>
    );
};

export default Header;
