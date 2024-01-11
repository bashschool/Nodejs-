import express from "express"
import fs from "fs"
const app = express()
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


const port = 8080;

app.use(express.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.post("/submit-data", async (req, res) => {
    console.log("Received data: ", req);
    const prevdata = fs.readFileSync("data.json", "utf-8")
    let newData = JSON.parse(prevdata)
    if (!Array.isArray(newData)) newData = [newData]
    newData.push(req.body)
    fs.writeFileSync("data.json", JSON.stringify(newData, null, 2), 'utf-8')
    res.json({
        message: "data recieved by the backend",
        data: req.body
    })
})


app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.json({
        message: "data recieved by the backend",
        name: req.file.originalname,
    })
})
























app.get("/json", (req, res) => {
    // code here

    res.json({
        "ping": "pong"
    })
})


app.get("/users", (req, res) => {
    // code here
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})