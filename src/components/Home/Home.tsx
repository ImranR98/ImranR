import './Home.css'
import About from '../About/About'
import Section from '../Section/Section'
import Item from '../Item/Item'
import manulife from '../../assets/images/manulife.png'
import seneca from '../../assets/images/seneca.png'
import ryerson from '../../assets/images/ryerson.png'
import andika from '../../assets/images/andika.png'
import tinystock from '../../assets/images/tinystock.png'
import tuma from '../../assets/images/tuma.png'

const Home = () => {
    return (
        <nav>
            <About />
            <Section id="work" title="Work">
                <Item
                    image={manulife}
                    title="Manulife Financial"
                    subtitle="Visiting Platform Reliability Engineer - Co-op"
                    BG="0b331b"
                    imageBG="1fa755"

                >
                    <small>September - December 2019</small>
                </Item>
                <Item
                    image={seneca}
                    title="Seneca College"
                    subtitle="Programmer - Co-op"
                    BG="470400"
                    imageBG="d60c00"
                >
                    <small>January - April 2019</small>
                </Item>
            </Section>
            <Section id="study" title="Study">
                <Item
                    image={ryerson}
                    title="Ryerson University"
                    subtitle="Computer Science (BSc)"
                    BG="001a35"
                    imageBG="004c9a"
                >
                    <small>September 2020 - December 2022</small>
                </Item>
                <Item
                    image={seneca}
                    title="Seneca College"
                    subtitle="Computer Programming and Analysis"
                    BG="470400"
                    imageBG="d60c00"
                >
                    <small>September 2017 - December 2020</small>
                </Item>
            </Section>
            <Section id="projects" title="Projects">
                <Item
                    image={andika}
                    title="Andika"
                    subtitle="Note taking Web App"
                    BG="111111"
                    imageBG="000000"
                >
                    <small><a href="https://github.com/ImranR98/andika" target="_blank" rel="noreferrer">GitHub</a></small>
                </Item>
                <Item
                    image={tinystock}
                    title="TinyStock"
                    subtitle="Minimal stock keeping Electron App"
                    BG="46091d"
                    imageBG="f21e65"
                >
                    <small><a href="https://github.com/ImranR98/TinyStock" target="_blank" rel="noreferrer">GitHub</a></small>
                </Item>
                <Item
                    image={tuma}
                    title="Tuma"
                    subtitle="Flutter App to Upload via SFTP"
                    BG="320d0b"
                    imageBG="f44236"
                >
                    <small><a href="https://github.com/ImranR98/Tuma" target="_blank" rel="noreferrer">GitHub</a></small>
                </Item>
            </Section>
        </nav>
    );
};

export default Home;