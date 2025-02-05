import React from 'react';
import './QuestionItem.css';

const QuestionItem = ({ question, onAnswerSelect, userAnswer, hasError }) => {
    return (
        <div className={`question-item ${hasError ? 'error' : ''}`}>
            <h3>{question.Question} <label>*</label></h3>
            <div className="options-container">
                {Object.entries(question.Options).map(([key, option]) => (
                    <label key={key} className="option-label">
                        <input
                            type="radio"
                            name={question.Question} 
                            value={option.Level} 
                            checked={userAnswer === option.Level} 
                            onChange={() => onAnswerSelect(question.Question, question.qWeightage, option.Level)} 
                            className="custom-radio"
                        />
                        {option.Description || option.Range} 
                    </label>
                ))}
            </div>
            {hasError && <p className="error-message">Please select an answer!</p>}
        </div>
    );
};

export default QuestionItem;
