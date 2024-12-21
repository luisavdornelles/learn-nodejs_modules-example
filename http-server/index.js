const http = require("http");

const PORT = 3000;

// req is a readable stream
// res is a writable stream
const server = http.createServer();

server.on("request", (req, res) => {
    if (req.url === "/friends") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({
            id: 1,
            name: "luisa",
        }));
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})

// pass in the port for localhost
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});