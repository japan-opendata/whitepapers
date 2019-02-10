const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')
const inplace = require('metalsmith-in-place')
const models = require('metalsmith-models')

const templateConfig = {
}

Metalsmith(__dirname)
  .metadata({
  })
  .source('./src')
  .destination('./docs')
  .clean(true)
  .use(models({
    "directory": "./src/datasets/0"
  }))
  .use(inplace({
    "engineOptions": {
      "plugins": [
        "markdown-it-deflist",
        ["markdown-it-toc-done-right", {"listType": "ul"}],
        "markdown-it-anchor",
      ]
    }
  }
  ))
  .use(layouts(templateConfig))
  .build(function (err, files) {
    if (err) { throw err }
  })
