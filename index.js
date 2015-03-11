var express = require('express');
var app = express();
var fs = require('fs');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    actions["index"](request, response);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

var getFile = function (url, callback) {
    fs.readFile(url, function (err, file) {
        if (err) {
            console.log("没有找到对应文件");
        }
        callback(file.toString());
    });
}
var actions = {
    "index": function (req, res) {
        var file = getFile("index.html", function (file) {
            res.send(file);
        });  
    }
}