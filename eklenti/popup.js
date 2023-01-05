document.addEventListener('DOMContentLoaded', () => {
    // Get the URL input and go button
    var urlInput = document.querySelector('#url-input');
    var goButton = document.querySelector('#EBS-button');

  // Navigate to the entered URL when the go button is clicked
  goButton.addEventListener('click', () => {
    var url = "https://www."+urlInput.value;
    chrome.tabs.create({ url });
  });
});
