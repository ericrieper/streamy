function cleanTitle(str) {
	str = str.substring(0,str.length - 4).replace(/\./g, " ");
	str = str.replace(/_/g," ");
	return str;
}


$('video').hide();
$( document ).ready(function() {
	$('.right-off-canvas-toggle').click();
	$( ".videoItem a" ).each(function( index ) {
		var icon;
		if ($(this).hasClass("video-mp4")){
			icon = '<i class="fi-video"></i>';
		}
		else {
			icon = '<i class="fi-download"></i>'
		}
		var newHtml = icon+cleanTitle($(this).text());
	  $(this).html(newHtml);
	});
});


$('.videoItem a').on('click',function(e) {
	var video = document.getElementById('mainPlayer');
	var vidSRC = $(this).attr('id').substring(5);
	var vidURL = '/media/' + vidSRC;
	var vidTitle = cleanTitle(vidSRC);

	if ($(this).hasClass("video-mp4")){

		console.log("Got an MP4!!");
		e.preventDefault();
		$('.right-off-canvas-toggle').click();
		$('video').show();
		$('#fileDownload').hide();
		console.log(vidURL);
		video.pause();
		$('source').attr('src', vidURL);
		video.load();

		$('#videoPlayer').fadeIn();

	    video.play();
	    $('#videoPlayer h3').text(vidTitle);
	}
	else if ($(this).hasClass("video-avi")){
		console.log("Got an AVI!!");
		video.pause();
		$('.right-off-canvas-toggle').click();
		$('#videoPlayer').fadeOut(function(){
			$('#videoPlayer').hide();
			var dlHTML = '<div class="dlSquare"><h3>This file cannot play in the browser</h3><a href="'+vidURL+'" download><i class="fi-download"></i></a><h4><a href="'+vidURL+'" download>Download '+vidTitle+'</a></div>';
			$('#fileDownload').html(dlHTML);
			$('#fileDownload').fadeIn();
		});

	}
});