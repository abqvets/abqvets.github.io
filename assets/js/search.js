class SiteSearch {
  constructor() {
    this.searchInput = document.getElementById('site-search-input');
    this.searchDropdown = document.getElementById('site-search-dropdown');
    this.searchResultsContainer = document.getElementById('site-search-results');
    this.searchPageLink = document.getElementById('site-search-page-link');
    this.debounceTimer = null;
    this.pagefind = null;
    
    if (this.searchInput) {
      this.init();
    }
  }

  async init() {
    this.searchInput.addEventListener('input', (e) => this.handleInput(e));
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = this.searchInput.value.trim();
        if (query.length >= 2) {
          this.search(query);
        }
      }
    });
    document.getElementById('search-icon-btn')?.addEventListener('click', () => {
      const query = this.searchInput.value.trim();
      if (query.length >= 2) {
        this.search(query);
      } else if (query.length > 0) {
        this.search(query);
      } else {
        window.location.href = '/search/';
      }
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-search-container')) {
        this.hideDropdown();
      }
    });
    
    await this.loadPagefind();
  }

  async loadPagefind() {
    try {
      this.pagefind = await import('/pagefind/pagefind.js');
    } catch (e) {
      console.warn('Pagefind not available (needs build)');
    }
  }

  handleInput(e) {
    const query = e.target.value.trim();
    
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    if (query.length < 2) {
      this.hideDropdown();
      return;
    }
    
    this.debounceTimer = setTimeout(() => {
      this.search(query);
    }, 300);
  }

  async search(query) {
    if (!this.pagefind) {
      await this.loadPagefind();
    }
    
    if (!this.pagefind) {
      return;
    }
    
    try {
      const results = await this.pagefind.search(query, { limit: 5 });
      this.renderResults(results, query);
    } catch (e) {
      console.error('Search error:', e);
    }
  }

  async renderResults(results, query) {
    if (results.results.length === 0) {
      this.searchResultsContainer.innerHTML = `
        <div class="dropdown-item text-muted">No results found</div>
      `;
      this.searchPageLink.classList.add('d-none');
    } else {
      const html = await Promise.all(
        results.results.slice(0, 5).map(async (result) => {
          const data = await result.data();
          return `
            <a href="${data.url}" class="dropdown-item py-2">
              <div class="fw-semibold">${data.meta.title}</div>
              ${data.excerpt ? `<small class="text-muted text-truncate d-block">${data.excerpt}</small>` : ''}
            </a>
          `;
        })
      );
      
      this.searchResultsContainer.innerHTML = html.join('');
      
      this.searchPageLink.href = `/search/?q=${encodeURIComponent(query)}`;
      this.searchPageLink.classList.remove('d-none');
    }
    
    this.showDropdown();
  }

  showDropdown() {
    this.searchDropdown?.classList.add('show');
  }

  hideDropdown() {
    this.searchDropdown?.classList.remove('show');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SiteSearch();
});
