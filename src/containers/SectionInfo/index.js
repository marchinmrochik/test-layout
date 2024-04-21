import React from 'react';

import {TeamPhoto} from '../../assets/images';

import styles from './styles.module.scss';
const SectionInfo = () => {
    return (
        <section className={styles.section}>
            <div className='wrapper'>
                <h2 className={`title-h2 ${styles.title}`}>
                    We are proud to have designed solutions that were industry firsts.
                </h2>
                <div className={styles.content}>
                    <img src={TeamPhoto} alt="team photo" title="team photo"/>
                    <p>
                        Innovation is in our DNA. We are proud to have designed solutions that were industry firsts. For
                        example, our team developed one of the first Content Management Systems around the turn of the
                        millennium, we implemented technology used to launch and operate one of the first
                        internationalized
                        (multi-lingual) domain names in the world. Our team was involved with the first commercial test
                        of
                        mobile OCR technology for mobile ticketing in North America.
                    </p>
                    <div className={styles.statistic}>
                        <span className={styles.number}>200+</span>
                        <div className={styles.line}/>
                        Customer retention rate
                    </div>
                    <p>
                        Because projects that we worked on over the years were often challenging and required a
                        scientific
                        approach, we always had high-level mathematicians and data scientists on the team. That’s why,
                        in
                        2017, we started a formal AI and ML department. This allows us to offer not only product
                        development but also
                        comprehensive <a href="https://integrio.net/artificial-intelligence" target="_blank">
                            artificial intelligence
                        </a> and data science services to help our clients maintain a competitive edge.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default SectionInfo;
