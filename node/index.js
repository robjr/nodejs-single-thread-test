const http = require("http");
const axios = require("axios")

const requestListener = async function (req, res) {
  const requestId = Math.floor(Math.random() * 1000);

  console.log(`[${requestId}] New Request`)
  res.write(`[${requestId}] Initiated\n`)

  await axios.get("http://php:9000?sleepTime=5");

  res.writeHead(200);
  res.end(`[${requestId}] Done\n`);
};

const host = "0.0.0.0";
const port = 8000;
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});
