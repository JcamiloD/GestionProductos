require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT || 5000;




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


db.verifyConnection()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const configureSwagger = require('./config/swagger');

configureSwagger(app);

app.use('/api', productRoutes); 
app.use('/api', categoryRoutes); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});