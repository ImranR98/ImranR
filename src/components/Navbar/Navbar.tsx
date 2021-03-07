import './Navbar.css'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = () => {
    const [compact, setCompact] = useState(false)

    useScrollPosition(({ currPos }) => {
        let temp = currPos.y <= -3
        if (temp !== compact) setCompact(temp)
    }, [compact])

    return (
        <nav className={"navbar col1 flexRow" + (compact ? " compact" : "")}>
            <h1>Imran<span className="accent">R</span></h1>
            <div className="links noMobile">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#study">Study</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </div>
        </nav >
    );
};

export default Navbar;