const express = require('express');
const path = require('path');
const app = express();

// Port 3000 is required for the internal environment, 
// but we use process.env.PORT to be flexible for deployment.
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle Single Page Application (SPA) routing
// Support Express 5 *all syntax as requested
app.get('*all', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Standard fallback for Express 4 compatibility or if *all isn't supported as expected
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
