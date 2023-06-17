import { useRef, useState } from 'react';
import './issuecardeditor.css'
import PropTypes from 'prop-types';

export default function IssueCardEditor({addNewIssue}){

    let [isValidData, setIsValidData] = useState(true);

    const refTitle = useRef();
    const refMaxValue = useRef();

 
    function addNewIssueHandler(){
        let title = refTitle.current.value;
        let maxValue = parseInt(refMaxValue.current.value);

        if (title.length === 0) {
            console.log('tt' + title)
            setIsValidData(false);
            return;
        }

        if (!Number.isInteger(maxValue)) {
            console.log('mv' + maxValue)
            setIsValidData(false);
            return;
        }

        addNewIssue(title, maxValue);

        if (!isValidData) setIsValidData(true);
    }

    return (
        <>
            <div className='issue-card-editor-container'>
                <h3>Добавление новой задачи</h3>
                
                <div className='issue-card-editor-input-and-button-container'>
                    <div className='issue-card-editor-input-container'>
                        <input type='input' ref = {refTitle} className = {isValidData ? '' : 'issue-card-editor-input-error'} placeholder='Введите название задачи'></input>
                        <input type='number' ref = {refMaxValue} className = {isValidData ? '' : 'issue-card-editor-input-error'} placeholder='Введите количество шагов'></input>
                    </div>              
                    <button type='button' onClick={addNewIssueHandler}>Добавить задачу</button>
                </div>
            </div>
        </>

    )

}

IssueCardEditor.propTypes = {
    addNewIssue: PropTypes.func.isRequired
}