const http = require("http");
const app = require("../app");
const connectDB = require("../configs/database");

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
