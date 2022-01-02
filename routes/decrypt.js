import express from "express";
const router = express.Router();

router.get("/decrypt", (req, res) => {
	if (req.header("decrypt_message")) {
		const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		const lower_input = req.header("decrypt_message").toLowerCase();
		const pos = parseInt(req.header("position")) || 3;
		let decrypted = "";

		for (let i = 0; i < lower_input.length; i++) {
			for (let j = 0; j < alphabet.length; j++) {
				if (lower_input[i] == alphabet[j] && j - pos < 0) {
					const position = alphabet.length - 1 - (pos - (j + 1));
					decrypted += alphabet[position];
				} else if (lower_input[i] == alphabet[j]) {
					decrypted += alphabet[j - pos];
				}
			}
		}

		res.status(200).json({
			decrypted,
		});
	} else {
		res.status(400).send();
	}
});

export default router;
