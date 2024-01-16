const express = require('express');
const app = express();

const peronalAssignment1Controller = require('./controllers/personalassignment1.js')

app.get('/', peronalAssignment1Controller.rileyRoute)

app.get('/dog', peronalAssignment1Controller.dogRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log(`This server is listening on port ${(process.env.PORT || 3000)}`)
});