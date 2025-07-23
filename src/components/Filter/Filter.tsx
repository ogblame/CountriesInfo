import styles from './Filter.module.css';
import {PopulationFilter} from "./Population/PopulationFilter.tsx";
import {SquareFilter} from "./Square/SquareFilter.tsx";
import {CheckBoxSection} from "./CheckBoxSection/CheckBoxSection.tsx";
import { useState } from 'react';
import SwitchSection from "./SwitchSection/SwitchSection.tsx";

export const Filter = () => {
    const [regions, setRegions] = useState<string[]>([]);
    const [continents, setContinents] = useState<string[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [independence, setIndependence] = useState<string[]>([]);
    const [timezones, setTimezones] = useState<string[]>([]);


    const filterData = [
        {
            title: "Регион",
            options: ['Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка', 'Антарктида'],
            selected: regions,
            onChange: setRegions,
        },
        {
            title: "Континент",
            options: ['Евразия', 'Африка', 'Северная Америка', 'Южная Америка', 'Австралия', 'Антарктида'],
            selected: continents,
            onChange: setContinents,
        },
        {
            title: "Языки",
            options: ['Английский', 'Испанский', 'Французский', 'Немецкий', 'Русский', 'Китайский'],
            selected: languages,
            onChange: setLanguages,
        },
        {
            title: "Валюты",
            options: ['Доллар США', 'Евро', 'Фунт стерлингов', 'Иена', 'Рубль', 'Юань'],
            selected: currencies,
            onChange: setCurrencies,
        },
        {
            title: "Независимость",
            options: ['Все', 'Государства', 'Зависимые территория'],
            selected: independence,
            onChange: setIndependence,
        },
        {
            title: "Часовой пояс",
            options: ['UTC-12', 'UTC-11', 'UTC-10', 'UTC-9', 'UTC-8', 'UTC-7', 'UTC-6', 'UTC-5', 'UTC-4', 'UTC-3', 'UTC-2', 'UTC-1', 'UTC+0', 'UTC+1', 'UTC+2', 'UTC+3', 'UTC+4', 'UTC+5', 'UTC+6', 'UTC+7', 'UTC+8', 'UTC+9', 'UTC+10', 'UTC+11', 'UTC+12'],
            selected: timezones,
            onChange: setTimezones,
        },
    ]

    const handleOptionToggle = (
        option: string,
        selected: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setter(prev =>
            prev.includes(option)
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.select}>
                <PopulationFilter/>
                <SquareFilter/>
                {filterData.map((section, index) => (
                    <CheckBoxSection
                        key={index}
                        title={section.title}
                        options={section.options}
                        selectedOptions={section.selected}
                        onOptionToggle={option =>
                            handleOptionToggle(option, section.selected, section.onChange)
                        }
                    />
                ))}
                <SwitchSection title="Членство в ООН" />
                <SwitchSection title="Выход к морю" />
            </div>
        </div>
    );
};
