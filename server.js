const express = require('express');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const app = express();

// Middleware
app.use(express.static('public'));

// API endpoint để download folder as ZIP
app.get('/api/download-folder/:folderName', (req, res) => {
  const folderName = req.params.folderName;
  const folderPath = path.join(__dirname, 'public', folderName);

  // Security check - prevent directory traversal
  if (!folderPath.startsWith(path.join(__dirname, 'public'))) {
    return res.status(403).json({ error: 'Access denied' });
  }

  // Check if folder exists
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: 'Folder not found' });
  }

  // Set response headers
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${folderName}.zip"`);

  // Create archive
  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.on('error', (err) => {
    res.status(500).json({ error: 'Error creating archive' });
  });

  archive.pipe(res);
  archive.directory(folderPath, folderName);
  archive.finalize();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
