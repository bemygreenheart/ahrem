import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './hoc/Home';

import './css/App.css';

const App = () => {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>,
    </div>);
}

export default App;