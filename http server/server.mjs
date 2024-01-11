import http from "http"
import { readFile } from "fs/promises"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 7001;

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/") {
            // send html file
            // res.end("hello from node js server")

            const data = await readFile(`${__dirname}/public/index.html`)
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data)
        }
        else if (req.url === "/style.css") {
            const data = await readFile(`${__dirname}/public/style.css`)
            res.writeHead(200, { "Content-Type": "text/css" })
            res.end(data)
        }
        else if (req.url === "/json") {
            // fetch users form os
            const data = await readFile(`${__dirname}/name.json`)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(data)
        } else if (req.url === "/users") {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    // console.log(JSON.stringify(json))
                    res.writeHead(200, { "Content-Type": "application/json" })
                    res.end(JSON.stringify(json))
                })
        } else {
            // handle 404 page
            res.writeHead(404);
            res.end('moye moye');
        }
    } catch (err) {
        res.writeHead(500);
        res.end("internal server error")
        console.error("Error: ", err);
    }
})


server.listen(port, () => {
    console.log(`server started and is healthy running at port http://localhost:${port}`)
})