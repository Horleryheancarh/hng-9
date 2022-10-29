const Router = require("express").Router()

Router.get('/info', (req, res) => {
	res.json({
		slackUsername: "Yheancarh",
		backend: true,
		age: 25,
		bio: "A regular guy trying to change the world",
	})
})

// Error Route
Router.all('*', (req, res) => {
	res.status(404).json({ message: "Route Not Found"})
})

module.exports = Router