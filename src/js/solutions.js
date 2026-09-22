// Interactive Filtering and Search for Solution Explorer
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const categoryTabs = document.querySelectorAll('#category-tabs .category-btn');
  const solutionCards = document.querySelectorAll('.solution-card');
  const counterText = document.getElementById('counter-text');
  const quickChips = document.querySelectorAll('.quick-chip');
  const gridContainer = document.getElementById('solutions-grid') || document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');

  if (!solutionCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    let visibleCount = 0;

    solutionCards.forEach(card => {
      const cardCategory = (card.getAttribute('data-category') || card.getAttribute('data-cat') || '').toLowerCase();
      const cardTitle = (card.querySelector('h2, h3')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('p')?.textContent || '').toLowerCase();
      const cardBadge = (card.querySelector('.category-badge, [class*="rounded-full"]') .textContent || '').toLowerCase();
      const cardKeywords = (card.getAttribute('data-keywords') || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory.includes(currentCategory);
      const matchesSearch = !searchQuery || 
        cardTitle.includes(searchQuery) || 
        cardDesc.includes(searchQuery) || 
        cardBadge.includes(searchQuery) || 
        cardKeywords.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.classList.add('flex');
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    });

    // Update counter
    if (counterText) {
      counterText.textContent = `Menampilkan ${visibleCount} dari ${solutionCards.length} Solusi Terverifikasi`;
    }

    // Handle empty state
    let emptyState = document.getElementById('no-solutions-alert');
    if (visibleCount === 0) {
      if (!emptyState && gridContainer) {
        emptyState = document.createElement('div');
        emptyState.id = 'no-solutions-alert';
        emptyState.className = 'col-span-full py-16 px-6 text-center bg-surface-container-lowest rounded-3xl border border-outline-variant/40 flex flex-col items-center justify-center gap-4';
        emptyState.innerHTML = `
          <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline">
            <span class="material-symbols-outlined text-[28px]">search_off</span>
          </div>
          <div class="space-y-1">
            <h4 class="text-xl font-bold text-primary">Tidak Ada Solusi yang Sesuai</h4>
            <p class="text-on-surface-variant text-sm max-w-md">Tidak ada layanan yang cocok dengan kata kunci "${searchQuery}". Silakan coba kata kunci lain atau reset filter.</p>
          </div>
          <button id="reset-filter-btn" class="h-10 px-6 rounded-full bg-secondary-container text-on-secondary-fixed font-bold text-sm hover:bg-[#d6e64c] transition-all">
            Reset Semua Filter
          </button>
        `;
        gridContainer.appendChild(emptyState);

        emptyState.querySelector('#reset-filter-btn')?.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          searchQuery = '';
          currentCategory = 'all';
          updateTabStyles();
          filterCards();
        });
      } else if (emptyState) {
        emptyState.classList.remove('hidden');
      }
    } else if (emptyState) {
      emptyState.classList.add('hidden');
    }
  }

  function updateTabStyles() {
    categoryTabs.forEach(tab => {
      const tabCat = tab.getAttribute('data-category');
      if (tabCat === currentCategory) {
        tab.className = 'category-btn h-10 px-5 rounded-full font-label-md text-label-md shrink-0 transition-all bg-secondary-container text-on-secondary-fixed font-bold shadow-sm';
      } else {
        tab.className = 'category-btn h-10 px-5 rounded-full font-label-md text-label-md shrink-0 transition-all bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container';
      }
    });
  }

  // Tab click events
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.getAttribute('data-category') || 'all';
      updateTabStyles();
      filterCards();
    });
  });

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  // Quick chips
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-filter') || chip.textContent.trim();
      if (searchInput) {
        searchInput.value = term;
        searchQuery = term.toLowerCase();
        filterCards();
      }
    });
  });

  // Check URL query parameters (e.g. ?cat=qhse or ?q=iso)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const qParam = urlParams.get('q');
  if (catParam) {
    currentCategory = catParam;
    updateTabStyles();
  }
  if (qParam && searchInput) {
    searchInput.value = qParam;
    searchQuery = qParam.toLowerCase();
  }
  filterCards();
});
