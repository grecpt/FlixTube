//Loads the Express library for use in our code
const express = require("express")
const fs = require("fs");

//Create an instance of an Express app
const app = express()

//Our HTTP server will listen on port 3000.
const port = 4000

//Create a handler for the main HTTP route
app.get("/video", (req, res) => {
    //This handler prints Hello World! in the web browser.
    const path = "/videos/SampleVideo_1280x720_1mb.mp4";
    fs.stat(path, (err, stats) => {
        if (err) {
            console.error("An error occurred");
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });

        fs.createReadStream(path).pipe(res);

    });

});

//Initiates the HTTP server
app.listen(port, () => {
    //The callback prints a message when the server has started.
    console.log(`Example app listening on port ${port}`);
});