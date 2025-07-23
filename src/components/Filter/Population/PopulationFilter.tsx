import styles from "../Filter.module.css";
import stylePopulation from './PopulationFilter.module.css'
import { useState } from "react";

export const PopulationFilter = () => {
    const [populationValue, setPopulationValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Форматирует число с пробелами для лучшей читаемости
    };

    const parseNumber = (str: string) => {
        return Number(str.split(' ').join('')) || 0;
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setPopulationValue(value);
        e.target.style.background = `linear-gradient(to right, black ${(value / 1400000000) * 100}%, #D2D2D2 0%)`;


    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanedValue = e.target.value.replace(/[^\d\s]/g, ''); // Удаляем все символы, кроме цифр и пробелов
        const value = parseNumber(cleanedValue);
        setPopulationValue(value);
        // Обновляем фон слайдера
        const slider = e.target.previousElementSibling as HTMLInputElement;
        slider.style.background = `linear-gradient(to right, black ${(value / 1400000000) * 100}%, #D2D2D2 0%)`;
    };
    return (
        <>
                <div>
                    <div className={styles.section} onClick={() => setIsOpen(!isOpen)}>
                        <h3>Население</h3>
                        <span
                            className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`}
                        >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L12 9L18 15" stroke="grey" strokeWidth="2"/>
                        </svg>
                    </span>
                    </div>
                    <div className={`${styles.sliderContainerAnimated} ${isOpen ? styles.show : ''}`}>
                        <input
                            type="range"
                            min="0"
                            max="1400000000"
                            value={populationValue}
                            onChange={handleSliderChange}
                            className={stylePopulation.customSlider}
                        />
                        <input
                            value={formatNumber(populationValue)}
                            onChange={handleInputChange}
                            className={stylePopulation.inputText}
                        />
                    </div>
                </div>
        </>
    );
};