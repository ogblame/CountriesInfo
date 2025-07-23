import {useState} from "react";
import styleFilterSection from './CheckBoxSection.module.css'
import styles from "../Filter.module.css";

type FilterSectionProps = {
    title: string;
    options: string[];
    selectedOptions: string[];
    onOptionToggle: (option: string) => void;
}

export const CheckBoxSection = ({title, options, selectedOptions, onOptionToggle} : FilterSectionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={styles.section} onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>
                    <svg className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15L12 9L18 15" stroke="grey" strokeWidth="2"/>
                    </svg>
                </span>
            </div>
            <div className={`${styles.sliderContainerAnimated} ${isOpen ? styles.show : ''}`}>
                <div className={styleFilterSection.options}>
                    {options.map((option) => (
                        <div key={option} className={styleFilterSection.option}>
                            <input
                                type="checkbox"
                                id={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => onOptionToggle(option)}
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}