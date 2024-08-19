import { useEffect } from 'react';
import './App.css';
import client from './client';

function App() {
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await client.get('/pokemon-species/1');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAPI();
    }, []);

    return <></>;
}

export default App;
