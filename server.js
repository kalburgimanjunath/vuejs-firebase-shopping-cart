// T3: This file only needed when deployed the static files on app server
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/')));

app.get('/*', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
});
