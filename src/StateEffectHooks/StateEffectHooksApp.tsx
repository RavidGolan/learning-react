// App.tsx
import { useState, useEffect } from 'react';

export default function StateEffectHooksApp() {
    // useState creates a reactive local variable
    const [count, setCount] = useState(0);

    // useState for storing fetched data
    const [user, setUser] = useState<{ name: string, age: number }>({name:'', age: 1});

    // useEffect runs after the component renders — good for data fetching
    useEffect(() => {
        const fetchUser = async () => {
            // Simulate a network request delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // setUser({ name: 'Alice' });
        };

        fetchUser();
    }, []); // Run once on mount

    function changeUser() {
        /*setUser(prevState => {
            prevState.name = 'Alice'; return prevState;});*/
        setUser(prev => ({ ...prev, name: 'Alice' }));
    }

    function changeAge() {
        setUser(prevState => {
            prevState.age = 1; return prevState;});
    }

    return (
        <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
            <h1>React useState + useEffect Demo</h1>

            <h2>👋 Hello, {user.name !== '' ? user.name : 'loading...'}</h2>
            <h2> Age, {user.age !== 0 ? user.age : 'loading...'}</h2>

            <p>🧮 Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>➕ Increment</button>
            <button onClick={changeUser}>Change User</button>
            <button onClick={changeAge}>Change Age</button>
        </div>
    );
}
