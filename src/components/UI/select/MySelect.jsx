import classes from './MySelect.module.css'

export default function MySelect({options, defaultValue, value, onChange}) {

    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.mySelect}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map((option) => 
                <option key={option.value} value={option.value}>
                    {'Сортировка по ' + option.name}
                </option>
            )}
        </select>
    )
}