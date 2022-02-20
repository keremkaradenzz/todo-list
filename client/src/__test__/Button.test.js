import TodoButton from "../components/Button";
import { render, screen } from "../helpers/test-utils";



describe("Button test", () => {

    test('Should render a button component', () => {

        render(<TodoButton title="title" onClick={() => jest.fn()} />);
        const element = screen.getByText(/title/i);
        expect(element).toBeInTheDocument();
    })
})



