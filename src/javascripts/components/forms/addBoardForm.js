const addBoardForm = () => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#board-title').innerHTML = `
    <div class="container">
      <form id="submit-board-form" class="mb-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="new-board-title" aria-describedby="boardTitle" placeholder="Title" required>
        </div>
        <div class="form-group">
          <label for="title">Image URL</label>
          <input type="URL" class="form-control" id="new-board-url" aria-describedby="url" placeholder="URL" required>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="favorite-board">
          <label class="form-check-label" for="favorite-board">Favorite</label>
        </div>
        <button type="submit" id="submit-new-board" class="btn btn-primary">Create Board</button>
      </form>
    </div>
  `;
};

export default addBoardForm;
