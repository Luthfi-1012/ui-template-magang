// Interactive Filtering and Search for Insights Hub
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.insights-filter-btn');
  const articleCards = document.querySelectorAll('.article-card');
  const searchInput = document.getElementById('insights-search-input');

  if (!articleCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function filterArticles() {
    articleCards.forEach(card => {
      const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
      const cardTitle = (card.querySelector('h3, h4')?.textContent || '').toLowerCase();
      const cardBadge = (card.querySelector('.article-badge')?.textContent || '').toLowerCase();

      const matchesCat = activeCategory === 'all' || cardCategory.includes(activeCategory);
      const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardBadge.includes(searchTerm);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category') || 'all';

      // Update button visual states
      filterButtons.forEach(b => {
        if (b.getAttribute('data-category') === activeCategory) {
          b.className = 'insights-filter-btn h-10 px-5 rounded-full font-label-md text-label-md shrink-0 transition-all bg-secondary-container text-on-secondary-fixed font-bold shadow-sm';
        } else {
          b.className = 'insights-filter-btn h-10 px-5 rounded-full font-label-md text-label-md shrink-0 transition-all bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container';
        }
      });

      filterArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterArticles();
    });
  }

  // Newsletter form submission handling
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      if (input && input.value) {
        const email = input.value;
        submitBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span> Berhasil Terdaftar!';
        submitBtn.classList.add('bg-[#E2F163]', 'text-[#141713]');
        input.value = '';
        setTimeout(() => {
          submitBtn.innerHTML = 'Langganan Wawasan';
          submitBtn.classList.remove('bg-[#E2F163]', 'text-[#141713]');
        }, 4000);
      }
    });
  }
});
