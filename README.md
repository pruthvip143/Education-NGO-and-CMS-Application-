
# EduPulse - Full-Stack Education CMS Web Application

EduPulse is a mobile-responsive Education Content Management System (CMS) engineered using Bootstrap 5 to organize community learning drives, track classroom metrics, and manage educational funding allocations. The application streamlines organizational tasks for NGOs through an interactive dashboard interface.

## 🔗 Project Links
* **Live Server Link:** [Paste your Vercel URL here]
* **Source Code Repository:** [Paste your GitHub repository link here]

## 📊 Database Architecture (Mock Schema)
The system simulates a backend architecture tracking two primary structures:
1. **Users:** Tracks `user_id`, `full_name`, `email`, `password`, and access roles (`Admin`, `Coordinator`, `Volunteer`).
2. **Education Campaigns:** Tracks ongoing projects using fields like `Campaign Name`, `Target Focus`, `Target Group`, and `Funding Target`.

## 🌟 Key Features

### 1. Unified Authentication Interface
* Dynamic form-switching architecture that allows users to toggle between Login and Registration frames smoothly without causing page reload lags.
* Implements Role-Based access filtering fields directly on the front-end view.

### 2. Live Operational Metrics Panels
* **Active Programs:** Real-time indicator displaying the total number of live classroom deployments.
* **Total Funds Raised:** Live tracker showing global financial support collected for educational grants.
* **On-Duty Tutors:** Displays active educational volunteers and teaching personnel counts.
* **Students Benefited:** Reflects the aggregate number of student enrollments reached.

### 3. Dynamic Education Campaign Manager
* Direct user interface interaction allowing authorized roles to click the **"+ New Education Camp"** button to expand an interactive management module.
* Instantly appends newly deployed initiatives (such as digital literacy drives or tuition scholarships) directly onto a live web datatable row matrix using state management.

## 🛠️ Technology Stack
* **Frontend Core:** HTML5, CSS3, JavaScript (ES6+)
* **UI Framework:** Bootstrap 5 (Integrated via fast CDN)
* **Deployment Pipeline:** Vercel Cloud Architecture Ecosystem

## 🚀 Local Installation & Run Guide

To run this project on your local machine, follow these simple steps:

1. **Clone the Project Repository:**
   ```bash
   git clone [Paste your GitHub Repository URL here]
   
