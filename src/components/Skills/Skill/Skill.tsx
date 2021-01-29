import './Skill.css'
import { useRef, useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Skill = ({ image, alt }: { image: string, alt: string }) => {
    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 })
    const elementRef = useRef(null)

    useScrollPosition(
        ({ currPos }) => setElementPosition(currPos), [], elementRef as any
    )

    const isReasonablyVisible = (offset: number = 40) => ((elementPosition.y + offset) - Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) <= 0

    return (
        <div>
            <img ref={elementRef} alt={alt} src={image} className={"skill shadow" + (!isReasonablyVisible() ? " belowScroll" : "")}></img>
        </div>
    );
};

export default Skill;