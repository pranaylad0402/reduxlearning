const INITIAL_STATE = {
    darkTheme: false,
}

const themeReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    // const { isEnabled } = payload;
    switch (type) {
        case "SET_DARK_THEME":
            return { ...INITIAL_STATE, darkTheme: payload.isEnabled };


        default:
            return { ...INITIAL_STATE };

    }
}
export default themeReducer;