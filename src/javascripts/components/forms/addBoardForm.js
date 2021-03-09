const addBoardForm = () => {
  document.querySelector('#app').innerHTML = `
    <div id="user-container" class="row justify-content-center"></div>`;

  document.querySelector('#user-container').innerHTML = `
    <form id="board-form" class="my-4">
      <div class="form-group">
        <label for="board-title">Board Title</label>
        <input type="text" class="form-control" id="board-title" placeholder="Board Title" required>
      </div>
      <div class="form-group">
        <label for="board-image">Board Image</label>
        <input type="text" class="form-control" id="board-image" placeholder="Board Url" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>`;
};

export default addBoardForm;
