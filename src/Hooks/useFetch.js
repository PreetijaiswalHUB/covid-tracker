import { useState, useEffect } from 'react';

const useFetch = (initialUrl, initialValue) => {

    const [data, setData] = useState(initialValue);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        })();
    }, [url]);

    return [data, setUrl];
};
export default useFetch;