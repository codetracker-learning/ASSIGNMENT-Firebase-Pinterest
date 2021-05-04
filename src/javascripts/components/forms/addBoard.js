const addBoardForm = () => {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#formContainer').innerHTML += `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="boardTitle">Board Title</label>
        <input type="text" class="form-control" id="boardTitle" placeholder="Board Title" required>
      </div>
      <div class="form-group">
      <label for="boardImage">Image URL</label>
      <input type="url" class="form-control" id="boardImage" placeholder="Image URL" required>
    </div>
      <button type="submit" id="submit-board" class="btn">Create Board</button>
    </form>`;
};

export default addBoardForm;
