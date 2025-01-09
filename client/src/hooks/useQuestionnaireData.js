import { useSelector } from 'react-redux';

export const useQuestionnaireData = () => {

    const questionnaire = useSelector(state => state.data.questionnaire);

    const sections = questionnaire
        ? Array.from(new Set(questionnaire.map(q => q.Parameter))).map(parameter => ({
            title: parameter,
            data: questionnaire.filter(q => q.Parameter === parameter)[0].Questions,
        }))
        : [];

    return {sections};
}
