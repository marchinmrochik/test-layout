import React, {useState} from 'react';
import {formatPhoneNumber} from "../../utils/formatPhoneNumber";

import {PhoneIcon} from "../../assets/images/base-icons";

import styles from './styles.module.scss'

const PhoneSelect = ({isMobile = false}) => {
    const [selectedPhone, setSelectedPhone] = useState('+18883387638');

    const handlePhoneChange = (event) => {
        setSelectedPhone(event.target.value);
    };

    return (
        <div className={`${styles.phoneSection} ${isMobile ? styles.phoneSectionMobile : ''}`}>
            <img src={PhoneIcon} alt="phone icon"/>
            <select name='phones' className={styles.select} onChange={handlePhoneChange}
                    value={selectedPhone}>
                <option value={'+18883387638'}>US/Canada</option>
                <option value={'+38083387638'}>Ukraine</option>
            </select>
            <a href={`tel:${selectedPhone}`}>{formatPhoneNumber(selectedPhone)}</a>
        </div>
    );
};

export default PhoneSelect;
