import Footer from "../../widgets/Footer/Footer"
import Header from "../../widgets/Header/Header"

const Layout = ({ isHeader = true, isFooter = true, children }) => {
    return (
        <div>
            {isHeader && <Header />}
            {children}
            {isFooter && <Footer />}
        </div>
    )
}

export default Layout;