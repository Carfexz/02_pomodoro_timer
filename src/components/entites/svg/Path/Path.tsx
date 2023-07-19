import { FC } from 'react'
import { SVGMotionProps, motion } from "framer-motion";

interface MenuPathComponentProps extends SVGMotionProps<SVGPathElement> {
}

const Path: FC<MenuPathComponentProps> = (props) => (
    <motion.path className='path' {...props} />
);

export default Path;