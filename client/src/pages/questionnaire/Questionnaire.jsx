import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchQuestionnaire, saveUserResponses, submitQuestionnaire } from '../../redux/actions/dataActions';
import { useQuestionnaireData } from '../../hooks/useQuestionnaireData';
import QuestionItem from '../../components/questionItem/QuestionItem';
import './Questionnaire.css';

const Questionnaire = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const questionnaireRef = useRef(null);
    

    useEffect(() => {
        dispatch(fetchQuestionnaire());

        const savedResponses = JSON.parse(localStorage.getItem('userResponses'));
        if (savedResponses) {
            setUserResponses(savedResponses);
        }
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

    const handleAnswerSelect = (questionId, questionWeightage, selectedLevel) => {
        const updatedResponses = [...userResponses];

        let currentParam = updatedResponses.find(
            (response) => response.Parameter === sections[currentSectionIndex].title
        );

        if (!currentParam) {
            currentParam = {
                Parameter: sections[currentSectionIndex].title,
                ParameterWeightage: sections[currentSectionIndex].parameterWeightage,
                responses: [],
            };
            updatedResponses.push(currentParam);
        }

        const questionIndex = currentParam.responses.findIndex(
            (response) => response.question === questionId
        );

        if (questionIndex > -1) {
            currentParam.responses[questionIndex].responseSelectedLevel = selectedLevel;
        } else {
            currentParam.responses.push({
                question: questionId,
                weightage: questionWeightage,
                responseSelectedLevel: selectedLevel,
            });
        }

        setUserResponses(updatedResponses);

        localStorage.setItem('userResponses', JSON.stringify(updatedResponses));

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

            dispatch(saveUserResponses(userResponses));
            dispatch(submitQuestionnaire(userResponses))

            localStorage.removeItem('userResponses');

            navigate('/results');
        }
    };

    const isLastQuestion = currentSectionIndex === sections.length - 1;

    return (
        <div className="questionnaire" ref={questionnaireRef}>
            {sections[currentSectionIndex]?.data?.length > 0 ? (
                <>
                    <h2>{sections[currentSectionIndex].title}</h2>
                    <label className="mandatory-text">* mandatory</label>
                    {sections[currentSectionIndex].data.map((parameterItem, idx) => (
                        <QuestionItem
                            key={idx}
                            question={parameterItem}
                            onAnswerSelect={(questionId, questionWeightage, level) =>
                                handleAnswerSelect(questionId, questionWeightage, level)
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
