function cleanTitle(str) {
	str = str.substring(0,str.length - 4).replace(/\./g, " ");
	str = str.replace(/_/g," ");
	return str;
}


$('video').hide();
$( document ).ready(function() {
	$('.right-off-canvas-toggle').click();
	$( ".videoItem a" ).each(function( index ) {
	  $(this).text(cleanTitle($(this).text()));
	});
});


$('.videoItem').on('click',function() {
	$('.right-off-canvas-toggle').click();
	$('video').show();
	var vidSRC = $(this).attr('id').substring(5);
	var vidURL = '/media/' + vidSRC;
	console.log(vidURL);
	var video = document.getElementById('mainPlayer');
	video.pause();
	$('source').attr('src', vidURL);
	video.load();
    video.play();
    var vidTitle = cleanTitle(vidSRC);
    $('#videoPlayer h3').text(vidTitle);
});