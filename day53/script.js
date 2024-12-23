// Get elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
