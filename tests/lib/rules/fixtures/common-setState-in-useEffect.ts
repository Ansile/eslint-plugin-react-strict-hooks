import {useEffect, useState} from 'react';

const component = () => {
    const [numState, setNum] = useState(0);

    useEffect(() => {
        setNum(numState + 1);
    }, [numState]);
}