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
        <nav className={"navbar flexRow" + (compact ? " compact" : "")}>
            <h1>Imran<span className="accent">R</span></h1>
            <div className="links">
                <a href="#about">About</a>
                <a href="#about">Work</a>
                <a href="#about">Study</a>
                <a href="#about">Projects</a>
                <a href="#about">Skills</a>
            </div>
        </nav >
    );
};

export default Navbar;