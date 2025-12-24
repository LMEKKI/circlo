import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "@/server/auth/auth";
import cors from "cors";
const app = express();
const port = 3000;
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello Better Auth!");
});

app.listen(port, () => {
	console.log(`Better Auth app listening on port ${port}`);
});
