const express = require('express');
const app = express();

app.use('/', require('./routes'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`This server is listening on port ${(process.env.PORT || 3000)}`)
});