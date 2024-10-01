import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/container/Navbar";

describe("Navbar Component", () => {
    it("should render Navbar with login and sign up links when no token", () => {
       // simulasi/mock token
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

        const { container, getByText } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("Login")).toBeInTheDocument();
        expect(getByText("Sign Up")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it("should render Navbar with logout button when token exists", () => {
        // Mock localStorage untuk simulasi access_token
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('mock-token');

        const mockLogout = jest.fn();

        const { container, getByText } = render(
            <BrowserRouter>
                <Navbar onLogout={mockLogout} />
            </BrowserRouter>
        );

        expect(getByText("Logout")).toBeInTheDocument();
        fireEvent.click(getByText("Logout"));
        expect(mockLogout).toHaveBeenCalled();
        expect(container).toMatchSnapshot();
    });
});
