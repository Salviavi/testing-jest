import HomeView from "@/pages";
import { render } from "@testing-library/react";

describe("Home Page", () => {
    it("should render home page", () => {
        const {container} = render(
        <HomeView></HomeView>
    )
        expect(container).toMatchSnapshot();
    })
})