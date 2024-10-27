import { createContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    return (
        <ActivitiesContext.Provider value={{ activities, setActivities }}>
            {children}
        </ActivitiesContext.Provider>
    );
};
