import { Provider } from "react-redux";
import { createStore } from "redux";
import { render as rtlRender } from "@testing-library/react";
import reducer from "../redux/reducers/index";
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);    //takes css  or jquery style selector
};


//custom render that includes redux provider
const render = (ui, { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}) => {
    const Wrapper = ({ children }) => {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
// override render method
export { render }