const addBoardForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">Board Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Board Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>`;
};

export default addBoardForm;
