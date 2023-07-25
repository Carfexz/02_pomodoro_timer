import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";
import { ReactNode } from "react";
import Button from "../../ui/Button/Button";
import './MenuItem.css'

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    i: number;
}

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stifness: 1000 }
        }
    }
};

const colors = ['#ff2b2b', '#ff2b2b', '#ff2b2b'];

const MenuItem: FC<MenuItemProps> = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` }
    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="text-placeholder" style={style} />
        </motion.div>
    )
}

export default MenuItem;