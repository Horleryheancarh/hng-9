const Router = require("express").Router()

const { info, mathematics } = require('./controllers');

Router.get('/info', info);
Router.post('/mathematics', mathematics)

// Error Route
Router.all('*', (req, res) => {
	res.status(404).json({ message: "Route Not Found"})
})

module.exports = Router