import {useEffect, useState} from 'react';

const useSomeCustomHook = () => {
    const [numState, setNum] = useState(0);

    return {
        add1: () => setNum((num) => num + 1),
        numState,
    };
}
const component = () => {
    const {add1, numState} = useSomeCustomHook();

    useEffect(() => {
        add1();
    }, [numState]);
}