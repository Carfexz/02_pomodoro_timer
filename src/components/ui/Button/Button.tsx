import React, { FC, ReactNode, HTMLAttributes } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { buttonAnimations } from '../../../const/animations/animations';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    text?: string,
    // onClick?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, // ! Не надо дублировать базовые слушатели событий в интерфейсы 
    isMenu?: string,
    isCross?: string,
    crossIcon?: true | false,
    menuIcon?: true | false,
}

const Button: FC<ButtonProps> = ({ children, text, onClick }) => {
    return (
        <motion.div
        // {...buttonAnimations}
        >
            <button className='button' onClick={onClick} >
                {text}
            </button>
        </motion.div>
    )
}

export default Button;