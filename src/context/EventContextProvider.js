import React, { useState, useEffect, createContext } from 'react';

export const EventContext = createContext();

const EventContextProvider = props => {
    const [clicked, setClicked] = useState({});

    function toggleComponent(e, target){
        let component = target || e.target.dataset.target || '';
        if(e && e !== undefined){
            e.preventDefault();
        }
        console.log('target: ', component, clicked);
        setClicked({ ...clicked, [component]: !clicked[component] });
    }

    return(
        <EventContext.Provider
            value={{
                clicked,
                toggleComponent
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider;