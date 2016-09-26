console.log("Sanity Check: JS is working!");
var allCampsites = [];
var template;

$(document).ready(function(){

var	$campsitesList = $('#campsiteTarget');

var source = $('#campsite-template').html();
    template = Handlebars.compile(source);


$.ajax({
	method: 'GET',
	url: '/api/campsites/',
	success: handleSuccess,
	error: handleError,
});

  $('#newCampsiteForm').on('submit', function(e) {
    e.preventDefault();
	$.ajax({
	method: 'POST',
	url: '/api/campsites',
	data: $(this).serialize(),
	success: newCampsiteSuccess,
	error: newCampsiteError,
	});
});

$('#campsiteTarget').on('click', '.deleteBtn', function() {
	$.ajax({
		method: 'DELETE',
		url: '/api/campsites/' +$(this).attr('data-id'),
		success: deleteSuccess,
		error: deleteError
	});
  });

});
function render () {
 
  $('#campsiteTarget').empty();
 
  var campsitesHtml = template({ campsites: allCampsites})
  $('#campsiteTarget').append(campsitesHtml);
};

function handleSuccess(json) {
  allCampsites = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#campsiteTarget').text('Failed to load campsites, is the server working?');
}

function newCampsiteSuccess(json) {
  $('#newCampsiteForm input').val('');
  allCampsites.push(json);
  render();
}

function newCampsiteError() {
	console.log('well shit')
}

function deleteSuccess(json) {
  var campsite = json;
  console.log(json);
  var campsiteId = campsite._id;

  // find the book with the correct ID and remove it from our array
  for(var i = 0; i < allCampsites.length; i++) {
    if(allCampsites[i]._id === campsiteId) {
      allCampsites.splice(i, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteError() {
	console.log('god dammit')
}












