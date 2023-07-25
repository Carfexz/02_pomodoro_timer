import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { MenuToggle } from "../../entites/MenuToggle/MenuToggle";
import Navigation from "../../entites/Navigation/Navigation";
import Button from "../../ui/Button/Button";
import useDimensions from "./hooks/useDimensions";
import './Sidebar.css'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        }
    }
};

const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()}>
                <Button />
            </MenuToggle>
        </motion.nav>
    )
}

export default Sidebar;