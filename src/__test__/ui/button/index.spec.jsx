import Button from "@/components/ui/Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button Component", () => {
    it("should render button", () => {
        const {container} = render(
        <Button type="primary">Hello World</Button>
    )
        expect(container).toMatchSnapshot();
    })

    it("should handle click button", () => {
        const {container} = render(
        <Button type="primary" onClick={() => {}}>Hello World</Button>
    )
        fireEvent.click(container.firstChild);
        expect(container).toMatchSnapshot();
    })
})