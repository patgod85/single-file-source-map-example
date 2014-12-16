var through = require('through2');
var fs = require("fs");

function removeSubPath(path){
    var parts = path.split(/[\/\\]/);
    return parts[parts.length - 1];
}

module.exports.afterUglify = function() {

    return through.obj(function(file, encoding, callback) {

        // Here we fix "?" in sources

        var fileName = file.history[file.history.length - 1];
        file.sourceMap.sources[0] = removeSubPath(fileName);
        this.push(file);
        callback();
    });
};

module.exports.afterDest = function() {

    return through.obj(function(file, encoding, callback) {
        var fileName = file.history[file.history.length - 1];
        if(fileName.substring(fileName.length - 4, fileName.length) == '.map') {

            // Here we remove subpath for MAP-file

            var mapFile = JSON.parse(fs.readFileSync(fileName, "utf8"));
            mapFile.file = removeSubPath(mapFile.file);
            fs.writeFile(fileName, JSON.stringify(mapFile), "utf8", callback);
        }else if(fileName.substring(fileName.length - 7, fileName.length) == '.min.js') {

            // Here we remove subpath for uglifyed file

            var uglifyled = fs.readFileSync(fileName, "utf8");
            var result = uglifyled.replace(/sourceMappingURL=(.+\/)?([^\/]+\.map)/, "sourceMappingURL=$2");
            fs.writeFile(fileName, result, "utf8", callback);
        }else{
            callback();
        }
    });
};
