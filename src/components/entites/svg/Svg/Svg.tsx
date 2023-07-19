import { HTMLAttributes, ReactNode, FC } from 'react'
import './Svg.css'

interface SvgProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    viewBox: string;
}

const Svg: FC<SvgProps> = ({ viewBox, children }) => {
    return (
        <svg className='svg' viewBox={viewBox}>
            {children}
        </svg>
    )
}

export default Svg;
