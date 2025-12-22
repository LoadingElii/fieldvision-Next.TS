# FieldVision

**FieldVision** is a full-stack NFL game prediction web application designed to showcase real-world software engineering practices, including frontend architecture, backend integration, caching, persistence, and microservice communication.

The application allows users to authenticate, view weekly NFL matchups, and see predicted win probabilities for each team based on historical data and backend analytics services.

---

## What This Application Does

- Authenticated users can view **all NFL games for the current week**
- Each matchup displays **win probability predictions** for both teams
- Frontend integrates with a **Spring Boot API**, which orchestrates data retrieval and persistence
- Prediction logic is handled by a **FastAPI analytics service**
- Designed to scale with additional features like team statistics and historical analysis

---

## Screenshots

### Login Page
_User authentication entry point_

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c75522c7-7377-4b89-8d18-e539216853ed" />


This page provides the login experience for returning users and acts as the entry point into the authenticated dashboard.

---

### Games Dashboard
_Weekly NFL games with win probability predictions_

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3f49731e-a922-4a5a-8e84-4b8d9b6a9b9c" />


The games dashboard displays:
- All matchups for the current NFL week
- Win probability percentages for each team
- Navigation to individual game views (planned expansion)

---

## 📄 Pages & Routes

| Page | Route |
|------|------|
| Login | `/login` |
| Sign Up | `/signup` |
| Dashboard Home | `/dashboard/home` |
| Weekly Games | `/dashboard/games` |
| Account | `/dashboard/account` |

---

## System Architecture (High-Level)

FieldVision is the **frontend layer** of a multi-service system:

- **Next.js (TypeScript)**
  - Handles UI, routing, and user interaction
  - Fetches data from backend APIs

- **Spring Boot API**
  - Acts as the main backend gateway
  - Manages persistence (PostgreSQL)
  - Schedules weekly prediction updates

- **FastAPI Service**
  - Performs prediction calculations
  - Handles caching (Redis)
  - Processes historical NFL team statistics
  - Returns win probabilities to Spring Boot

This separation mirrors real-world microservice architecture and keeps responsibilities clearly defined.

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- React
- REST API integration

### Backend (separate repositories)
- Spring Boot
- FastAPI
- PostgreSQL
- Redis
- OpenFeign
- Scheduled jobs

---

## 🔐 Authentication

- Login and signup UI implemented
- JWT-based authentication **in progress**
- Planned route protection for authenticated dashboard pages

---

## 🚧 Current Status

✅ Login and signup UI  
✅ Dashboard navigation structure  
✅ Weekly games page with live prediction data  
✅ Backend integration completed  

In Progress:
- JWT authentication flow
- Team season statistics page
- UI/UX refinement
- Error handling and loading states

---
## Running the Application Locally

```bash
git clone https://github.com/your-username/fieldVision.git
cd fieldVision
npm install
npm run dev
```
---
## Project Goals

This project was built to demonstrate:

- Full-stack software engineering skills using modern frameworks
- Clean frontend architecture integrated with real backend services
- Microservice-based system design and API orchestration
- Production-minded decision making, including caching, persistence, and scheduled jobs
- The ability to design, build, and iterate on a complex application independently

## Planned Enhancements

- Team statistics and season-long performance analytics
- Historical prediction accuracy tracking
- JWT-based authentication and authorization
- Improved UI/UX and responsive design
- Expanded game detail views and deeper matchup insights

## 👤 Author

**LoadingElii**  
Software Engineer  
Full-Stack Development  

LinkedIn:
GitHub: 
---

