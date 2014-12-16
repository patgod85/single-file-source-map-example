single-file-source-map-example
==============================

Example of creation of source maps for separate js-files using gulp and [gulp-sourcemaps]


I have php project with legacy javascript files in it. I'd like to use gulp as a task runner for my static files. 

One of my tasks is to uglify javascript files. Also very helpful to have source maps.

At first glance there is no issue here. But for my files structure [gulp-sourcemaps] and [gulp-uglify] work wrong. 
Part of problem was the fact that in MAP-file sources property has question mark instead my single file ```['?']```. 
Also sub paths in MAP-file and in uglifyed make some problems. It just don't work in my Firefox and Chrome.

I'm newbie in nodejs and gulpjs too. But this things interesting for me. I've spent little time in debugger but didn't realised why file name in ```sources``` replaced by question mark. 
Also different variations of options for [gulp-sourcemaps] didn't help me. 
Little note: When I used [gulp-concat] before [gulp-uglify] ```sources``` became correct but I don't need concat in this project. 
I just want to minify single file and create the map for it.

So I created this repository to figure out what I do wrong. The [single-file-source-map.js](single-file-source-map.js) is the gulp-plugin that should fix behaviour of [gulp-sourcemaps] for my project.
Folder and HTML-file with suffix _without-fixes_ imagine how files was generated without using of my plugin.

Small note: I use Windows 7.

[gulp-sourcemaps]: https://github.com/floridoo/gulp-sourcemaps
[gulp-uglify]: https://github.com/terinjokes/gulp-uglify
[gulp-concat]: https://github.com/wearefractal/gulp-concat