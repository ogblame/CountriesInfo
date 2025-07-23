import { Filter } from "../components/Filter/Filter.tsx";
import { InputSearch } from '../components/Search/InputSearch.tsx';
import style from './HomePage.module.css';
import {homepageLoader} from "./homepageLoader.ts";
import {useEffect, useState} from "react";
import {CardCountry} from "../components/CardCountry.tsx";

export const HomePage = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
        setSearchTerm(value.toLowerCase());

        const filtered = countries.filter((country : any) =>
            country.name.common.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredCountries(filtered);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await homepageLoader()
                console.log(data)
                setCountries(data)
                setFilteredCountries(data)
            } catch (error) {
                console.error('Error fetching countries:', error);
            }

        }
        fetchData()
    }, []);

    return (
        <div className={style.gridContainer}>
            <div className={style.filterArea}>
                <Filter />
            </div>
            <div className={style.searchArea}>
                <InputSearch onSearch={handleSearch} />
            </div>
            <div className={style.contentArea}>
                {filteredCountries.map((country: any) => (
                    <CardCountry
                        className={style.cardCountry}
                        key={country.name.common}
                        name={country.name.common}
                        flag={country.flags.svg}
                        region={country.region}
                        capital={country.capital?.[0] || "Нет данных"}
                        language={country.languages ? Object.values(country.languages)[0] : "Неизвестно"}
                    />
                ))}
            </div>
        </div>
    );
};