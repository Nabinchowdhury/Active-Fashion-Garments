import React, { useState } from 'react';
import Chairman from '../../Modal/Chairman';

const Home = () => {
    const [chaimanShowed, setChairmanShowed] = useState(false)

    if (!chaimanShowed) {
        console.log("hi");
    }
    return (
        <div>
            <label htmlFor="chairmanModal" className="btn">open modal</label>
            <Chairman></Chairman>
        </div>
    );
};

export default Home;