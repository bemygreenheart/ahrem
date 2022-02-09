import { useState } from "react";

const Search = ({ callback }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(keyword);
    }

    console.log(keyword);

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input value={keyword} onChange={handleChange} className="form-control me-2 tw-search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
    );
}

export default Search;