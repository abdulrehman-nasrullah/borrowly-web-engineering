/**
 * ==========================================================================
 * BORROWLY - CORE CLIENT INTERACTIONS
 * Stack: Vanilla JavaScript (ES6)
 * Beginner-friendly, modular, and dependency-free.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initSearchAndFilter();
  initFaqAccordion();
});

/**
 * 1. Mobile Navigation Drawer Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);

    // Switch icon between menu and close
    const icon = toggleBtn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isOpen ? 'close' : 'menu';
    }
  });

  // Close mobile nav when clicking any link inside it
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = 'menu';
    });
  });
}

/**
 * 2. Search Panel & Quick-Pick Category Chips
 */
function initSearchAndFilter() {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const searchBtn = document.getElementById('searchBtn');
  const chips = document.querySelectorAll('.chip-btn');
  const itemCards = document.querySelectorAll('.item-card');
  const itemsContainer = document.getElementById('itemsGrid');
  const emptyState = document.getElementById('emptyState');

  // Helper to normalize strings for comparison
  const normalize = str => (str || '').toLowerCase().trim();

  // Filter function applied to current cards
  function applyFilters() {
    const query = normalize(searchInput ? searchInput.value : '');
    const selectedCategory = categorySelect ? categorySelect.value : 'all';

    let matchCount = 0;

    itemCards.forEach(card => {
      const cardTitle = normalize(card.querySelector('.item-name')?.textContent);
      const cardCategory = normalize(card.getAttribute('data-category'));
      const cardLocation = normalize(card.querySelector('.item-meta-row')?.textContent);

      // Category match
      const categoryMatches = (selectedCategory === 'all') || (cardCategory === selectedCategory);

      // Search query match (title, category, or location)
      const textMatches = !query || cardTitle.includes(query) || cardCategory.includes(query) || cardLocation.includes(query);

      if (categoryMatches && textMatches) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle Empty State if no cards match
    if (emptyState) {
      emptyState.style.display = matchCount === 0 ? 'flex' : 'none';
    }
  }

  // Chip click handler
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Update chip active classes
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const targetCategory = chip.getAttribute('data-category');

      // Synchronize with select dropdown
      if (categorySelect) {
        categorySelect.value = targetCategory;
      }

      applyFilters();
    });
  });

  // Select change handler
  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      const selectedVal = categorySelect.value;

      // Synchronize corresponding chip
      chips.forEach(c => {
        if (c.getAttribute('data-category') === selectedVal) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      applyFilters();
    });
  }

  // Live search input handler
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Search button click
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      applyFilters();

      // Scroll smoothly down to the results section
      const browseSection = document.getElementById('browse-section');
      if (browseSection) {
        browseSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Reset filter button in empty state
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'all';

      chips.forEach(c => {
        if (c.getAttribute('data-category') === 'all') {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      applyFilters();
    });
  }
}

/**
 * 3. FAQ Accordion Interaction
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const icon = item.querySelector('.faq-icon');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('active');

      // Close all other items for a clean accordion effect
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherIcon) otherIcon.textContent = 'add';
      });

      // Toggle this item
      if (!isCurrentlyOpen) {
        item.classList.add('active');
        if (icon) icon.textContent = 'remove';
      }
    });
  });
}
