import { useState, useEffect } from 'react';
import Item from './Item';
import api from '../utils/api';

const List = ({ keyword }) => {
    const [result, setResult] = useState([]);
    useEffect(() => {
        console.log(keyword);
        const fetchLinks = async () => {
            const res = await api.get('/search', { params: { keyword } });
            setResult(res.data.result);
            return res.data.result;
        }
        if (keyword.replace(/\s/g, '')) {
            fetchLinks(keyword);
        }
    }, [keyword]);

    const renderElements = () => {
        return (
            <div>
                <h2 className='text-center my-3'>Related Twitter Results</h2>
                <div className='tw-list'>
                    {result.map(link => <Item link={link} />)}
                </div>
            </div>
        );
    }

    const renderEmpty = () => {
        return <div className='my-5 text-center display-3 text-muted'>
            Nothing to show
        </div>;
    }

    return result && result.length > 0 ? renderElements() : renderEmpty();
}

export default List;