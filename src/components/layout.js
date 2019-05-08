import React from "react"
import PropTypes from "prop-types"


import Particl from "./Particl"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    {children}
    <Particl/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
