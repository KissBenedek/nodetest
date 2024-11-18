import express from "express"
import userRouter from "./routes/users.js"

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api/users", userRouter)

app.get("/", (req, res, next) => {
    res.send("Hi, there!");
})

app.get("/express", (req, res, next) =>{
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.get("/greeting", (req, res, next) =>{
    res.send("Hello,  Benedek Kiss  ")
})

app.get("/nodejs", (req, res, next) =>{
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})
app.listen(PORT);
