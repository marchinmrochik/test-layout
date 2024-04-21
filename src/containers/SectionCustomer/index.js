import React from 'react';

import {ArrowIcon} from '../../assets/image/base-icons'
import {arrayLogo} from "../../assets/image/company-logo";

import styles from './styles.module.scss'
const SectionCustomer = () => {
    return (
        <section className={styles.section}>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.block}>
                    <h2 className={`title-h2 ${styles.title}`}>Our customer</h2>
                    <a href="/case-studies" className={styles.button}>
                        View Case Studies
                        <img src={ArrowIcon} alt="arrow icon"/>
                    </a>
                </div>
                <div className={styles.logos}>
                    {arrayLogo.map((logo, id) => {
                        return <img src={logo} key={id} alt="company logo"/>
                    })}
                </div>

                <a href="/case-studies" className={`${styles.buttonMobile}`}>
                    View Case Studies
                    <img src={ArrowIcon} alt="arrow icon"/>
                </a>
            </div>

        </section>
    );
};

export default SectionCustomer;
