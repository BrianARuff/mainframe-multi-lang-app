const express = require("express");
const server = express();
const cors = require("cors");
const sys = require("child_process");
const path = require("path");

server.use(express.json());
server.use(cors());

server.post("/api/add", (req, res) => {
  const cAppPath = path.join(__dirname + "/c-app/app.exe");
  const [one, two, three] = req.body;

  sys.exec(
    `${cAppPath} ${one || 0} ${two || 0} ${three || 0}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(stdout);

      res.json({ result: stdout });
    }
  );
});

server.listen(3000, () => {
  console.log("Node server running on port 3000");
});
