const express = require("express");
const app = express();

let site = `
<!doctype html>

<head>
    <title>Rabotaem</title>
</head>

<body>
    <div id="app"></div>
    <script src="main.js"></script>
</body>
`;

app.use(express.static(__dirname + "/app"));
app.use(express.static(__dirname + "/dist"));

app.get("/", function(request, response){
    response.send(site);
});

app.listen(8800);