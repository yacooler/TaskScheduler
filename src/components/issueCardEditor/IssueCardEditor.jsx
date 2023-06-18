import { useRef, useState } from 'react';
import './issuecardeditor.css'
import PropTypes from 'prop-types';

export default function IssueCardEditor({addNewIssue}){

    let [isValidTitle, setIsValidTitle] = useState(true);
    let [isValidMaxValue, setIsValidMaxValue] = useState(true);

    const refTitle = useRef();
    const refMaxValue = useRef();

 
    function addNewIssueHandler(){
        let title = refTitle.current.value;
        let maxValue = parseInt(refMaxValue.current.value);

        if (title.length === 0) {
            setIsValidTitle(false);
            return;
        }

        if (!Number.isInteger(maxValue)) {
            setIsValidMaxValue(false);
            return;
        }

        addNewIssue(title, maxValue);

        clearFields();
    }

    function clearFields(){
        refTitle.current.value = ''
        refMaxValue.current.value = ''
        if (!isValidTitle) setIsValidTitle(true);
        if (!isValidMaxValue) setIsValidMaxValue(true);
    }

    return (
        <>
            <div className='issue-card-editor-container'>
                <h3>Добавление новой задачи</h3>
                
                <div className='issue-card-editor-input-and-button-container'>
                    <div className='issue-card-editor-input-container'>
                        <input type='input' ref = {refTitle} className = {isValidTitle ? '' : 'issue-card-editor-input-error'} placeholder='Введите название задачи'></input>
                        <input type='number' ref = {refMaxValue} className = {isValidMaxValue ? '' : 'issue-card-editor-input-error'} placeholder='Введите количество шагов'></input>
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