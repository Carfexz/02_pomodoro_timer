import { motion } from "framer-motion";
import { FC } from 'react'
import Path from "../svg/Path/Path";
import Svg from "../svg/Svg/Svg";
import Button from "../../ui/Button/Button";
import './MenuToggle.css'

interface MenuToggleComponentProps {
    toggle?: (a: React.MouseEvent<HTMLButtonElement>) => void; // ! Типизация функций
    variants?: object;
    transition?: object;
    d?: string;
}

export const MenuToggle: FC<MenuToggleComponentProps> = ({ toggle }) => (
    <Button onClick={toggle}>
        <Svg viewBox='0 0 25 25'>
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </Svg>
    </Button>
)