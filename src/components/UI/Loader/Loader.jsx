import classes from './Loader.module.css'

export default function Loader() {
    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <span className={classes.loader}></span>
        </div>
    )
}