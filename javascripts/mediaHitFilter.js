var now = new Date();
var isoString = now.toISOString();
var currentYear = isoString.split('-')[0]
var mediaHits = document.getElementsByClassName("mediaHit");

for (i=0;i<mediaHits.length;i++) {
    var mediaHitDate = new Date(mediaHits[i].dataset.date).toISOString()
    var mediaHitYear = mediaHitDate.split('-')[0];
    if (mediaHitYear < currentYear - 1 ) {
        mediaHits[i].style.display = 'none';
    }
}