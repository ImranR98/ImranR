import './Home.css'
import About from '../About/About'
import Section from '../Section/Section'
import Item from '../Item/Item'
import manulife from '../../assets/images/manulife.png'
import seneca from '../../assets/images/seneca.png'
import ryerson from '../../assets/images/ryerson.png'

const Home = () => {
    return (
        <nav className="home">
            <About />
            <Section id="work" title="Work">
                <Item
                    image={manulife}
                    title="Manulife Financial"
                    subtitle="Visiting Platform Reliability Engineer - Co-op"
                    small="September - December 2019"
                    className="manulife"
                />
                <Item
                    image={seneca}
                    title="Seneca College"
                    subtitle="Programmer - Co-op"
                    small="January - April 2019"
                    className="seneca"
                />
            </Section>
            <Section id="study" title="Study">
                <Item
                    image={ryerson}
                    title="Ryerson University"
                    subtitle="Computer Science (BSc)"
                    small="September 2020 - December 2022"
                    className="ryerson"
                />
                <Item
                    image={seneca}
                    title="Seneca College"
                    subtitle="Computer Programming and Analysis"
                    small="September 2017 - December 2020"
                    className="seneca"
                />
            </Section>
        </nav>
    );
};

export default Home;