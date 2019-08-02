const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`listening on PORT ${port}`));

module.exports = app
