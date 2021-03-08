// addBoardForm.js

const addBoardForm = (userId, bookObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Board Title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="Description" required>
      </div>
      <div class="form-group">
        <label for="url">Url</label>
        <input type="url" class="form-control" id="board-url" placeholder="Url of Site">
      </div>
      <button type="submit" id="add-board" class="btn btn-success">Add Board</button>
    </form>`;
};

export default addBoardForm;
