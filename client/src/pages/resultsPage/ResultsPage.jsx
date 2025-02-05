import React from 'react';
import ResultsCharts from '../../components/resultCharts/ResultCharts';
import Recommendations from '../../components/recommendations/Recommendations';
import './ResultsPage.css'

const ResultsPage = () => {
    return (
        <div>
            <h1>Questionnaire Results</h1>
            <ResultsCharts />
            <h1>Our Recommendations</h1>
            <Recommendations />
        </div>
    );
};

export default ResultsPage;
