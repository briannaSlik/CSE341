const rileyRoute = (req, res) => {
    res.send("Riley Slik");
}

const dogRoute = (req, res) => {
    res.send("Harley");
}

module.exports = {
    rileyRoute,
    dogRoute
}