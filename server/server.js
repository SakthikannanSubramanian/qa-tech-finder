const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;
const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv').parse;

const completeData = require("./data/complete-data");
const persistentDirectory = "/dataPersistent/insightXSubmission";
const insightXDataFilePath =path.join(__dirname,persistentDirectory,'insightXData.csv');

app.use(cors());
app.use(express.json());


const saveInsightXData = (data)=>{
    const persistentDirectoryPath = path.join(__dirname,persistentDirectory);
    if(!fs.existsSync(persistentDirectoryPath)) {
        fs.mkdirSync(persistentDirectoryPath, { recursive: true });
        const headers = ['email', 'comment', 'type'];
        const opts = { headers }; 
        const csvHeader = json2csv(data,opts);
        fs.appendFileSync(insightXDataFilePath,csvHeader + '\n', 'utf8');
    }
    else{
        const csvData = json2csv(data,{header:false});
        fs.appendFileSync(insightXDataFilePath,csvData + '\n', 'utf8');
    }
}


app.get('/api/v1/data', (req, res) => {
    res.json(completeData);
});

app.post('/api/v1/saveInsightXData',(req,res)=>{
    const newData = req.body;
    saveInsightXData(newData);
    res.status(200).json({ message: 'Data saved successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

