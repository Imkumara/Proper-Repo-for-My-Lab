import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectList from '../components/ProjectList';

const sampleProjects = [
  { id: 1, title: 'Weather App', description: 'Shows forecasts' },
  { id: 2, title: 'Recipe Finder', description: 'Search recipes' },
];

test('renders all projects initially', () => {
  render(<ProjectList projects={sampleProjects} />);
  expect(screen.getByText('Weather App')).toBeInTheDocument();
  expect(screen.getByText('Recipe Finder')).toBeInTheDocument();
});

test('filters projects based on search input', async () => {
  render(<ProjectList projects={sampleProjects} />);
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText(/search projects/i), 'Weather');

  expect(screen.getByText('Weather App')).toBeInTheDocument();
  expect(screen.queryByText('Recipe Finder')).not.toBeInTheDocument();
});

test('shows "No projects found" when search matches nothing', async () => {
  render(<ProjectList projects={sampleProjects} />);
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText(/search projects/i), 'zzz');

  expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
});