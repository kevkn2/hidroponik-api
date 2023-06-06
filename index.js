const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

mongoose
	.connect(
        process.env.MONGODB_URL, 
        { useNewUrlParser: true }
    )
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})