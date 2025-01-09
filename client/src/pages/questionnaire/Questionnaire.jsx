import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestionnaire, saveUserResponses } from '../../redux/actions/dataActions';
import { useQuestionnaireData } from '../../hooks/useQuestionnaireData';
import QuestionItem from '../../components/questionItem/QuestionItem';
import './Questionnaire.css';

const Questionnaire = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const questionnaireRef = useRef(null);

    useEffect(() => {
        dispatch(fetchQuestionnaire());
    }, [dispatch]);

    const { sections } = useQuestionnaireData();

    const scrollToTop = () => {
        questionnaireRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const validateCurrentSection = () => {
        const section = sections[currentSectionIndex];
        let sectionErrors = {};

        section.data.forEach((question) => {
            const currentParam = userResponses.find(
                (res) => res.Parameter === section.title
            );
            const answered = currentParam?.responses.find(
                (res) => res.question === question.Question
            );
            if (!answered) {
                sectionErrors[question.Question] = true;
            }
        });

        setErrors(sectionErrors);

        return Object.keys(sectionErrors).length === 0;
    };

    const handleAnswerSelect = (questionId, selectedLevel) => {
        const updatedResponses = [...userResponses];

        // Find or create the current parameter
        let currentParam = updatedResponses.find(
            (response) => response.Parameter === sections[currentSectionIndex].title
        );

        if (!currentParam) {
            currentParam = {
                Parameter: sections[currentSectionIndex].title,
                responses: [],
            };
            updatedResponses.push(currentParam);
        }

        // Update or add the response
        const questionIndex = currentParam.responses.findIndex(
            (response) => response.question === questionId
        );

        if (questionIndex > -1) {
            currentParam.responses[questionIndex].responseSelectedLevel = selectedLevel;
        } else {
            currentParam.responses.push({
                question: questionId,
                responseSelectedLevel: selectedLevel,
            });
        }

        setUserResponses(updatedResponses);

        // Clear error if present
        setErrors((prevErrors) => ({
            ...prevErrors,
            [questionId]: false,
        }));
    };

    const handleNext = () => {
        if (validateCurrentSection() && currentSectionIndex < sections.length - 1) {
            setCurrentSectionIndex((prevIndex) => prevIndex + 1);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (validateCurrentSection() && currentSectionIndex > 0) {
            setCurrentSectionIndex((prevIndex) => prevIndex - 1);
            scrollToTop();
        }
    };

    const handleSubmit = () => {
        if (validateCurrentSection()) {
            console.log('Final User Responses:', userResponses);
            dispatch(saveUserResponses(userResponses)); 
        }
    };

    const isLastQuestion = currentSectionIndex === sections.length - 1;

    return (
        <div className="questionnaire" ref={questionnaireRef}>
            {sections[currentSectionIndex]?.data?.length > 0 ? (
                <>
                    <h2>{sections[currentSectionIndex].title}</h2>
                    <label className='mandatory-text'>* mandatory</label>
                    {sections[currentSectionIndex].data.map((parameterItem, idx) => (
                        <QuestionItem
                            key={idx}
                            question={parameterItem}
                            onAnswerSelect={(questionId, level) =>
                                handleAnswerSelect(questionId, level)
                            }
                            userAnswer={
                                userResponses
                                    .find(
                                        (res) =>
                                            res.Parameter === sections[currentSectionIndex].title
                                    )
                                    ?.responses.find(
                                        (res) => res.question === parameterItem.Question
                                    )?.responseSelectedLevel
                            }
                            hasError={errors[parameterItem.Question]}
                        />
                    ))}

                    <div className="navigation-buttons">
                        {currentSectionIndex > 0 && (
                            <button onClick={handlePrevious}>Previous</button>
                        )}
                        {!isLastQuestion && <button onClick={handleNext}>Next</button>}
                        {isLastQuestion && (
                            <button onClick={handleSubmit}>Submit</button>
                        )}
                    </div>
                </>
            ) : (
                <p>Loading questionnaire...</p>
            )}
        </div>
    );
};

export default Questionnaire;
