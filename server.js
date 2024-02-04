const express = require('express');
const app = express();
const db = require("./db/connection")

db.connectDB()

app.use(express.json())
app.use('/', require('./routes'))
app.use('/contacts', require('./routes/contacts'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`This server is listening on port ${(process.env.PORT || 3000)}`)
});


