import { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  // local state — only this component cares about what's 
  // currently typed into the inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading (default form behavior)

    // simple validation — don't add empty projects
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    onAddProject({ title, description });

    // clear the form after adding
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddProjectForm;