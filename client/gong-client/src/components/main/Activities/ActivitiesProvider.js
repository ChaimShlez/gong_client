import { createContext, useState } from "react";

export const ActivitiesContext = createContext();
export const CategoriesContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [categories, setCategories] = useState([]);

    return (
        <ActivitiesContext.Provider value={{ activities, setActivities }}>
            <CategoriesContext.Provider value={{ categories, setCategories }}>
                {children}
            </CategoriesContext.Provider>
        </ActivitiesContext.Provider>
    );
};

