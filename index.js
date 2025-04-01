const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Ready for your TimeSkip?');
});

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
