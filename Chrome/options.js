console.log('Loaded');
// Saves options to chrome.storage.sync.
function save_options() {
  var columnCount = document.getElementById('columnCount').checked;
  var cardId = document.getElementById('cardId').checked;
  var labelName = document.getElementById('labelName').checked;

  chrome.storage.sync.set({
    columnCount: columnCount,
    cardId: cardId,
    labelName: labelName
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    columnCount: true,
    cardId: true,
    labelName: true
  }, function(items) {
    document.getElementById('columnCount').checked = items.columnCount;
    document.getElementById('cardId').checked = items.cardId;
    document.getElementById('labelName').checked = items.labelName;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
