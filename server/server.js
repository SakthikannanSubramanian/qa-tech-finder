const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

const completeData = require("./data/complete-data");
const questionnaire  = require('./data/questionnaire');

app.use(cors());
app.use(express.json());

app.get('/api/v1/data', (req, res) => {
    res.json(completeData);
});

app.get('/api/v1/questionnaire', (req,res) => {
    res.json(questionnaire)
})

app.post('/api/v1/questionnaire',(req, res) => {
    const userResponses = req.body.responses;

    if (!userResponses || !Array.isArray(userResponses)) {
        return res.status(400).json({ error: 'Invalid user responses' });
    }

    const calculateParameterScore = (parameter) => {
        const maxPossibleScore = parameter.responses.reduce((sum, q) => sum + (q.weightage * 4), 0);
        const actualScore = parameter.responses.reduce((sum, q) => sum + (q.weightage * q.responseSelectedLevel), 0);
        const percentage = (actualScore / maxPossibleScore) * 100;

        let level;
        if (percentage > 85) level = 4;
        else if (percentage > 70) level = 3;
        else if (percentage > 50) level = 2;
        else level = 1;

        return { actualScore, maxPossibleScore, level, percentage };
    };

    const calculateOverallScore = (parameters) => {
        const maxOverallScore = parameters.reduce((sum, param) => sum + (param.ParameterWeightage * calculateParameterScore(param).maxPossibleScore), 0);
        const actualOverallScore = parameters.reduce((sum, param) => sum + (param.ParameterWeightage * calculateParameterScore(param).actualScore), 0);
        const percentage = (actualOverallScore / maxOverallScore) * 100;

        let overallLevel;
        if (percentage > 85) overallLevel = 4;
        else if (percentage > 70) overallLevel = 3;
        else if (percentage > 50) overallLevel = 2;
        else overallLevel = 1;

        return { actualOverallScore, maxOverallScore, overallLevel, percentage };
    };

    const parameterScores = userResponses.map(param => ({
        Parameter: param.Parameter,
        ...calculateParameterScore(param)
    }));

    const overallScore = calculateOverallScore(userResponses);

    return res.json({ parameterScores, overallLevel: overallScore });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
