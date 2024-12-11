const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.json({
		message: "Hello Blossom",
	});
});

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
