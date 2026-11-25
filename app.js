(function () {
  var root = document.documentElement;
  var langBtn = document.getElementById('lang-toggle');
  var themeBtn = document.getElementById('theme-toggle');

  function applyLang(lang) {
    var safeLang = lang === 'en' ? 'en' : 'zh';
    root.setAttribute('data-lang', safeLang);
    root.lang = safeLang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
      el.textContent = el.getAttribute(safeLang === 'en' ? 'data-en' : 'data-zh');
    });
    if (langBtn) {
      langBtn.textContent = safeLang === 'en' ? '中文' : 'EN';
    }
    try {
      localStorage.setItem('saudade-lang', safeLang);
    } catch (e) {}
  }

  function applyTheme(theme) {
    var safeTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', safeTheme);
    try {
      localStorage.setItem('saudade-theme', safeTheme);
    } catch (e) {}
  }

  applyLang(root.getAttribute('data-lang') || 'zh');

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'en' ? 'zh' : 'en';
      applyLang(next);
    });
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  // Highlight active section in sticky navigation
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.main-nav a'));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  function updateActiveNav() {
    var scrollPos = window.scrollY + 120;
    var activeId = sections.length ? sections[0].id : '';
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollPos) {
        activeId = sections[i].id;
      }
    }
    navLinks.forEach(function (link) {
      var isMatch = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('active', isMatch);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('load', updateActiveNav);
})();
