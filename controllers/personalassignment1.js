const rileyRoute = (req, res) => {
    res.send("Riley");
}

const dogRoute = (req, res) => {
    res.send("Harley");
}

module.exports = {
    rileyRoute,
    dogRoute
}