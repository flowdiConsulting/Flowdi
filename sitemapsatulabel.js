function tampilkanMateri(json) {
  var daftarMateri = document.getElementById("daftar-materi");
  if (daftarMateri) {
    for (var i = 0; i < json.feed.entry.length; i++) {
      var entry = json.feed.entry[i];
      var posttitle;
      var posturl;

      if (entry && entry.title && entry.title.$t) {
        posttitle = entry.title.$t;
        for (var k = 0; k < entry.link.length; k++) {
          if (entry.link[k].rel === 'alternate') {
            posturl = entry.link[k].href;
            break;
          }
        }
        var listItem = document.createElement('li');
        var linkItem = document.createElement('a');
        linkItem.href = posturl;
        linkItem.textContent = posttitle;
        listItem.appendChild(linkItem);
        daftarMateri.appendChild(listItem);
      } else {
        console.warn("Entri tidak memiliki properti 'title' atau struktur yang diharapkan:", entry);
      }
    }
  } else {
    console.error("Elemen dengan ID 'daftar-materi' tidak ditemukan.");
  }
}
