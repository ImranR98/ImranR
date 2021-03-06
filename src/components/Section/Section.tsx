import './Section.css'

const Section = ({ id, title, children, className }: { id: string, title: string, children: any, className: string }) => {
    return (
        <div id={id} className={"section shadow2 " + className}>
            <h2>{title}</h2>
            <div className="grid">
                {children}
            </div>
        </div >
    );
};

export default Section;