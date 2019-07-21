(function () {
	var form = document.getElementById('html-file-form');
  var input = document.getElementById('html-file-input');
  var filesDisplay = document.getElementById('selected-files');
  var submitButton = document.getElementById('form-submit-button');

	var postAddress = 'https://192.168.1.101:8080/';

  var filesArray = [];
  var renderfilesArray, sendFile;

  form.addEventListener('submit', function (evnt) {
  	evnt.preventDefault();
    filesArray.forEach(function (file) {
    	sendFile(file);
    });
  });

  input.addEventListener('change', function (evnt) {
 		filesArray = [];
  	for (var i = 0; i < input.files.length; i++) {
    	filesArray.push(input.files[i]);
    }
    renderfilesArray();
  });

	submitButton.textContent='POST to '+postAddress;

  renderfilesArray = function () {
  	filesDisplay.innerHTML = '';
    filesArray.forEach(function (file, index) {
    	var fileDisplayEl = document.createElement('p');
      fileDisplayEl.innerHTML = (index + 1) + ': ' + file.name;
      filesDisplay.appendChild(fileDisplayEl);
    });
  };

  sendFile = function (file) {
  	var formData = new FormData();
    var request = new XMLHttpRequest();

    formData.set('file', file);
    request.open("POST", postAddress);
    request.send(formData);
  };
})();
