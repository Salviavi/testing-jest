import Input from "@/components/ui/Input";
import { render } from "@testing-library/react";

describe("Input Component", () => {
    it("should render Input not textarea", () => {
        const {container} = render(
        <Input value="" onChange={() => {}} placeholder="test" type="password" />
    )
        expect(container).toMatchSnapshot();
    })

    it("should render Input textarea", () => {
        const {container} = render(
        <Input value="" onChange={() => {}} placeholder="test" type="textarea" />
    )
        expect(container).toMatchSnapshot();
    })
})