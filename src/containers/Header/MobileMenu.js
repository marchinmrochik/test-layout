import React from 'react';
import PhoneSelect from "./PhoneSelect";
import {ArrowIcon, UserIcon} from "../../assets/image/base-icons";

import styles from './styles.module.scss'

const MobileMenu = ({showMenu}) => {
    return (
        <div className={`${styles.menuMobile} ${showMenu ? styles.menuShow : ''}`}>
            <PhoneSelect isMobile={showMenu}/>
            <nav className={`${styles.navigation} ${showMenu ? styles.navigationMobile : ''}`}>
                <ul className={styles.list}>
                    <li className={`${styles.listItem} ${styles.dropdown}`}>
                        <div>Expertise</div>
                        <div className={styles.dropdownContent}>
                            <ul className={styles.dropdownList}>
                                <li>
                                    <a href="/test1">Test link</a>
                                </li>
                                <li>
                                    <a href="/test3">Test link</a>
                                </li>
                                <li>
                                    <a href="/test4">Test link</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <a href="">Case Sudies</a>
                    </li>
                    <li className={`${styles.listItem} ${styles.dropdown}`}>
                        <div>Cooperation</div>
                        <div className={styles.dropdownContent}>
                            <ul className={styles.dropdownList}>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`${styles.listItem} ${styles.dropdown}`}>
                        <div>Company</div>
                        <div className={styles.dropdownContent}>
                            <ul className={styles.dropdownList}>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                                <li>
                                    <a href="">Test link</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <a href="">Blog</a>
                    </li>
                    <li className={styles.listItem}>
                        <a href="">
                            <img src={UserIcon} alt="user icon"/>
                            Client login
                        </a>
                    </li>
                </ul>
                <a className={styles.button} href="">
                    Get a Quote <img src={ArrowIcon} alt="arrow icon"/>
                </a>
            </nav>
        </div>
    );
};

export default MobileMenu;
