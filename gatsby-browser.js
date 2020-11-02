/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require("react")
const Layout = require("./src/components/layout").default
const { GlobalStyles } = require("./src/styles/index")
const { CartProvider } = require("./src/context.js")
exports.wrapRootElement = ({ element }) => (
  <>
    <CartProvider>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </CartProvider>
  </>
)
