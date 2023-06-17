import './issuecard.css'
import PropTypes from 'prop-types';
import Progressbar from '../progressbar/Progressbar'


export default function IssueCard({topic, maxValue, currentValue = 0, issueMakeStep, issueDelete}){

    const progress = currentValue / maxValue;
    const cssColourClass = progress < 0.25 ? 'issue-card-red' : progress >= 0.75 ? 'issue-card-green' : 'issue-card-yellow';
    const cardClassName = ['issue-card-container', cssColourClass].join(' ')

    if (maxValue >= currentValue){

    }

    function buttonMakeStepClickHandler(){
        issueMakeStep(currentValue + 1);
    }

    function buttonDeleteClickHandler(){
        issueDelete();
    }


    return (  
        <div className={cardClassName}>
            <h1>{topic}</h1>
            <Progressbar currentValue={currentValue} maxValue={maxValue} /> 
            <div className='issue-card-buttons-container'>
                <button type='button' onClick={buttonMakeStepClickHandler}>Сделать шаг</button>
                <button type='button' onClick={buttonDeleteClickHandler}>Удалить задачу</button>
            </div>
        </div> 
    )
}

IssueCard.propTypes = {
    topic: PropTypes.string.isRequired,
    maxValue : PropTypes.number.isRequired,
    currentValue: PropTypes.number,
    issueMakeStep: PropTypes.func.isRequired,
    issueDelete: PropTypes.func.isRequired
}