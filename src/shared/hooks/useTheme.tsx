import { ThemeContext } from "../providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw Error("This component needs to be wrapped within the Provider")
    }

    return context;
}

export default useTheme;