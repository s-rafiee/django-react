import React, {useContext, useReducer} from "react";
import {initialState, reducer} from "./Reducer";

const AuthStateContext = React.createContext();
const AuthDispatcherContext = React.createContext();

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (!context) {
        throw Error('useAuthState must to be used with a AuthProvider');
    }
    return context;
}

export function useAuthDispatcher() {
    const context = useContext(AuthDispatcherContext);
    if (!context) {
        throw Error('useAuthDispatcher must to be used with a AuthProvider');
    }
    return context;
}

export function AuthProvider({children}) {
    const [state, dispath] = useReducer(reducer, initialState);
    return <>
        <AuthStateContext.Provider value={state}>
            <AuthDispatcherContext.Provider value={dispath}>
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider>
    </>;
}