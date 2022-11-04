const {BadRequestError} = require("express")

const slackUsername = "Yheancarh"

const info = async (req, res) => {
	try {
		res.json({
			slackUsername,
			backend: true,
			age: 25,
			bio: "A regular guy trying to change the world",
		})	
	} catch (error) {
		res.send({ error })
	}
}

const mathematics = async (req, res) => {
	try {
		let { operation_type, x, y } = req.body

		let result;

		if (!x && !y) {
			const arr = operation_type.toLowerCase().split(" ");
		} else {
			if ( operation_type.toLowerCase() === "addition" ) {
				result = x + y
			} else if ( operation_type.toLowerCase() === "subtraction" ) {
				result = x - y
			} else if ( operation_type.toLowerCase() === "multiplication" ) {
				result = x * y
			} else {
				res.status(403).json({
					error: "Bad Request Error"
				})
			}
		}

		res.json({
			slackUsername,
			result,
			operation_type
		})
	} catch (error) {
		res.send({ error })
	}
}

module.exports = { info, mathematics }