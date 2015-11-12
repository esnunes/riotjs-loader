# riotjs module loader for webpack

## install
```bash
npm install --save-dev riot riotjs-loader babel babel-loader webpack webpack-dev-server
```

## usage

### /webpack.config.js
```javascript
var webpack = require('webpack');

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './public'
  }
};
```

### /public/index.html
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>App</title>
</head>
<body>
  <app></app>
  <script src="bundle.js"></script>
</body>
</html>
```

### /app/index.js
```javascript
require('./app.tag');

riot.mount('*');
```

### /app/app.tag
```html
require('./name.tag');

<app>
  <name first="Hello" last="World"></name>
  <name first="Ola" last="Mundo"></name>
</app>
```

### /app/name.tag
```html
<name>
  <h1>{ opts.last }, { opts.first }</h1>
</name>
```

## development

```bash
./node_modules/.bin/webpack-dev-server --inline --hot
```
- open http://localhost:8080/

## LICENSE

(MIT License)

Copyright (c) 2015 Eduardo Nunes <esnunes@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
