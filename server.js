const express = require("express");
const fs = require("fs");
const path = require("path");
const bundle = require("./dist/server.bundle.js");

const app = express();
const renderer = require("vue-server-renderer").createRenderer({
  template: fs.readFileSync("./public/index.template.html", "utf-8")
});

app.use("./dist", express.static(path.join(__dirname, "./dist")));

app.get("*", (req, res) => {
  bundle.default({ url: req.url }).then(
    app => {
      const context = {
        title: "The Music Network",
        meta: `
                <meta charset="UTF-8">
            `
      };

      renderer.renderToString(app, context, (err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).end("Page not found");
          } else {
            res.status(500).end("Internal Server Error");
          }
        } else {
          res.end(html);
        }
      });
    },
    err => {
      console.error("err: ", err);
    }
  );
});

app.listen(8080);
