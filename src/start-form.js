var fileUpload = $('#invoiceDocumentUpload');
var fileUploadHelpBlock = $('.help-block', fileUpload.parent());

function flagFileUpload() {
  var hasFile = fileUpload.get(0).files.length > 0;
  fileUpload[hasFile ? 'removeClass' : 'addClass']('ng-invalid');
  fileUploadHelpBlock[hasFile ? 'removeClass' : 'addClass']('error');
  return hasFile;
}

fileUpload.on('change', function() {
  flagFileUpload();
});

camForm.on('submit', function(evt) {
  var hasFile = flagFileUpload();

  // prevent submit if user has not provided a file
  evt.submitPrevented = !hasFile;
});
