const Item = ({ link }) => {
    return (
        <div className="tw-item my-2 text-center">
            <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </div>
    );
}

export default Item;