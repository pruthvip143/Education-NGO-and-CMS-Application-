
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

# EduPulse - Full-Stack NGO Content Management System (CMS)

EduPulse is a full-stack web application designed to empower non-governmental organizations (NGOs) by providing absolute content management control over their institutional identity. This module focuses heavily on a dynamic, authenticated administrator workspace that controls the **About Us** portal without altering any layout or frontend source code.

## 🚀 Live Links
* **Frontend UI (GitHub Pages):** [https://harshiharshitha2919-dot.github.io/healthcare-cms-project/](https://harshiharshitha2919-dot.github.io/healthcare-cms-project/)  
* **Backend API Server:** `https://your-deployed-backend-link.onrender.com`

---

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3 (Custom Black & White Theme), Bootstrap 5, FontAwesome, JavaScript (AJAX / Fetch API)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (using Mongoose schemas)
* **Hosting:** GitHub Pages (Static Frontend) & Render/Railway (Dynamic Backend API)

---

## 💾 Relational Database Schema Design
To ensure all user inputs and management parameters save permanently, the system engine communicates directly with a MongoDB cluster utilizing four core tracking collections:

### 1. Our Story (`our_story`)
Stores the master historical narrative block displayed on the public interface.
* `_id`: ObjectUnique Key Identifier
* `story_content`: String (TEXT, NOT NULL)
* `created_at` / `updated_at`: Automated system timestamps

### 2. Core Values (`core_values`)
Maintains individual corporate principles or ethical boundaries.
* `_id`: Unique Key Identifier
* `title`: String (NOT NULL)
* `description`: String (Nullable)

### 3. Programs (`programs`)
Tracks active community focus initiatives and rural campaigns.
* `_id`: Unique Key Identifier
* `program_name`: String (NOT NULL)
* `description`: String

### 4. Team Members (`team_members`)
Manages the leadership board registry metadata.
* `_id`: Unique Key Identifier
* `name`: String (Full Name, NOT NULL)
* `role`: String (Designation, NOT NULL)
* `image_url`: String (Photo path pointer)

---

## 💻 Key Features Developed

### Administrative Content Workspace Console (`about.html`)
* **Dynamic Story Customization:** Built an inline text input form backed by an asynchronous payload router to modify history instantly.
* **Core Values Grid System:** Enabled real-time creation and removal parameters of core values that lock straight into permanent storage.
* **Campaign & Focus Allocations:** Provides explicit input boxes to append upcoming programs seamlessly.
* **Workforce Registry Grid:** Features direct text and image link binding mechanics, matching full validation conditions with explicit "Delete" utility control tools.

### Public Landing UI Canvas (`index.html`)
* Fully mobile-responsive layouts that completely display updated database components.
* Fixed mobile dropdown menus (`#navbarNav`) to link natively with the Admin console seamlessly.

---

## 🔧 How To Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/harshiharshitha2919-dot/healthcare-cms-project.git](https://github.com/harshiharshitha2919-dot/healthcare-cms-project.git)
   cd healthcare-cms-project
