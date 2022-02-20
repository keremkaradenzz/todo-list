import TodoInput from "../components/TodoInput";
import { render, screen } from "../helpers/test-utils";



describe("Input test", () => {
    test('Should not  render a input component', () => {
        render(<TodoInput  onChange={() => jest.fn()} />);
        const element = screen.getByTestId('inputComponent')
        expect(element).toBeUndefined();
    })
})



