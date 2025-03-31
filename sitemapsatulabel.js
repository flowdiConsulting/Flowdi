/* sitemap satu label by penaindigo.com */

var numposts = 100;
var standardstyling = true;

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle;
    var posturl;

    if (i >= json.feed.entry.length) break; // Pastikan tidak melebihi jumlah entri

    if (entry && entry.title && entry.title.$t) { // Pengecekan apakah entry dan title ada
      posttitle = entry.title.$t;

      for (var k = 0; k < entry.link.length; k++){
        if (entry.link[k].rel == 'alternate'){
          posturl = entry.link[k].href;
          break;
        }
      }

      posttitle = posttitle.link(posturl);
      if (standardstyling) document.write('<li>');

      document.write(posttitle);

      if (standardstyling) document.write('</li>');
    } else {
      // Tambahkan logika ini untuk melihat entri mana yang bermasalah (opsional)
      console.warn("Entri tidak memiliki properti 'title' atau struktur yang diharapkan:", entry);
    }
  }
}

function finished(){}
