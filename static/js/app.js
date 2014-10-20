$('.videoItem').on('click',function() {
	$('.right-off-canvas-toggle').click();
	var vidSRC = $(this).attr('id').substring(5);
	var vidURL = '/media/' + vidSRC;
	console.log(vidURL);

	var video = document.getElementById('mainPlayer');
	video.pause();
	$('source').attr('src', vidURL);
	video.load();
    video.play();

    var vidTitle = vidSRC.substring(0,vidSRC.length - 4).replace(/\./g, " ");
    $('#videoPlayer h3').text(vidTitle);


});