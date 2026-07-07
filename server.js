const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Bongshai.com | B2B Marketplace for Construction & Steel' });
});

app.get('/rfq', (req, res) => {
  res.render('rfq', { title: 'Post an RFQ | Bongshai.com' });
});

app.post('/rfq', (req, res) => {
  // Temporary: Just log the RFQ submission for now
  console.log("New RFQ Submission received:", req.body);
  // Send back a simple success response or render a success page
  res.send('<h2>RFQ Submitted Successfully!</h2><a href="/">Go back home</a>');
});

app.get('/suppliers', (req, res) => {
  res.render('suppliers', { title: 'Verified Suppliers | Bongshai.com' });
});

app.get('/vault', (req, res) => {
  res.render('vault', { title: 'Document Vault | Bongshai.com' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
