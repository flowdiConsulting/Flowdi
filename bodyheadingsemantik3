const listItemsSemantik3 = document.querySelectorAll('.list-heading-semantik-3');
const bodyWrapperSemantik3 = document.querySelector('.body-heading-semantik-3');

function samakanTinggiHeadingSemantik3() {
  const headingsSemantik3 = document.querySelectorAll('.heading-semantik-3');

  if (window.innerWidth > 767) {
    headingsSemantik3.forEach(h => h.style.height = 'auto');

    let maxHeightSemantik3 = 0;
    headingsSemantik3.forEach(h => {
      if (h.offsetHeight > maxHeightSemantik3) {
        maxHeightSemantik3 = h.offsetHeight;
      }
    });

    headingsSemantik3.forEach(h => h.style.height = `${maxHeightSemantik3}px`);
  } else {
    document.querySelectorAll('.heading-semantik-3').forEach(h => h.style.height = 'auto');
  }
}

listItemsSemantik3.forEach(item => {
  const heading = item.querySelector('.heading-semantik-3');

  heading.addEventListener('click', () => {
    const isAlreadyActive = item.classList.contains('active-3');

    // Close all first
    listItemsSemantik3.forEach(i => {
      i.classList.remove('active-3');
      i.querySelector('.heading-semantik-3').classList.remove('active-3');
    });

    if (!isAlreadyActive) {
      item.classList.add('active-3');
      heading.classList.add('active-3');

      const isiAktif = item.querySelector('.isi-heading-non-semantik-3');
      const tinggiIsi = isiAktif.scrollHeight;

      if (window.innerWidth > 767) {
        bodyWrapperSemantik3.style.height = `${isiAktif.offsetTop + tinggiIsi + 50}px`;
        bodyWrapperSemantik3.style.alignItems = 'flex-start';
      } else {
        bodyWrapperSemantik3.style.height = 'auto';
      }

      // Add global class to body
      document.body.classList.add('ada-active-3');
    } else {
      bodyWrapperSemantik3.style.height = 'auto';

      if (window.innerWidth > 767) {
        bodyWrapperSemantik3.style.alignItems = 'center';
      }

      // Remove global class if none are active
      document.body.classList.remove('ada-active-3');
    }

    samakanTinggiHeadingSemantik3();
  });
});

window.addEventListener('load', samakanTinggiHeadingSemantik3);
window.addEventListener('resize', samakanTinggiHeadingSemantik3);
