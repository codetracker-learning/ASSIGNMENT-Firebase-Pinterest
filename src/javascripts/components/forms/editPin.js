import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="pinTitle">Pin Description</label>
        <input type="text" class="form-control" id="editPinTitle" aria-describedby="pinDescription" placeholder="Enter Description" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="editPinImage" placeholder="Image URL" required value="${pinObject.image}">
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="submit-update-pin--${pinObject.firebaseKey}" class="btn">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
