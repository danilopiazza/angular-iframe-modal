document.getElementById('success').addEventListener('click', (event) => {
  closeModal('success', 'Hooray! 😄️');
});

document.getElementById('failure').addEventListener('click', (event) => {
  closeModal('failure', 'Oh, no! 😧️');
});

function closeModal(type, message) {
  window.parent.app.notifications.show({
    type: type,
    message: message,
    title: 'From Inline Frame'
  });
}
