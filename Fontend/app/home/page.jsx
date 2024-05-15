"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('data.json')
            .then(res => setUser(res.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(user);
    return (
        <div className="grid grid-cols-4 h-screen justify-center mx-10 gap-4">
            <div className="col-span-1 bg-gray-500">left</div>
            <div className="col-span-2 grid grid-cols-2 bg-gray-600">
                <h2>User: {user.length}</h2>
                {/* You can map over 'user' here and render each post */}
            </div>
            <div className="col-span-1 bg-gray-500"></div>
        </div>
    );
};

export default Home;
