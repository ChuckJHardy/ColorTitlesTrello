function save_options() {
  var columnCount = document.getElementById('columnCount').checked;
  var cardId = document.getElementById('cardId').checked;
  var labelName = document.getElementById('labelName').checked;

  chrome.storage.sync.set({
    columnCount: columnCount,
    cardId: cardId,
    labelName: labelName
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    columnCount: false,
    cardId: false,
    labelName: true
  }, function(items) {
    document.getElementById('columnCount').checked = items.columnCount;
    document.getElementById('cardId').checked = items.cardId;
    document.getElementById('labelName').checked = items.labelName;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
