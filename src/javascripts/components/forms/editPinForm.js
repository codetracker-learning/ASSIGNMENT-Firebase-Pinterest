import selectBoard from './selectBoard';

const editPinForm = (pinObject, uid) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.pin_title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.pin_image}">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="description" placeholder="pin Price" value="${pinObject.pin_description}" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-success">Update pin</button>
    </form>`;

  selectBoard(pinObject, uid);
};

export default editPinForm;
