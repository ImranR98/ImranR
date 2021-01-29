import './Section.css'

const Section = ({ id, title, children }: { id: string, title: string, children: any }) => {
    return (
        <div id={id} className="section">
            <h2>{title}</h2>
            <div className="grid">
                {children}
            </div>
        </div >
    );
};

export default Section;