# [GrapesJS Call Save](http://grapesjs.com)

This plugin call save templates


## Summary

* Plugin name: `grapesjs-plugin-call-save`
* Commands: `gjs-call-save`




## Options

|Option|Description|Default|
|-|-|-
| `call` | Function call save
| `root` | Use the root object to data of call save (async functions are supported), eg. `
    {
      css: ed => ed.getCss(),
      html: ed => ed.getHtml(),
    }
  `
  | `{ ...check the source }` |





## Download

* NPM
  * `npm i grapesjs-plugin-call-save`
* GIT
  * `git clone https://github.com/NortonPerson/grapesjs-plugin-call-save.git`





## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-plugin-call-save.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['grapesjs-plugin-call-save'],
      pluginsOpts: {
        'grapesjs-plugin-call-save': { /* options */ }
      }
  });

  // You can also call the command wherever you want in this way
  editor.runCommand('gjs-export-zip');
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import thePlugin from 'grapesjs-plugin-call-save';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [thePlugin],
  pluginsOpts: {
    [thePlugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => thePlugin(editor, { /* options */ }),
  ],
});
```





## Development

Clone the repository

```sh
$ git clone https://github.com/NortonPerson/grapesjs-plugin-call-save.git
$ cd grapesjs-plugin-call-save
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```



## License

BSD 3-Clause
