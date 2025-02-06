# qa-tech-finder
Smart Tech Choices Made Easy with Detailed Comparisons of QE tech

# QE Tech Stack Finder Application

## Overview
This is a full-stack web application where users can explore different **technology stacks** or complete a **questionnaire** to assess their project's automation and testing maturity. The application is built using **React.js and Redux** for the frontend and **Express.js with Node.js** for the backend.

## Features
### 1. **Tech Stack Selection**
- Users can choose between various tech stacks (**Frontend, Backend, Mobile, Devices, etc.**).
- Based on the selection, different **testing and monitoring activities** are displayed.
- Users receive a detailed **explanation and case study** for the selected tech stack.

### 2. **Questionnaire & Automation Assessment**
- Users can complete a questionnaire categorized under different parameters:
  - **Automation Coverage**
  - **Automation NFT (Non-Functional Testing)**
  - **Script Quality**
  - **Automation Effectiveness**
- Upon submission, users receive an **assessment result** that evaluates their project’s automation maturity.
- The results include **recommendations** for improvement.

## Tech Stack
### **Frontend**
- **Framework:** React.js
- **State Management:** Redux
- **Language:** JavaScript (ES6+)
- **Deployment:** Vercel

### **Backend**
- **Framework:** Express.js (Node.js)
- **Database:** (To be integrated if required)
- **Deployment:** Render

### **DevOps & Deployment**
- **Docker:**
  - Dockerized both frontend and backend.
  - **Docker Compose** setup included.
- **Hosting:**
  - **Backend:** Hosted on Render
  - **Frontend:** Hosted on Vercel

## API Endpoints
The application interacts with the backend through the following API endpoints:

1. **Fetch Tech Stack Data**
   ```
   GET https://qa-tech-finder.onrender.com/api/v1/data
   ```
   - Retrieves available technology stacks and related information.

2. **Fetch Questionnaire**
   ```
   GET https://qa-tech-finder.onrender.com/api/v1/questionnaire
   ```
   - Retrieves the questionnaire with different assessment parameters.

3. **Submit Questionnaire Responses**
   ```
   POST https://qa-tech-finder.onrender.com/api/v1/questionnaire
   ```
   - Submits user responses and returns calculated scores and recommendations.

## Installation & Running Locally

### **Backend Setup**
```bash
cd server
npm install
node server.js
```

### **Frontend Setup**
```bash
cd client
npm install
npm start
```

### **Running with Docker**
```bash
docker-compose up --build
```

## Deployment Steps
### **Step 1: Host Backend on Render**
1. Go to [Render](https://render.com/) and create an account.
2. Click **New Web Service** and connect your GitHub repository.
3. Select the branch with the `server/` (backend) code.
4. Configure the environment settings:
   - Choose **Runtime:** Node.js
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - Set required **Environment Variables** (e.g., `PORT`, `DATABASE_URL`).
   - Choose **Free Instance** and deploy.

### **Step 2: Host Frontend on Vercel**
1. Go to [Vercel](https://vercel.com/) and create an account.
2. Click **New Project** and connect your GitHub repository.
3. Select the `client/` (React.js) folder.
4. Vercel auto-detects React and configures build settings.
5. Deploy the project.

## What’s Pending?
- 📌 **Case Studies:** Need to link detailed case studies.
- 📌 **Tool Comparison:** Feature to compare different tools.
- 📌 **AI Enhancements:** Incorporating AI-driven insights.
- 📌 **Better Recommendations:** Improve suggestions with relevant links.

## Contributing
Feel free to contribute by submitting issues or pull requests.

## License
MIT License.

---
🚀 **Live Links:**
- **Frontend (Vercel):** [https://qa-tech-finder.vercel.app/](https://qa-tech-finder.vercel.app/)
- **Backend (Render):** [https://qa-tech-finder.onrender.com/](https://qa-tech-finder.onrender.com/)

