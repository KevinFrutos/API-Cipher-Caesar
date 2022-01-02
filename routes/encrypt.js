import express from "express";
const router = express.Router();

router.get("/encrypt", (req, res) => {
	if (req.header("encrypt_message")) {
		const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		const lower_input = req.header("encrypt_message").toLowerCase();
		let encrypted = "";
		let pos;

		if (parseInt(req.header("position")) < 0 || parseInt(req.header("position")) > 25) {
			return res.status(400).send();
		}
		pos = parseInt(req.header("position")) || 3;

		for (let i = 0; i < lower_input.length; i++) {
			for (let j = 0; j < alphabet.length; j++) {
				if (lower_input[i] == alphabet[j] && j + pos > alphabet.length - 1) {
					const position = j + pos - (alphabet.length - 1) - 1;
					encrypted += alphabet[position];
				} else if (lower_input[i] == alphabet[j]) {
					encrypted += alphabet[j + pos];
				}
			}
		}

		res.status(200).json({
			encrypted,
		});
	} else {
		res.status(400).send();
	}
});

export default router;
