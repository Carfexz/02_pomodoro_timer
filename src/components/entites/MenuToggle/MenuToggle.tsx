import { motion } from "framer-motion";
import { FC } from 'react'
import './MenuToggle.css'

export interface MenuToggleComponentProps {
    props: object;
    toggle: object;
}

const Path: FC<MenuToggleComponentProps> = ({ props }) => (
    <motion.path className='path'
        {...props}
    />
);

export const MenuToggle: FC<MenuToggleComponentProps> = ({ toggle }) => (

)