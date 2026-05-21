
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

EduPulse is a full-stack, mobile-responsive content management web application engineered for non-governmental organizations to grant administrators dynamic, real-time control over their public institutional identity data. This application replaces static, manual edits with a dedicated management console dashboard to update content seamlessly without altering the core frontend layout code.

## 🔗 Project Links
* **Live Deployment Server (GitHub Pages):** https://pruthvip143.github.io/Education-NGO-and-CMS-Application-/
* **Source Code Repository (GitHub):** https://github.com/pruthvip143/Education-NGO-and-CMS-Application-

---

## 📊 Database Architecture (MongoDB Schemas)
To ensure all admin data updates remain permanently saved, the backend application engine communicates with a database layer composed of four independent tracking structures:

### 1. Our Story (`our_story`)
Stores the single-row master historical text narrative and background timeline milestones.
* `id` (INT, Primary Key) - Unique sequence identifier key.
* `story_content` (TEXT, NOT NULL) - The primary history description narrative text body.
* `created_at` (DATE TIME) - Automatic initialization log timestamp.
* `updated_at` (DATE TIME) - Automatic tracking timestamp of the last administrative modification save.

### 2. Core Values (`core_values`)
Stores individual organizational virtues or core ethical principles.
* `id` (INT, Primary Key) - Unique row index identifier.
* `title` (VARCHAR 100, NOT NULL) - Name of the foundational principle (e.g., Integrity, Inclusivity).
* `description` (TEXT, NULLABLE) - Optional detailed background context summary.
* `created_at` / `updated_at` (DATE TIME) - System operational logs.

### 3. Programs (`programs`)
Stores operational focus campaigns, community target initiatives, or action focuses.
* `id` (INT, Primary Key) - Unique identity primary key sequence.
* `program_name` (VARCHAR 150, NOT NULL) - Clear name header of the active campaign sector.
* `description` (TEXT) - Context string detailing active agendas or milestones.
* `created_at` / `updated_at` (DATE TIME) - Timestamps recording data creation and updates.

### 4. Team Members (`team_members`)
Maps and hosts profiles, assigned corporate titles, and photo paths of the executive leadership panel.
* `id` (INT, Primary Key) - Unique employee sequence registry primary key.
* `name` (VARCHAR 255, NOT NULL) - Full legal name of the registered team executive.
* `role` (VARCHAR 255, NOT NULL) - Assigned corporate title or designation (e.g., Program Director).
* `image_url` (VARCHAR 255, NULLABLE) - Complete directory string path pointer leading to the photo asset.
* `created_at` / `updated_at` (DATE TIME) - Real-time structural tracking logs.

---

## 🌟 Key Features Developed

### 1. Administrative Content Management Panel (`about.html`)
* **Dynamic Story Customization:** A secure input area featuring a text area component allowing authorized administrators to instantly update the primary background narrative text permanently in the database.
* **Core Values Grid System:** An editable matrix view enabling administrators to introduce new corporate values into the grid on the fly, paired with active inline control buttons to handle instant row deletions.
* **Focus Campaign Controls:** Explicit campaign form entry components to add or clear active focal programs dynamically.
* **Workforce Registry Table:** Structured data forms to track team members by full name, title role, and profile photograph paths, supported by a real-time table tracking grid container with built-in Edit and Delete mechanisms.

### 2. Public Visitor View Canvas (`index.html`)
* **Warm Introduction UI:** Displays a prominent welcoming interface emphasizing the organization's identity, core mission, and achievement metrics.
* **Dynamic Content Syncing:** Automatically pulls and visualizes data saved from the admin panel (Story, Values, Programs, and Team profiles) instantly onto the web page using seamless AJAX Fetch APIs.

---

## 🛠️ Technology Stack
* **Frontend UI Canvas:** HTML5, CSS3, JavaScript (ES6 Fetch API Interface Engines), Bootstrap 5, FontAwesome Vectors
* **Backend Runtime Middleware:** Node.js, Express.js Engine
* **Database Infrastructure Layer:** MongoDB (Mongoose Document Mapping)

---

## 🚀 Local Installation & Run Guide

To boot up and run this project on your local machine, execute these steps:

1. **Clone the Project Repository:**
   ```bash
   git clone [https://github.com/pruthvip143/Education-NGO-and-CMS-Application-.git](https://github.com/pruthvip143/Education-NGO-and-CMS-Application-.git)
   cd Education-NGO-and-CMS-Application-
