// next.config.js
const withMDX = require('@next/mdx')({
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
