import React from 'react';
import {SOCIAL_NETWORK_LINKS, LOCATIONS, CAREER, COMPANY} from "./constants";

import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='wrapper'>
                <section className={styles.links}>
                    <div className={styles.linkBlock}>
                        <p className={styles.title}>Location</p>
                        <div className={styles.line}/>
                        <ul className={styles.linkList}>
                            {
                                LOCATIONS.map((item, id) => {
                                    return <li>
                                        <a className={styles.link} href={item.link} key={id + item.text}>{item.text}</a>
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                    <div className={styles.linkBlock}>
                        <p className={styles.title}>Company</p>
                        <div className={styles.line}/>
                        <ul className={styles.linkList}>
                            {
                                COMPANY.map((item, id) => {
                                    return <li>
                                        <a className={styles.link} href={item.link} key={id + item.text}>{item.text}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.linkBlock}>
                        <p className={styles.title}>Career</p>
                        <div className={styles.line}/>
                        <ul className={`${styles.linkList} ${styles.careerList}`}>
                            {
                                CAREER.map((item, id) => {
                                    return <li>
                                        <a className={styles.link} href={item.link} key={id + item.text}>{item.text}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </section>
                <section className={styles.contacts}>
                    <div className={styles.contactWrapper}>
                        <a href="tel:1-888-338-7638" className={styles.contactLink}>
                            <b>F:</b> 1-888-DEV-SOFT (338-7638)
                        </a>
                        <a href="tel:+17788814161" className={styles.contactLink}>
                            <b>P:</b> +1 778 881 4161
                        </a>
                        <a href="mailto:info@integrio.net" className={styles.contactLink}>
                            <b>E:</b> info@integrio.net
                        </a>
                    </div>
                    <span className={styles.copyright}>
                        © 2021 Integrio Systems. All rights reserved.
                    </span>
                    <div className={styles.socialList}>
                        {SOCIAL_NETWORK_LINKS.map((item, id) => {
                            return <a className={styles.socialLink} key={id} href={item.link}>
                                <img src={item.icon} alt={`Social icon ${id}`}/>
                            </a>
                        })}
                    </div>
                    <span className={styles.copyrightMobile}>
                        © 2021 Integrio Systems. All rights reserved.
                    </span>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
