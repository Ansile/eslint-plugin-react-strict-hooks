import {useCallback, useEffect, useState} from 'react';

const component = () => {
    const [numState, setNum] = useState(0);

    useEffect(() => {
    }, [numState]);

    useCallback(() => {
        setNum(numState + 1);
    }, []);
}