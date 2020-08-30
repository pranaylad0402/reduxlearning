const setDarkThemeEnabled = (isEnabled) => {
    return {
        type: "SET_DARK_THEME", payload: {
            isEnabled
        }
    }
}
export { setDarkThemeEnabled };
