import './progressbar.css'
import PropTypes from 'prop-types';

export default function Progressbar({maxValue, currentValue = 0}){
    return (  
        <>
            <progress className='progress-bar' value={currentValue} max={maxValue} />                
            <br />{currentValue}/{maxValue}
        </> 
    )
}

Progressbar.propTypes = {
    maxValue : PropTypes.number.isRequired,
    currentValue: PropTypes.number
}