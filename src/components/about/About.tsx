import './About.css'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import me from '../../assets/images/me.jpg'
import down from '../../assets/icons/down.svg'

const About = () => {
    const [compact, setCompact] = useState(false)

    useScrollPosition(({ currPos }) => {
        let temp = currPos.y <= -3
        if (temp !== compact) setCompact(temp)
    }, [compact])

    return (
        <div className={"about flexColumn centerFlex stdPadding" + (compact ? " compact" : "")}>
            <div className="flexRow centerFlex inner">
                <img alt="Imran Remtulla" src={me} className="me" />
                <div className="flexColumn stdPadding">
                    <p>Hi</p>
                    <h1>I'm <span className="accent">Imran Remtulla</span></h1>
                    <p className="typewriter">A Computer Science student.</p>
                </div>
            </div>
            <div className="down">
                <img alt="Scroll down" src={down} className={(compact ? " fadeOut" : "")} />
            </div>
        </div >
    );
};

export default About;