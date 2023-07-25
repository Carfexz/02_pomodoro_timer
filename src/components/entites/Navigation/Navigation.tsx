import { motion } from "framer-motion";
import MenuItem from '../MenuItem/MenuItem'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const Navigation = () => (
    <motion.ul variants={variants}>
        {itemsIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)

const itemsIds = [0, 1, 2]

export default Navigation;