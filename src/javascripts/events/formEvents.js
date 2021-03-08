// formEvents.js

const formEvents = (userId) => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    // const firebaseKey = e.target.id.split('--')[1];
    if (e.target.id.includes('update-pin')) {
      console.warn(`${userId}: 'UPDATE-PIN'`);
    }
  });
};

export default formEvents;
