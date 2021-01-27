import './About.css'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const About = () => {
    const [compact, setCompact] = useState(false)

    useScrollPosition(({ currPos }) => {
        let temp = currPos.y <= -3
        if (temp !== compact) setCompact(temp)
    }, [compact])

    return (
        <div className={"about flexColumn centerFlex stdPadding" + (compact ? " compact" : "")}>
            <div className="flexRow centerFlex inner">
                <img alt="Imran Remtulla" src="/images/me.jpg" className="me" />
                <div className="flexColumn stdPadding">
                    <p>Hi</p>
                    <h1>I'm <span className="accent">Imran Remtulla</span></h1>
                </div>
            </div>
        </div >
    );
};

export default About;