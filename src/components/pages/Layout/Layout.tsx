import Footer from "../../widgets/Footer/Footer"
import Header from "../../widgets/Header/Header"
import { FC, HTMLAttributes } from "react"
import { ReactNode } from "react";

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isHeader: true | false;
    isFooter: true | false;
}

const Layout: FC<ComponentProps> = ({ isHeader = true, isFooter = true, children }) => {
    return (
        <div>
            {isHeader && <Header />}
            {children}
            {isFooter && <Footer />}
        </div>
    )
}

export default Layout;