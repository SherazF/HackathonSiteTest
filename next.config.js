// next.config.js
const withMDX = require('@zeit/mdx')({
  options: {
    mdPlugins: [

    ],
    hastPlugins: [

    ]
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})
