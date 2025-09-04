const { log } = require("console");
const http = require("http");

const PORT = 8080;

// Methods: GET,POST, PATCH , DELETE
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("home page");
    }
  } else if (req.url === "/api/users") {
    if (req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ users: [] }));
    }
  } else {
    res.writeHead(404);
    res.end("Not Found!");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on at http://localhost:${PORT}`);
});
