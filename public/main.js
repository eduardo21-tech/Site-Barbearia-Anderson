const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !expanded);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.classList.remove('is-open');
    });
  });
}

const footer = document.querySelector('.site-footer');
const floatingWhatsApp = document.querySelector('.whatsapp-float');

if (footer && floatingWhatsApp) {
  const setFooterOverlapState = (isFooterVisible) => {
    floatingWhatsApp.classList.toggle('is-footer-visible', isFooterVisible);
  };

  if ('IntersectionObserver' in window) {
    const footerObserver = new IntersectionObserver(([entry]) => {
      setFooterOverlapState(entry.isIntersecting);
    });
    footerObserver.observe(footer);
  } else {
    const updateFooterOverlap = () => {
      const footerBounds = footer.getBoundingClientRect();
      setFooterOverlapState(footerBounds.top < window.innerHeight && footerBounds.bottom > 0);
    };
    window.addEventListener('scroll', updateFooterOverlap, { passive: true });
    window.addEventListener('resize', updateFooterOverlap);
    updateFooterOverlap();
  }
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
