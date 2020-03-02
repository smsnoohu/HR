import React, { useRef } from 'react';

const useFocus = () => {
    const refElement = useRef(null);
    const setFocus = () => {
        refElement.current && refElement.current.focus()
    };
    return [refElement, setFocus];
}

export default useFocus;