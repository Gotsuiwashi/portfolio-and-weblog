import React from "react"
import "../styles/components/layout.scss"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout