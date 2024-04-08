const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Create a schema for the table
const tableSchema = new mongoose.Schema({
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String
});

const Table = mongoose.model('Table', tableSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/api/table', (req, res) => {
    const data = req.body.data;

    // Insert data into MongoDB
    Table.insertMany(data)
        .then(() => res.json({ message: 'Data inserted successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
