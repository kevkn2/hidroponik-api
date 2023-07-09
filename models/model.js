const mongoose = require("mongoose")

const schema = mongoose.Schema({
	tds: String,
	ph: String,
	ec: String
}, {
	collection: "test",
	versionKey: false
})

module.exports = mongoose.model("penelitian_unhas", schema)