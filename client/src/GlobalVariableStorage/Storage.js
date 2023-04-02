import { useState, useReducer } from "react";
import Context from './Context'


function VariableProvider({ children }) {
    const [theme, setTheme] = useState('false')
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDetailSidebar, setShowDetailSidebar] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const setFlagShowDrawer = () => {
        setShowDrawer(!showDrawer)
    }

    const setFlagDetailSidebar = () => {
        setShowDetailSidebar(!showDetailSidebar)
    }

    const setFalseShowDrawer = () => {
        setShowDrawer(false)
    }

    const setFalseDetailSidebar = () => {
        setShowDetailSidebar(false)
    }

    const setTrueShowDetailSidebar = () => {
        setShowDetailSidebar(true)
    }

    const handleChangeMode = () => {
        theme === true ? setTheme(false) : setTheme(true)
    }

    const handleSearchValue = (value) => {
        setSearchValue(value)
    }

    const value = {
        'mode': theme,
        'drawerstatus': showDrawer,
        'sidebarstatus': showDetailSidebar,
        'searchvalue': searchValue,
        handleSearchValue,
        handleChangeMode,
        setFlagShowDrawer,
        setFlagDetailSidebar,
        setFalseShowDrawer,
        setFalseDetailSidebar,
        setTrueShowDetailSidebar
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default VariableProvider
