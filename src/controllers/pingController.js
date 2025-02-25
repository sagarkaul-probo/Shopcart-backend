function pingController(req, res) {
    return res.json({ message: 'Alive' });
}

module.exports = {
    pingController
}