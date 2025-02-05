import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import './ResultCharts.css'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const LEVEL_COLORS = ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40"]; 

const ResultsChart = () => {
    const calculatedScores = useSelector(state => state.data.calculatedScores.parameterScores);
    const overallLevel = useSelector(state => state.data.calculatedScores.overallLevel);

    if (!calculatedScores || !overallLevel) {
        return <p>Loading charts...</p>;
    }

    const parameterChartData = calculatedScores.map(param => ({
        name: param.Parameter,
        score: param.percentage,
        level: param.level, 
    }));

    const overallChartData = [
        { name: "Achieved Score", value: overallLevel.actualOverallScore },
        { name: "Remaining Score to achieve", value: overallLevel.maxOverallScore - overallLevel.actualOverallScore }
    ];

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h2>Overall Score (Final Level: {overallLevel.overallLevel})</h2>
            <div className="pieChart">
                <ResponsiveContainer width="50%" height={300}>
                    <PieChart>
                        <Pie
                            data={overallChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={120}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label
                        >
                            {overallChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                        <Label
                            value={`Final Level: ${overallLevel.overallLevel}`}
                            position="center"
                            fontSize={18}
                            fill="#000"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <h2>Parameterwise Score</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={parameterChartData} layout="vertical" barGap={5} barCategoryGap={20}>
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={200} padding={{top: 5, bottom: 10}} />
                    <Tooltip />
                    <Legend />

                    {Array.from({ length: 4 }, (_, i) => (
                        <Bar
                            key={i}
                            dataKey={(entry) => (entry.level === i + 1 ? entry.score : 0)}
                            fill={LEVEL_COLORS[i]}
                            name={`Level ${i + 1}`}
                            stackId="a"
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultsChart;
