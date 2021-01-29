import './Item.css'

const Item = ({ image, title, subtitle, children, BG, imageBG }: { image: string, title: string, subtitle: string, children: any, BG: string, imageBG: string }) => {


    return (
        <div className="item" style={{ backgroundColor: `#${BG}`}}>
            <div className="logo" style={{ backgroundColor: `#${imageBG}`}}>
                <img alt={title} src={image} />
            </div>
            <div className="data stdPadding">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                {children}
            </div>
        </div>
    );
};

export default Item;