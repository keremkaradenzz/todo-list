import TodoItems from "../components/TodoItems";
import { render, screen } from "../helpers/test-utils";



describe("Todo Items test", () => {
    test('Should render a todo items component', () => {
        render(<TodoItems todos={[]} onChange={() => jest.fn()} onDelete={() => jest.fn()} onCheck={() => jest.fn()} />);
        const element = screen.getByTestId('todoItemComponent')
        expect(element).toBeInTheDocument();
    })
})



