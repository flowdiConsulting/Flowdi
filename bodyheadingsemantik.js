const listItems = document.querySelectorAll('.list-heading-semantik');
const bodyWrapper = document.querySelector('.body-heading-semantik');

function samakanTinggiHeading() {
  const headings = document.querySelectorAll('.heading-semantik');

  if (window.innerWidth > 767) {
    headings.forEach(h => h.style.height = 'auto');

    let maxHeight = 0;
    headings.forEach(h => {
      if (h.offsetHeight > maxHeight) {
        maxHeight = h.offsetHeight;
      }
    });

    headings.forEach(h => h.style.height = `${maxHeight}px`);
  } else {
    document.querySelectorAll('.heading-semantik').forEach(h => h.style.height = 'auto');
  }
}

listItems.forEach(item => {
  const heading = item.querySelector('.heading-semantik');

  heading.addEventListener('click', () => {
    const isAlreadyActive = item.classList.contains('active');

    // Tutup semua dulu
    listItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.heading-semantik').classList.remove('active');
    });

    if (!isAlreadyActive) {
      item.classList.add('active');
      heading.classList.add('active');

      const isiAktif = item.querySelector('.isi-heading-non-semantik');
      const tinggiIsi = isiAktif.scrollHeight;

      if (window.innerWidth > 767) {
        bodyWrapper.style.height = `${isiAktif.offsetTop + tinggiIsi + 50}px`;
        bodyWrapper.style.alignItems = 'flex-start';
      } else {
        bodyWrapper.style.height = 'auto';
      }

      // Tambahkan class global ke body
      document.body.classList.add('ada-active');
    } else {
      bodyWrapper.style.height = 'auto';

      if (window.innerWidth > 767) {
        bodyWrapper.style.alignItems = 'center';
      }

      // Hapus class global kalau semua tidak aktif
      document.body.classList.remove('ada-active');
    }

    samakanTinggiHeading();
  });
});

window.addEventListener('load', samakanTinggiHeading);
window.addEventListener('resize', samakanTinggiHeading);
