import './Item.css'
import { useRef, useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Item = ({ image, title, subtitle, children, imageBG }: { image: string, title: string, subtitle: string, children: any, imageBG: string }) => {
    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 })
    const elementRef = useRef(null)

    useScrollPosition(
        ({ currPos }) => setElementPosition(currPos), [], elementRef as any
    )

    const isReasonablyVisible = (offset: number = 30) => ((elementPosition.y + offset)- Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) <= 0

    return (
        <div ref={elementRef} className={"item " + (!isReasonablyVisible() ? " belowScroll" : "")}>
            <div className="logo shadow" style={{ backgroundColor: `#${imageBG}` }}>
                <img alt={title} src={image}/>
            </div>
            <div className="data">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div className="gap"></div>
                {children}
            </div>
        </div>
    );
};

export default Item;