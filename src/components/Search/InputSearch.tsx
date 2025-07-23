import style from './InputSearch.module.css'

type InputSearchProps = {
    onSearch: (value: string) => void
}

export const InputSearch = ({ onSearch } : InputSearchProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };
    return (
        <input placeholder={'Поиск'} className={style.inputSearch} onChange={handleInputChange} />
    )
}
