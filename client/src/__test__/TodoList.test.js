import TodoList from "../components/TodoList";
import { render, screen } from "../helpers/test-utils";



describe("Todo List test", () => {
    test('Should render a todo List component', () => {
        render(<TodoList  />);
        const element = screen.getByTestId('todoListComponent')
        expect(element).toBeInTheDocument();
    })

    test('Should render a h3 title', () => {
        render(<TodoList  />);
        const element = screen.getByTestId('todoTitle')
        expect(element).toBeInTheDocument();
    })
})



