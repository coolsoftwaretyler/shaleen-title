var now = new Date();
var isoString = now.toISOString();
var currentYear = isoString.split('-')[0]
var mediaHits = document.getElementsByClassName("mediaHit");

for (i=0;i<mediaHits.length;i++) {
    var mediaHitYear = mediaHits[i].dataset.year;
    if (mediaHitYear < currentYear - 2 ) {
        mediaHits[i].style.display = 'none';
    }
}