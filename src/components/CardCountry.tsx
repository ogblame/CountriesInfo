import style from './CardCountry.module.css';

interface Props {
    name: string,
    flag: string,
    region: string,
    capital: string
    language: string
}

export const CardCountry = ({name, flag, region, capital, language} : Props) => {
    return (
        <>
            <div className={style.countryCard}>
                <img src={flag}/>
                <h2>{name}</h2>
                <p><span>Регион:</span> {region}</p>
                <p><span>Столица:</span> {capital}</p>
                <p><span>Язык:</span> {language}</p>
                <button className={style.readMore}>Подробнее</button>
            </div>
        </>
    )
}