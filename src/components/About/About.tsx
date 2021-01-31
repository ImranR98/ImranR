import './About.css'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import me from '../../assets/images/me.jpg'
import down from '../../assets/icons/down.svg'
import Typewriter from 'typewriter-effect';
import email from '../../assets/icons/email.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import medium from '../../assets/icons/medium.svg'

const About = () => {
    const [compact, setCompact] = useState(false)

    useScrollPosition(({ currPos }) => {
        let temp = currPos.y <= -3
        if (temp !== compact) setCompact(temp)
    }, [compact])

    return (
        <div id="about" className={"about flexColumn centerFlex stdPadding" + (compact ? " compact" : "")}>
            <div className="flexRow centerFlex inner">
                <img alt="Imran Remtulla" src={me} className="me shadow" />
                <div className="flexColumn intro">
                    <p>Hi</p>
                    <h1>I'm <span className="accent">Imran Remtulla</span></h1>
                    <Typewriter
                        onInit={(typewriter) => { }}
                        options={{
                            strings: [
                                'I\'m a Computer Science Student.',
                                'I\'m interested in Web and App development.',
                                'I\'m located in Toronto.'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 15
                        }} />
                    <div className="contact">
                        <a href="mailto:iremtulla15@gmail.com" target="_blank" rel="noreferrer"><img alt="Email" src={email} className="icon"></img></a>
                        <a href="https://github.com/ImranR98" target="_blank" rel="noreferrer"><img alt="GitHub" src={github} className="icon"></img></a>
                        <a href="https://linkedin.com/in/iremtulla" target="_blank" rel="noreferrer"><img alt="LinkedIn" src={linkedin} className="icon"></img></a>
                        <a href="https://medium.com/@imranr.dev" target="_blank" rel="noreferrer"><img alt="Medium" src={medium} className="icon"></img></a>
                    </div>
                </div>
            </div>
            <div className="down">
                <img alt="Scroll down" src={down} className={(compact ? " fadeOut" : " fadeIn")} />
            </div>
        </div >
    );
};

export default About;