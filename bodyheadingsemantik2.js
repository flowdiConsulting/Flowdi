<script>
  const listItemsSemantik2 = document.querySelectorAll('.list-heading-semantik-2');
  const bodyWrapperSemantik2 = document.querySelector('.body-heading-semantik-2');

  function samakanTinggiHeadingSemantik2() {
    const headingsSemantik2 = document.querySelectorAll('.heading-semantik-2');

    if (window.innerWidth > 767) {
      headingsSemantik2.forEach(h => h.style.height = 'auto');

      let maxHeightSemantik2 = 0;
      headingsSemantik2.forEach(h => {
        if (h.offsetHeight > maxHeightSemantik2) {
          maxHeightSemantik2 = h.offsetHeight;
        }
      });

      headingsSemantik2.forEach(h => h.style.height = `${maxHeightSemantik2}px`);
    } else {
      document.querySelectorAll('.heading-semantik-2').forEach(h => h.style.height = 'auto');
    }
  }

  listItemsSemantik2.forEach(item => {
    const heading = item.querySelector('.heading-semantik-2');

    heading.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active-2');

      // Close all first
      listItemsSemantik2.forEach(i => {
        i.classList.remove('active-2');
        i.querySelector('.heading-semantik-2').classList.remove('active-2');
      });

      if (!isAlreadyActive) {
        item.classList.add('active-2');
        heading.classList.add('active-2');

        const isiAktif = item.querySelector('.isi-heading-non-semantik-2');
        const tinggiIsi = isiAktif.scrollHeight;

        if (window.innerWidth > 767) {
          bodyWrapperSemantik2.style.height = `${isiAktif.offsetTop + tinggiIsi + 50}px`;
          bodyWrapperSemantik2.style.alignItems = 'flex-start';
        } else {
          bodyWrapperSemantik2.style.height = 'auto';
        }

        // Add global class to body
        document.body.classList.add('ada-active-2');
      } else {
        bodyWrapperSemantik2.style.height = 'auto';

        if (window.innerWidth > 767) {
          bodyWrapperSemantik2.style.alignItems = 'center';
        }

        // Remove global class if none are active
        document.body.classList.remove('ada-active-2');
      }

      samakanTinggiHeadingSemantik2();
    });
  });

  window.addEventListener('load', samakanTinggiHeadingSemantik2);
  window.addEventListener('resize', samakanTinggiHeadingSemantik2);
</script>
