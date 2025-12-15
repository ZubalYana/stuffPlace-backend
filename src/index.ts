import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes";
import unitRoutes from "./routes/unitsRoutes";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('MongoDB connected')
    })

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/units", unitRoutes);


app.get('/', (req, res) => {
    res.send("StuffPlace backend Typescript-Node server.")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})