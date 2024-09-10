import * as React from 'react';

const PotionAddition = ({ onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    onAdd({ title });
    event.currentTarget.reset();
  };
  return (
    <form className="d-flex mt-4" onSubmit={handleSubmit} id="potionAddForm">
      <input
        className="form-control me-2"
        type="text"
        placeholder="New potion"
        name="title"
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default PotionAddition;
