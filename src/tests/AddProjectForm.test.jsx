import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddProjectForm from '../components/AddProjectForm';

test('renders title and description inputs', () => {
  render(<AddProjectForm onAddProject={() => {}} />);
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
});

test('calls onAddProject with form data on submit', async () => {
  const mockAdd = jest.fn();
  render(<AddProjectForm onAddProject={mockAdd} />);

  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/title/i), 'My Project');
  await user.type(screen.getByLabelText(/description/i), 'A cool project');
  await user.click(screen.getByRole('button', { name: /add/i }));

  expect(mockAdd).toHaveBeenCalledWith({
    title: 'My Project',
    description: 'A cool project',
  });
});