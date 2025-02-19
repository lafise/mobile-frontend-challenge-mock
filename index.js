const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start app on port 5567
app.listen(5567, () => {
  console.log('Server is running on http://localhost:5567');
});