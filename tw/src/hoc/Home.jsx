import { useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';

const Home = () => {
    const [keyword, SetKeyword] = useState('');

    return (
        <div>
            <Header callback={SetKeyword} />
            <div className="container my-5">
                <List keyword={keyword} />
            </div>
        </div>
    );
}

export default Home;