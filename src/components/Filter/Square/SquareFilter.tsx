import styles from "../Filter.module.css";
import styleSquare from './SquareFilter.module.css'
import {useState} from "react";

export const SquareFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div>
                <div className={styles.section}>
                    <h3>Площадь (км2)</h3>
                    <span
                        className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L12 9L18 15" stroke="grey" strokeWidth="2"/>
                        </svg>
                    </span>
                </div>
                <div className={`${styles.sliderContainerAnimated} ${isOpen ? styles.show : ''}`}>
                    <div className={styleSquare.inputContainer}>
                        <input placeholder="от 2,02" className={styleSquare.inputStyle}/>
                        <input placeholder="до 17,1"  className={styleSquare.inputStyle}/>
                    </div>
                </div>
            </div>
        </>
    );
};