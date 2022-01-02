import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import encrypt from "./routes/encrypt.js";
import decrypt from "./routes/decrypt.js";

const app = express();

app.use(cors());

app.use("/", encrypt);
app.use("/", decrypt);

app.listen(process.env.PORT, () => {
	console.log(`Connect to port: ${process.env.PORT}`);
});
