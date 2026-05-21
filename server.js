/**
 * Project Workspace: CarePulse Healthcare CMS Engine
 * Module 3: About Us Management Functionality API Controller Script
 * Tech Stack: Node.js / Express.js / MongoDB (Mongoose Schema Engine)
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// ---------------------------------------------------------
// CORS CONFIGURATION POLICY INTERCEPTOR MIDDLEWARE 
// ---------------------------------------------------------
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish pool handshakes directly with the active MongoDB cluster instance
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/carepulse_db';
mongoose.connect(MONGO_URI)
    .then(() => console.log('CarePulse NoSQL Engine: Connected successfully to MongoDB clusters.'))
    .catch(err => console.error('Database connection exception vector handled:', err));

// ---------------------------------------------------------
// STABLE DATA MODEL DESIGN SCHEMAS (MONGODB LAYER)
// ---------------------------------------------------------
const OurStory = mongoose.model('OurStory', new mongoose.Schema({ content: { type: String, required: true } }, { collection: 'our_story' }));
const CoreValue = mongoose.model('CoreValue', new mongoose.Schema({ value: { type: String, required: true } }, { collection: 'core_values' }));
const Program = mongoose.model('Program', new mongoose.Schema({ name: { type: String, required: true }, description: { type: String, default: "" } }, { collection: 'programs' }));
const TeamMember = mongoose.model('TeamMember', new mongoose.Schema({ name: { type: String, required: true }, role: { type: String, required: true }, image_url: { type: String, default: "" } }, { collection: 'team_members' }));

// ---------------------------------------------------------
// BACKEND CONTROLLER IMPLEMENTATION (API ROUTING ENDPOINTS)
// ---------------------------------------------------------
app.get('/api/about/context', async (req, res) => {
    try {
        let story = await OurStory.findOne();
        if (!story) {
            story = await OurStory.create({ content: "CarePulse launched in 2015 to coordinate field health support drives." });
        }
        const values = await CoreValue.find();
        const programs = await Program.find();
        const team = await TeamMember.find();
        res.json({ story, values, programs, team });
    } catch (err) { res.status(500).json({ success: false, error: "Database reading matrix failure." }); }
});

app.post('/api/about/story', async (req, res) => {
    try {
        let story = await OurStory.findOne();
        if (story) { story.content = req.body.content; await story.save(); } 
        else { await OurStory.create({ content: req.body.content }); }
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.post('/api/about/values', async (req, res) => {
    try {
        const item = await CoreValue.create({ value: req.body.value });
        res.json({ success: true, item });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/values/:id', async (req, res) => {
    try {
        await CoreValue.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.post('/api/about/programs', async (req, res) => {
    try {
        const item = await Program.create({ name: req.body.name, description: req.body.description });
        res.json({ success: true, item });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/programs/:id', async (req, res) => {
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.post('/api/about/team', async (req, res) => {
    try {
        const item = await TeamMember.create({ name: req.body.name, role: req.body.role, image_url: req.body.image_url });
        res.json({ success: true, item });
    } catch (err) { res.status(400).json({ success: false }); }
});

app.delete('/api/about/team/:id', async (req, res) => {
    try {
        await TeamMember.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(400).json({ success: false }); }
});

// Start Runtime Engine
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CarePulse Core API listening on port parameter: http://localhost:${PORT}`));
