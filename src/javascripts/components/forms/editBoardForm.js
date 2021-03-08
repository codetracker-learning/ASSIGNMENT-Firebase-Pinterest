// editBoardForm.js

const editBoardForm = (userId, boardObj) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" 
          placeholder="Enter Board Title" value=${boardObj.title}>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" 
          value="${boardObj.description}" required>
      </div>
      <button type="submit" id="add-board" class="btn btn-success">Add Board</button>
    </form>`;
};

export default editBoardForm;
