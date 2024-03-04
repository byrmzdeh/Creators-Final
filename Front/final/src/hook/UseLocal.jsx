import { useEffect, useState } from 'react';

const UseLocal = (key, initialVal = '') => {
    // Retrieve initial value from localStorage or use the provided initialVal
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialVal;
    const [value, setValue] = useState(storedValue);

    useEffect(() => {
        // Update local storage when the value changes
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default UseLocal;
