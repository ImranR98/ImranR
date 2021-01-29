import './Item.css'

const Item = ({ image, title, subtitle, small, className }: { image: string, title: string, subtitle: string, small: string, className: string }) => {


    return (
        <div className={className + " item"}>
            <div className="logo">
                <img alt={title} src={image} />
            </div>
            <div className="data stdPadding">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <small>{small}</small>
            </div>
        </div>
    );
};

export default Item;