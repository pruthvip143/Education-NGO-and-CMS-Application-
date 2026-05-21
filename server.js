/**
 * Project Workspace: EduPulse NGO Portal
 * Module 3: Merged "About Us" Content Management System (CMS) Pipeline
 * Engineering Spec: Node.js / Express.js / MongoDB (Mongoose Schema Layer)
 * Visual Theme: Minimalist Black & White Premium Aesthetic
 */

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ---------------------------------------------------------
// 1. GLOBAL SYSTEM ROUTING & DATA PARSING MIDDLEWARE
// ---------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish pool handshakes directly with the active MongoDB cluster instance
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/edupulse_db';
mongoose.connect(MONGO_URI)
    .then(() => console.log('EduPulse Mongoose Data Engine: Connected successfully to MongoDB mapping matrices.'))
    .catch(err => console.error('Database connection exception vector handled:', err));


// ---------------------------------------------------------
// 2. STABLE DATA MODEL DESIGN SCHEMAS (MONGODB LAYER)
// ---------------------------------------------------------

[span_4](start_span)// Table 1: our_story schema definition[span_4](end_span)
const OurStory = mongoose.model('OurStory', new mongoose.Schema({
    [span_5](start_span)content: { type: String, required: true } // Detailed description of the NGO's story[span_5](end_span)
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'our_story' }));

[span_6](start_span)// Table 2: core_values schema definition[span_6](end_span)
const CoreValue = mongoose.model('CoreValue', new mongoose.Schema({
    [span_7](start_span)value: { type: String, required: true } // A single core value (e.g., Integrity)[span_7](end_span)
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'core_values' }));

[span_8](start_span)// Table 3: programs schema definition[span_8](end_span)
const Program = mongoose.model('Program', new mongoose.Schema({
    [span_9](start_span)name: { type: String, required: true },       // Name of the program[span_9](end_span)
    [span_10](start_span)description: { type: String, default: "" }    // Optional detailed description[span_10](end_span)
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'programs' }));

[span_11](start_span)// Table 4: team_members schema definition[span_11](end_span)
const TeamMember = mongoose.model('TeamMember', new mongoose.Schema({
    [span_12](start_span)name: { type: String, required: true },       // Full name of the member[span_12](end_span)
    [span_13](start_span)role: { type: String, required: true },       // Designation or post title[span_13](end_span)
    [span_14](start_span)image_url: { type: String, default: "" }      // URL path to member portrait asset[span_14](end_span)
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'team_members' }));


// ---------------------------------------------------------
// 3. BACKEND CONTROLLER IMPLEMENTATION (API ROUTING ENDPOINTS)
// ---------------------------------------------------------

/**
 * @route   GET /api/about/context
 * @desc    Assembles unified full-page response array configurations mapping all collections
 */
app.get('/api/about/context', async (req, res) => {
    try {
        let story = await OurStory.findOne();
        if (!story) {
            story = await OurStory.create({ 
                content: "Founded in 2015, our NGO empowers communities through education, healthcare, and empowerment." 
            });
        }
        const values = await CoreValue.find().sort({ created_at: 1 });
        const programs = await Program.find().sort({ created_at: 1 });
        const team = await TeamMember.find().sort({ created_at: -1 });

        res.json({ story, values, programs, team });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error compiling content dataset arrays." });
    }
});

/**
 * @route   POST /api/about/story
 * [span_15](start_span)@desc    Updates the persistent institutional 'Our Story' single entry[span_15](end_span)
 */
app.post('/api/about/story', async (req, res) => {
    try {
        const { content } = req.body;
        let story = await OurStory.findOne();
        if (story) {
            story.content = content;
            await story.save();
        } else {
            story = await OurStory.create({ content });
        }
        res.json({ success: true, message: "Our Story updated seamlessly." });
    } catch (err) {
        res.status(400).json({ success: false, message: "Validation payload matching failed." });
    }
});

// --- CORE VALUES CRUD ENDPOINTS ---
app.post('/api/about/values', async (req, res) => {
    try {
        const newEntity = await CoreValue.create({ value: req.body.value });
        res.json({ success: true, item: newEntity });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/values/:id', async (req, res) => {
    try {
        await CoreValue.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Value successfully removed from database collections." });
    } catch (err) { res.status(400).json({ success: false }); }
});

// --- PROGRAMS CRUD ENDPOINTS ---
app.post('/api/about/programs', async (req, res) => {
    try {
        const newProg = await Program.create({ name: req.body.name, description: req.body.description });
        res.json({ success: true, item: newProg });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/programs/:id', async (req, res) => {
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});

// --- TEAM MEMBERS CRUD ENDPOINTS ---
app.post('/api/about/team', async (req, res) => {
    try {
        const newMember = await TeamMember.create({
            name: req.body.name,
            role: req.body.role,
            image_url: req.body.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
        });
        res.json({ success: true, item: newMember });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/team/:id', async (req, res) => {
    try {
        await TeamMember.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});


// ---------------------------------------------------------
// 4. EMBEDDED VIEWPRESENTATION ENGINE (HTML/CSS INTERFACE)
// ---------------------------------------------------------
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduPulse Framework - Module 3 Management Module</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-dark: #111111;
            --primary-light: #ffffff;
            --gray-border: #e2e8f0;
            --gray-bg: #f8fafc;
            --text-muted: #64748b;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--primary-dark);
            background-color: var(--primary-light);
        }

        /* High-Contrast Navigation Aesthetic Rules */
        .navbar { border-bottom: 1px solid var(--gray-border); background-color: var(--primary-light); }
        .navbar-brand { font-weight: 700; letter-spacing: 1px; color: var(--primary-dark) !important; }
        
        .section-padding { padding: 60px 0; }
        .dashboard-card { border: 1px solid var(--gray-border); background: var(--primary-light); border-radius: 0; padding: 30px; margin-bottom: 30px; }
        .admin-header { background: var(--primary-dark); color: var(--primary-light); padding: 40px 20px; border-radius: 0; margin-bottom: 40px; }
        
        /* Interactive Micro-transitions: Values Card Background Color Inversion */
        .value-card {
            border: 1px solid var(--gray-border); border-radius: 0; padding: 30px 20px;
            background: var(--primary-light); transition: all 0.3s ease; height: 100%; text-align: center;
        }
        .value-card:hover {
            background: var(--primary-dark); color: var(--primary-light); border-color: var(--primary-dark); transform: translateY(-3px);
        }
        .value-icon { font-size: 2rem; margin-bottom: 15px; color: var(--primary-dark); transition: color 0.3s ease; }
        .value-card:hover .value-icon { color: var(--primary-light); }

        /* Dynamic Program Index Left Indicator Bar */
        .program-box { border-left: 3px solid var(--primary-dark); padding-left: 20px; margin-bottom: 25px; }

        /* Interactive Micro-transitions: Grayscale portrait filter switches */
        .team-card { border: 1px solid var(--gray-border); background: var(--primary-light); border-radius: 0; overflow: hidden; transition: all 0.3s ease; text-align: center; }
        .team-card:hover { border-color: var(--primary-dark); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .team-img-wrapper { height: 250px; background: #111111; overflow: hidden; }
        .team-card img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.4s ease; }
        .team-card:hover img { filter: grayscale(0%); transform: scale(1.02); }
        .team-info { padding: 15px; border-top: 1px solid var(--gray-border); }
        
        /* Admin Interactive Framework Lists styling */
        .entity-list-item { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--gray-border); padding: 12px 0; }
        .form-control, .btn { border-radius: 0; }
        .btn-dark { background: var(--primary-dark); border-color: var(--primary-dark); }
        .btn-outline-danger { font-size: 0.8rem; padding: 4px 8px; border-radius: 0; }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-light sticky-top py-3">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fa-solid fa-layer-group me-2"></i>EDUPULSE CMS</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link px-3 fw-bold text-dark" href="#admin-console"><i class="fa-solid fa-sliders me-1"></i> Admin Dashboard</a>
                <a class="nav-link px-3" href="#live-preview"><i class="fa-solid fa-eye me-1"></i> Public View Preview</a>
            </div>
        </div>
    </nav>

    <main id="admin-console" class="container section-padding">
        <div class="admin-header text-center">
            <h1 class="display-6 fw-bold text-uppercase tracking-wide mb-2">Admin Dashboard</h1>
            <p class="mb-0 text-uppercase small tracking-wider opacity-75">Manage the "About Us" Page Content Matrices</p>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="dashboard-card">
                    <h3 class="h5 fw-bold text-uppercase mb-3"><i class="fa-solid fa-book-open me-2"></i>Our Story Section</h3>
                    <form id="story-form">
                        <div class="mb-3">
                            <label class="small fw-bold text-uppercase text-muted mb-1">Story Content Narrative:</label>
                            <textarea id="story-input" class="form-control" rows="4" required placeholder="Enter primary history timeline description data..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark btn-sm text-uppercase tracking-wider px-3">Save Story Record</button>
                    </form>
                </div>

                <div class="dashboard-card">
                    <h3 class="h5 fw-bold text-uppercase mb-3"><i class="fa-solid fa-gavel me-2"></i>Core Values</h3>
                    <div id="values-admin-list" class="mb-3"></div>
                    <form id="value-form" class="input-group">
                        <input type="text" id="value-input" class="form-control form-control-sm" placeholder="Add a new core value..." required>
                        <button type="submit" class="btn btn-dark btn-sm text-uppercase px-3">Save</button>
                    </form>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="dashboard-card">
                    <h3 class="h5 fw-bold text-uppercase mb-3"><i class="fa-solid fa-list-check me-2"></i>Programs Framework</h3>
                    <div id="programs-admin-list" class="mb-3"></div>
                    <form id="program-form">
                        <div class="mb-2">
                            <input type="text" id="prog-name-input" class="form-control form-control-sm" placeholder="Program Name (e.g., Child Literacy Support)" required>
                        </div>
                        <div class="mb-2">
                            <textarea id="prog-desc-input" class="form-control form-control-sm" rows="2" placeholder="Optional brief program metrics description details..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark btn-sm text-uppercase px-3">Save Program</button>
                    </form>
                </div>

                <div class="dashboard-card">
                    <h3 class="h5 fw-bold text-uppercase mb-3"><i class="fa-solid fa-users me-2"></i>Team Members Roster</h3>
                    <div id="team-admin-list" class="mb-3"></div>
                    <form id="team-form">
                        <div class="row g-2 mb-2">
                            <div class="col-6"><input type="text" id="member-name-input" class="form-control form-control-sm" placeholder="Full Name" required></div>
                            <div class="col-6"><input type="text" id="member-role-input" class="form-control form-control-sm" placeholder="Role (e.g., Director)" required></div>
                        </div>
                        <div class="mb-2">
                            <input type="url" id="member-img-input" class="form-control form-control-sm" placeholder="Optional Portrait Image URL asset path...">
                        </div>
                        <button type="submit" class="btn btn-dark btn-sm text-uppercase px-3">Save Member</button>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <section id="live-preview" class="bg-light border-top pt-5 pb-5">
        <div class="container bg-white p-5 border shadow-sm rounded-0">
            <span class="d-block text-center text-uppercase text-muted tracking-widest small mb-1">- Public Application View Preview -</span>
            <h2 class="text-center fw-bold text-uppercase tracking-wide mb-5">ABOUT EDUPULSE NGO</h2>
            
            <div class="row g-4 mb-5 align-items-center">
                <div class="col-md-3 border-end text-md-end text-start">
                    <h3 class="h4 fw-bold text-uppercase tracking-wider m-0">Our Dynamic Story</h3>
                </div>
                <div class="col-md-9">
                    <p id="preview-story" class="lead text-secondary m-0">Loading data parameters via NoSQL model mappings...</p>
                </div>
            </div>

            <div class="mb-5">
                <h4 class="h5 text-center text-uppercase fw-bold tracking-wider mb-4">Our Ethical Foundation</h4>
                <div id="preview-values-row" class="row g-4 justify-content-center"></div>
            </div>

            <div class="row g-4 mb-5 border-top pt-5">
                <div class="col-lg-4">
                    <h4 class="h5 text-uppercase fw-bold tracking-wider mb-3">Core Operational Streams</h4>
                    <p class="text-muted small">Programmatic definitions updated in real-time by administrators to secure transparent delivery metrics.</p>
                </div>
                <div id="preview-programs-col" class="col-lg-8"></div>
            </div>

            <div class="border-top pt-5">
                <h4 class="h5 text-center text-uppercase fw-bold tracking-wider mb-4">Institutional Leadership</h4>
                <div id="preview-team-row" class="row g-4 justify-content-center"></div>
            </div>
        </div>
    </section>

    <footer class="bg-dark text-white text-center py-4 small">
        <div class="container">
            <p class="mb-0 opacity-75">&copy; 2026 EduPulse NGO System. Module 3 Core Architecture Pipeline Deployment.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            fetchStateContext();

            // Intercept Story Submission
            document.getElementById('story-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                await syncPost('/api/about/story', { content: document.getElementById('story-input').value });
            });

            // Intercept Core Value Submission
            document.getElementById('value-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                await syncPost('/api/about/values', { value: document.getElementById('value-input').value });
                document.getElementById('value-input').value = "";
            });

            // Intercept Focus Program Submission
            document.getElementById('program-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                await syncPost('/api/about/programs', {
                    name: document.getElementById('prog-name-input').value,
                    description: document.getElementById('prog-desc-input').value
                });
                document.getElementById('prog-name-input').value = "";
                document.getElementById('prog-desc-input').value = "";
            });

            // Intercept Profile Card Roster Submission
            document.getElementById('team-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                await syncPost('/api/about/team', {
                    name: document.getElementById('member-name-input').value,
                    role: document.getElementById('member-role-input').value,
                    image_url: document.getElementById('member-img-input').value
                });
                document.getElementById('member-name-input').value = "";
                document.getElementById('member-role-input').value = "";
                document.getElementById('member-img-input').value = "";
            });
        });

        // Universal Network Submission Framework Handler
        async function syncPost(targetUrl, payloadData) {
            try {
                const response = await fetch(targetUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payloadData)
                });
                if (response.ok) { fetchStateContext(); }
            } catch (err) { console.error("Communication anomaly captured:", err); }
        }

        // Universal Element Removal Handler
        async function deleteItem(targetUrl) {
            if (confirm("Confirm database row record destruction sequence parameters?")) {
                const response = await fetch(targetUrl, { method: 'DELETE' });
                if (response.ok) { fetchStateContext(); }
            }
        }

        // Asynchronous Context Pipeline Grid Painter
        async function fetchStateContext() {
            try {
                const stream = await fetch('/api/about/context');
                const data = await stream.json();

                // 1. Render History Story Modules
                if (data.story) {
                    document.getElementById('story-input').value = data.story.content;
                    document.getElementById('preview-story').innerText = data.story.content;
                }

                // 2. Render Value Structures (Admin panel lists + Dynamic Inversion grids)
                const valAdmin = document.getElementById('values-admin-list');
                const valView = document.getElementById('preview-values-row');
                valAdmin.innerHTML = ""; valView.innerHTML = "";
                
                data.values.forEach(v => {
                    valAdmin.innerHTML += \`
                        <div class="entity-list-item small">
                            <span><strong>\${v.value}</strong></span>
                            <button onclick="deleteItem('/api/about/values/\${v._id}')" class="btn btn-outline-danger py-1 px-2"><i class="fa-solid fa-trash"></i> Delete</button>
                        </div>\`;
                    valView.innerHTML += \`
                        <div class="col-md-3">
                            <div class="value-card">
                                <div class="value-icon"><i class="fa-solid fa-shield-halved"></i></div>
                                <h5 class="fw-bold text-uppercase small m-0">\${v.value}</h5>
                            </div>
                        </div>\`;
                });

                // 3. Render Strategic Programs (Admin panel lists + Preview indicator box elements)
                const progAdmin = document.getElementById('programs-admin-list');
                const progView = document.getElementById('preview-programs-col');
                progAdmin.innerHTML = ""; progView.innerHTML = "";

                data.programs.forEach(p => {
                    progAdmin.innerHTML += \`
                        <div class="entity-list-item small">
                            <span><strong>\${p.name}</strong></span>
                            <button onclick="deleteItem('/api/about/programs/\${p._id}')" class="btn btn-outline-danger py-1 px-2"><i class="fa-solid fa-trash"></i> Delete</button>
                        </div>\`;
                    progView.innerHTML += \`
                        <div class="program-box">
                            <h5 class="fw-bold text-uppercase mb-1">\${p.name}</h5>
                            <p class="text-secondary small m-0">\${p.description || "No strategic summary descriptor logged."}</p>
                        </div>\`;
                });

                // 4. Render Team Personnel Roster (Admin panel lists + Interactive portrait grayscales)
                const teamAdmin = document.getElementById('team-admin-list');
                const teamView = document.getElementById('preview-team-row');
                teamAdmin.innerHTML = ""; teamView.innerHTML = "";

                data.team.forEach(t => {
                    teamAdmin.innerHTML += \`
                        <div class="entity-list-item small">
                            <span><strong>\${t.name}</strong> (\${t.role})</span>
                            <button onclick="deleteItem('/api/about/team/\${t._id}')" class="btn btn-outline-danger py-1 px-2"><i class="fa-solid fa-trash"></i> Delete</button>
                        </div>\`;
                    teamView.innerHTML += \`
                        <div class="col-6 col-md-3">
                            <div class="team-card">
                                <div class="team-img-wrapper">
                                    <img src="\${t.image_url}" alt="Roster Face Matrix">
                                </div>
                                <div class="team-info">
                                    <h6 class="fw-bold mb-0 text-uppercase small">\${t.name}</h6>
                                    <span class="text-muted d-block" style="font-size:0.75rem;">\${t.role}</span>
                                </div>
                            </div>
                        </div>\`;
                });

            } catch (err) { console.error("Error drawing data metrics layout UI map layers:", err); }
        }
    </script>
</body>
</html>
    `);
});

// ---------------------------------------------------------
// 5. SERVER RUNTIME INITIALIZATION
// ---------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`EduPulse Deployment Pipeline: Application active live on node address target: http://localhost:${PORT}`);
});
