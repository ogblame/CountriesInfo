import styles from "../Filter.module.css";
import stylesSwitchSection from './SwitchSection.module.css';

interface switchSectionProps {
    title: string;
}
const SwitchSection = ({title} : switchSectionProps) => {
    return (
        <div>
            <div className={styles.section}>
                <h3>{title}</h3>
                <label className={stylesSwitchSection.switch}>
                    <input type="checkbox" id="toggleCheckbox"/>
                    <span className={stylesSwitchSection.slider}></span>
                </label>
            </div>
        </div>
    );
};

export default SwitchSection;