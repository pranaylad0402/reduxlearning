import Head from 'next/head';

/*to be used only when working out of react component*/
import { dispatch, storeState } from '../redux/store';
//if you want to use state of store outside react component

import { setDarkThemeEnabled } from '../redux/actions';
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const darkThemeEnabled = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch()
  return (
    <div className="container" style={{ backgroundColor: darkThemeEnabled ? "black" : "white" }}>
      <button
        onClick={() => {
          dispatch({
            type: "SET_DARK_THEME", payload: {
              isEnabled: !darkThemeEnabled,
            }
          })
        }}>Click Me</button>

      <button
        onClick={() => {
          dispatch(
            setDarkThemeEnabled(!darkThemeEnabled)
          )
        }}>Click Me 2</button>
      {darkThemeEnabled}
    </div>
  )
}
