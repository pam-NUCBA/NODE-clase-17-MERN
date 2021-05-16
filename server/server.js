import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todosRouter from "./routes/todos.js";

dotenv.config();
const app = express();
const PORT = 8000;

//middlewares
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("home");
});

//routes middleware:
app.use("/todos", todosRouter);

//DB connection:
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("conectado a mongo atlas")
);

app.listen(PORT, () =>
  console.log(`server running on http://www.localhost:${PORT}`)
);
