# Rucha Katte | Personal Portfolio Website

Welcome to the repository of my personal portfolio website! This site showcases my background as a B.Tech Information Technology student at PICT Pune, along with my featured software engineering projects, leadership experiences, hackathon achievements, and open-source contributions.

🔗 **Live Local Preview:** [http://localhost:8000](http://localhost:8000)

---

## 🚀 Tech Stack & Design System

*   **Structure:** Semantic HTML5
*   **Styling:** Modern Vanilla CSS3 with:
    *   Curated custom CSS custom properties (variables) for consistent tokens.
    *   Premium custom glassmorphic cards and smooth transitions.
    *   Fully integrated Dark & Light mode theme toggle.
*   **Behavior:** Vanilla JavaScript (ES6+) for:
    *   Dynamic particle-effect canvas background.
    *   Smooth scroll progression indicator.
    *   Custom circular cursor follower.
    *   Interactive typewriter animations.
    *   Staggered reveal-on-scroll animations using `IntersectionObserver`.
    *   Stat counters that dynamically count up when scrolled into view.
*   **Icons:** FontAwesome v6.5.0

---

## ✨ Key Features

1.  **Open for Collaboration Status:** A floating indicator badge at the top of the hero section displaying a green pulsing dot to announce active availability for internships and collaborations.
2.  **Live Stat Trackers:** Displays real-time counts for CGPA (9.73), Projects (7+), Hackathon Wins, and Open-Source Contributions.
3.  **7+ Highlighted Projects:** Complete grid displaying your key AI/ML, NLP, and software projects:
    *   *Pre-Delinquency Intervention Engine*
    *   *AI Loan Sales Chatbot*
    *   *Carbon Emission Tracker*
    *   *MuleRadar — AI Fraud Detection*
    *   *Techfiesta Plagiarism Detector*
    *   *Digit Classification (MNIST)*
    *   *Language Learning App*
4.  **Milestone Achievements Grid:** Showcases your major accomplishments (Bank of India Hackathon Finalist, IEEE TechRush Winner, EY Techathon, PCCOE Indradhanu, etc.).
5.  **Journey Timeline:** Visual tracking of professional experience and student leadership roles matching the latest resume.

---

## 📁 Project Structure

```text
├── index.html          # Main HTML5 entry point containing sections (Hero, About, Skills, Projects, Experience, Achievements, Contact)
├── style.css           # Custom CSS stylesheet including layout, modern animations, typography, and light/dark mode styles
├── script.js           # Core JavaScript file (handles typing text, particle canvas, scrolling, and stat counters)
├── Resume_final.pdf    # Latest downloadable PDF resume linked to the "Download Resume" button
├── Rucha_photo.jpeg    # Profile avatar image used in the Hero section
└── README.md           # Documentation for project setup and features
```

---

## 🛠️ Local Setup & Deployment

To run and preview this project locally, spin up a simple static file server:

### Option A: Using Python (Recommended)
Navigate to the project root directory in your terminal and run:
```bash
python -m http.server 8000
```
Then, open your web browser and navigate to:
```text
http://localhost:8000/
```

### Option B: Using Node.js / npm
Install and run `http-server` using npx:
```bash
npx http-server -p 8000
```
Then, open your web browser and navigate to:
```text
http://localhost:8000/
```
