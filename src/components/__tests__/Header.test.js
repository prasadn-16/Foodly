import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
test("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //querying
    const loginButton = screen.getByRole("button", { name: "Login" });
    //Assertion
    expect(loginButton).toBeInTheDocument();

})
it('Should change Login button to Logout on CLick', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //querying
    const loginButton = screen.getByRole("button", { name: "Login" });
    //assertion
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument()


});
