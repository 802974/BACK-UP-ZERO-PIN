// Document database with all your files
const documents = [
    // CDU Documents
    {
        id: 1,
        name: "REF-016-42 UltraflexPlus Pump Assy _ CDU.pdf",
        path: "CDU/REF-016-42 UltraflexPlus Pump Assy _ CDU.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.1 MB"
    },
    {
        id: 2,
        name: "REF-016-43 UltraflexPlus Level Switch Assy _CDU Drip Pan.pdf",
        path: "CDU/REF-016-43 UltraflexPlus Level Switch Assy _CDU Drip Pan.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "1.8 MB"
    },
    {
        id: 3,
        name: "REF-016-44 UltraflexPlus Level Switch Assy _CDU Reservoir.pdf",
        path: "CDU/REF-016-44 UltraflexPlus Level Switch Assy _CDU Reservoir.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "1.9 MB"
    },
    {
        id: 4,
        name: "REF-016-45 UltraflexPlus RTD Sensor Assy _ CDU HFE Supply Temp.pdf",
        path: "CDU/REF-016-45 UltraflexPlus RTD Sensor Assy _ CDU HFE Supply Temp.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.2 MB"
    },
    {
        id: 5,
        name: "REF-016-46 UltraflexPlus Thermocouple Assy _ CDU HFE Return Temp.pdf",
        path: "CDU/REF-016-46 UltraflexPlus Thermocouple Assy _ CDU HFE Return Temp.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.0 MB"
    },
    {
        id: 6,
        name: "REF-016-47 UltraflexPlus Flow control Valve _ CDU.pdf",
        path: "CDU/REF-016-47 UltraflexPlus Flow control Valve _ CDU.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "1.7 MB"
    },
    {
        id: 7,
        name: "REF-016-48 UltraflexPlus Flowmeter Assy_ CDU Water.pdf",
        path: "CDU/REF-016-48 UltraflexPlus Flowmeter Assy_ CDU Water.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.3 MB"
    },
    {
        id: 8,
        name: "REF-016-49 UltraflexPlus Belimo with No Valve.pdf",
        path: "CDU/REF-016-49 UltraflexPlus Belimo with No Valve.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "1.5 MB"
    },
    {
        id: 9,
        name: "REF-016-50 UltraflexPlus Belimo FRU.pdf",
        path: "CDU/REF-016-50 UltraflexPlus Belimo FRU.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "1.6 MB"
    },
    {
        id: 10,
        name: "REF-016-51 UltraflexPlus CDU Water Supply Assy - Part 1.pdf",
        path: "CDU/REF-016-51 UltraflexPlus CDU Water Supply Assy - Part 1.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "3.1 MB"
    },
    {
        id: 11,
        name: "REF-016-52 UltraflexPlus CDU Water Supply Assy - Part 2.pdf",
        path: "CDU/REF-016-52 UltraflexPlus CDU Water Supply Assy - Part 2.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.9 MB"
    },
    {
        id: 12,
        name: "REF-016-53 UltraflexPlus CDU Water Return Assy.pdf",
        path: "CDU/REF-016-53 UltraflexPlus CDU Water Return Assy.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 13,
        name: "REF-016-54 Ultraflex CDU HLA Assembly _ 660-825-00.pdf",
        path: "CDU/REF-016-54 Ultraflex CDU HLA Assembly _ 660-825-00.pdf",
        category: "CDU",
        slot: "",
        type: "PDF",
        size: "2.4 MB"
    },
    
    // TH 12 Documents (Test Head 12)
    {
        id: 14,
        name: "REF-016-21 _ Section 1 _ TH.pdf",
        path: "TH 12/REF-016-21 _ Section 1 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.8 MB"
    },
    {
        id: 15,
        name: "REF-016-22 _ Section 2 _ TH.pdf",
        path: "TH 12/REF-016-22 _ Section 2 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.6 MB"
    },
    {
        id: 16,
        name: "REF-016-22 _ Section 6 _ TH.pdf",
        path: "TH 12/REF-016-22 _ Section 6 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.5 MB"
    },
    {
        id: 17,
        name: "REF-016-23 _ Section 3 _ TH.pdf",
        path: "TH 12/REF-016-23 _ Section 3 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 18,
        name: "REF-016-24 _ Section 4 _ TH.pdf",
        path: "TH 12/REF-016-24 _ Section 4 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.4 MB"
    },
    {
        id: 19,
        name: "REF-016-25 _ Section 5 _ TH.pdf",
        path: "TH 12/REF-016-25 _ Section 5 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.3 MB"
    },
    {
        id: 20,
        name: "REF-016-27 _ Section 7 _ TH.pdf",
        path: "TH 12/REF-016-27 _ Section 7 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.6 MB"
    },
    {
        id: 21,
        name: "REF-016-28 _ Section 8 _ TH.pdf",
        path: "TH 12/REF-016-28 _ Section 8 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.5 MB"
    },
    {
        id: 22,
        name: "REF-016-29 _ Section 9 _ TH.pdf",
        path: "TH 12/REF-016-29 _ Section 9 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 23,
        name: "REF-016-30 _ Section 10 _ TH.pdf",
        path: "TH 12/REF-016-30 _ Section 10 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.4 MB"
    },
    {
        id: 24,
        name: "REF-016-31 _ Section 11 _ TH.pdf",
        path: "TH 12/REF-016-31 _ Section 11 _ TH.pdf",
        category: "TH12",
        slot: "12",
        type: "PDF",
        size: "2.8 MB"
    },
    
    // TH 24 Documents (Test Head 24)
    {
        id: 25,
        name: "REF-016-09 Section 1 _ TH.pdf",
        path: "TH 24/REF-016-09 Section 1 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.2 MB"
    },
    {
        id: 26,
        name: "REF-016-10 _ Section 2 _ TH.pdf",
        path: "TH 24/REF-016-10 _ Section 2 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.0 MB"
    },
    {
        id: 27,
        name: "REF-016-11 Section 3 _ TH.pdf",
        path: "TH 24/REF-016-11 Section 3 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.1 MB"
    },
    {
        id: 28,
        name: "REF-016-12 Section 4 _ TH.pdf",
        path: "TH 24/REF-016-12 Section 4 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "2.9 MB"
    },
    {
        id: 29,
        name: "REF-016-13 Section 5 _ TH.pdf",
        path: "TH 24/REF-016-13 Section 5 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.3 MB"
    },
    {
        id: 30,
        name: "REF-016-14 _ Section 6 _ TH.pdf",
        path: "TH 24/REF-016-14 _ Section 6 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "2.8 MB"
    },
    {
        id: 31,
        name: "REF-016-15 Section 7 _ TH.pdf",
        path: "TH 24/REF-016-15 _ Section 7 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.0 MB"
    },
    {
        id: 32,
        name: "REF-016-16 _ Section 8 _ TH.pdf",
        path: "TH 24/REF-016-16 _ Section 8 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 33,
        name: "REF-016-17 Section 9 _ TH.pdf",
        path: "TH 24/REF-016-17 Section 9 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.1 MB"
    },
    {
        id: 34,
        name: "REF-016-18 Section 10 _ TH.pdf",
        path: "TH 24/REF-016-18 Section 10 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "2.9 MB"
    },
    {
        id: 35,
        name: "REF-016-19 Section 11 _ TH.pdf",
        path: "TH 24/REF-016-19 Section 11 _ TH.pdf",
        category: "TH24",
        slot: "24",
        type: "PDF",
        size: "3.2 MB"
    },
    
    // SC 12 Documents (Support Cabinet 12)
    {
        id: 36,
        name: "REF-016-22 _ Section 4 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-22 _ Section 4 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.4 MB"
    },
    {
        id: 37,
        name: "REF-016-32 _ Section 1 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-32 _ Section 1 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 38,
        name: "REF-016-33 _ Section 2 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-33 _ Section 2 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.5 MB"
    },
    {
        id: 39,
        name: "REF-016-34 _ Section 3 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-34 _ Section 3 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.6 MB"
    },
    {
        id: 40,
        name: "REF-016-36 _ Section 5 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-36 _ Section 5 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.8 MB"
    },
    {
        id: 41,
        name: "REF-016-37 _ Section 6 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-37 _ Section 6 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.4 MB"
    },
    {
        id: 42,
        name: "REF-016-38 _ Section 7 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-38 _ Section 7 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.7 MB"
    },
    {
        id: 43,
        name: "REF-016-39 _ Section 8 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-39 _ Section 8 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.5 MB"
    },
    {
        id: 44,
        name: "REF-016-40 _ Section 9 _ SC.pdf",
        path: "SC 12 SLOT/REF-016-40 _ Section 9 _ SC.pdf",
        category: "SC12",
        slot: "12",
        type: "PDF",
        size: "2.9 MB"
    },
    
    // SC 24 Documents (Support Cabinet 24)
    {
        id: 45,
        name: "REF-016-01 _ Section 1 _ SC.pdf",
        path: "SC 24 SLOT/REF-016-01 _ Section 1 _ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "3.2 MB"
    },
    {
        id: 46,
        name: "REF-016-02 _ Section 2_ SC.pdf",
        path: "SC 24 SLOT/REF-016-02 _ Section 2_ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "3.0 MB"
    },
    {
        id: 47,
        name: "REF-016-03 _ Section 3_ SC.pdf",
        path: "SC 24 SLOT/REF-016-03 _ Section 3_ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "3.1 MB"
    },
    {
        id: 48,
        name: "REF-016-04 _ Section 4 _ SC.pdf",
        path: "SC 24 SLOT/REF-016-04 _ Section 4 _ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "2.9 MB"
    },
    {
        id: 49,
        name: "REF-016-05 _ Section 5_ SC.pdf",
        path: "SC 24 SLOT/REF-016-05 _ Section 5_ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "3.3 MB"
    },
    {
        id: 50,
        name: "REF-016-06 _ Section 6_ SC.pdf",
        path: "SC 24 SLOT/REF-016-06 _ Section 6_ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "2.8 MB"
    },
    {
        id: 51,
        name: "REF-016-07 _ Section 7 _ SC.pdf",
        path: "SC 24 SLOT/REF-016-07 _ Section 7 _ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "3.0 MB"
    },
    {
        id: 52,
        name: "REF-016-08 _ Section 8 _ SC.pdf",
        path: "SC 24 SLOT/REF-016-08 _ Section 8 _ SC.pdf",
        category: "SC24",
        slot: "24",
        type: "PDF",
        size: "2.7 MB"
    },
    
    // ADB 12 Documents
    {
        id: 55,
        name: "REF-016-55 _ 652-193-10 ADB Assembly.pdf",
        path: "ADB 12 SLOT/REF-016-55 _ 652-193-10 ADB Assembly.pdf",
        category: "ADB12",
        slot: "12",
        type: "PDF",
        size: "101.5 MB"
    },
    {
        id: 56,
        name: "REF-016-56 _ 634-418-01 ADB CIRCUIT BREAKER.pdf",
        path: "ADB 12 SLOT/REF-016-56 _ 634-418-01 ADB CIRCUIT BREAKER.pdf",
        category: "ADB12",
        slot: "12",
        type: "PDF",
        size: "1.6 MB"
    },
    
    // ADB 24 Documents
    {
        id: 57,
        name: "REF-016-56 _ 634-418-01 ADB CIRCUIT BREAKER.pdf",
        path: "ADB 24 SLOT/REF-016-56 _ 634-418-01 ADB CIRCUIT BREAKER.pdf",
        category: "ADB24",
        slot: "24",
        type: "PDF",
        size: "1.6 MB"
    },
    {
        id: 58,
        name: "REF-016-57 ADB 24 Slot Assembly _ 609-502-01.pdf",
        path: "ADB 24 SLOT/REF-016-57 ADB 24 Slot Assembly _ 609-502-01.pdf",
        category: "ADB24",
        slot: "24",
        type: "PDF",
        size: "71.1 MB"
    },
        
    // Cable Integration 12 Documents
    {
        id: 53,
        name: "REF-016-41 Cable Integration .pdf",
        path: "CABLE INTEG 12 SLOT/REF-016-41 Cable Integration .pdf",
        category: "CABLE12",
        slot: "12",
        type: "PDF",
        size: "2.1 MB"
    },
    
    // Cable Integration 24 Documents
    {
        id: 54,
        name: "REF-016-20 Cable Integration 24 slot.pdf",
        path: "CABLE INTEG 24 SLOT/REF-016-20 Cable Integration 24 slot.pdf",
        category: "CABLE24",
        slot: "24",
        type: "PDF",
        size: "2.5 MB"
    }
];

let filteredDocuments = [...documents];
let currentView = 'grid';
let currentCategory = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const clearFilters = document.getElementById('clearFilters');
const exportResults = document.getElementById('exportResults');
const resultsContainer = document.getElementById('resultsContainer');
const noResults = document.getElementById('noResults');
const loadingSpinner = document.getElementById('loadingSpinner');
const searchStatus = document.getElementById('searchStatus');
const themeToggle = document.getElementById('themeToggle');
const voiceSearchBtn = document.getElementById('voiceSearchBtn');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// Category count elements
const totalDocsMini = document.getElementById('totalDocsMini');
const filteredDocsMini = document.getElementById('filteredDocsMini');
const allCount = document.getElementById('allCount');
const cduCount = document.getElementById('cduCount');
const th12Count = document.getElementById('th12Count');
const th24Count = document.getElementById('th24Count');
const sc12Count = document.getElementById('sc12Count');
const sc24Count = document.getElementById('sc24Count');
const cable12Count = document.getElementById('cable12Count');
const cable24Count = document.getElementById('cable24Count');
const adb12Count = document.getElementById('adb12Count');
const adb24Count = document.getElementById('adb24Count');

// View toggle buttons
const viewBtns = document.querySelectorAll('.view-btn');
const categoryItems = document.querySelectorAll('.category-item');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    updateStats();
    renderDocuments(documents);
    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(performSearch, 300));
    searchBtn.addEventListener('click', performSearch);
    categoryFilter.addEventListener('change', performSearch);
    sortFilter.addEventListener('change', performSearch);
    clearFilters.addEventListener('click', clearAllFilters);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Category sidebar clicks
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
        });
    });
    
    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            setView(view);
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Export functionality
    exportResults.addEventListener('click', exportToCSV);
    
    // Voice search (placeholder)
    voiceSearchBtn.addEventListener('click', function() {
        alert('Voice search feature coming soon!');
    });
    
    // Keyboard shortcuts
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortFilter.value;
    
    showLoading();
    searchStatus.textContent = 'Searching...';
    
    setTimeout(() => {
        filteredDocuments = documents.filter(doc => {
            const matchesSearch = !searchTerm || 
                doc.name.toLowerCase().includes(searchTerm) ||
                doc.path.toLowerCase().includes(searchTerm) ||
                doc.category.toLowerCase().includes(searchTerm);
            
            const matchesCategory = !selectedCategory || doc.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        // Sort results
        sortDocuments(filteredDocuments, sortBy);
        
        hideLoading();
        renderDocuments(filteredDocuments);
        updateStats();
        
        if (searchTerm) {
            searchStatus.textContent = `Found ${filteredDocuments.length} results for "${searchTerm}"`;
        } else {
            searchStatus.textContent = `Showing ${filteredDocuments.length} documents`;
        }
    }, 300);
}

function sortDocuments(docs, sortBy) {
    switch(sortBy) {
        case 'name':
            docs.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            docs.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'category':
            docs.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'size':
            docs.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
            break;
    }
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update active state in sidebar
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });
    
    // Update filter dropdown
    categoryFilter.value = category;
    
    // Perform search
    performSearch();
}

function setView(view) {
    currentView = view;
    
    // Update active state
    viewBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Update container class
    resultsContainer.className = view === 'grid' ? 'results-grid' : 'results-list';
    
    // Re-render documents
    renderDocuments(filteredDocuments);
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Save preference
    localStorage.setItem('theme', newTheme);
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function exportToCSV() {
    let csv = 'Name,Category,Slot,Size,Path\n';
    
    filteredDocuments.forEach(doc => {
        csv += `"${doc.name}","${doc.category}","${doc.slot}","${doc.size}","${doc.path}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documents_export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function renderDocuments(docs) {
    if (docs.length === 0) {
        resultsContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    resultsContainer.innerHTML = docs.map(doc => `
        <div class="document-card" onclick="openDocument('${doc.path}')">
            <div class="document-header">
                <div class="document-icon">
                    <i class="fas fa-file-pdf"></i>
                </div>
                <div class="document-info">
                    <h3>${highlightSearchTerm(doc.name)}</h3>
                    <div class="document-path">${doc.path}</div>
                </div>
            </div>
            <div class="document-meta">
                <span class="meta-tag">${doc.category}</span>
                ${doc.slot ? `<span class="meta-tag">${doc.slot}</span>` : ''}
                <span class="meta-tag">${doc.type}</span>
                <span class="meta-tag">${doc.size}</span>
            </div>
            <div class="document-actions">
                <button class="action-btn open-btn" onclick="event.stopPropagation(); openDocument('${doc.path}')">
                    <i class="fas fa-external-link-alt"></i> Open
                </button>
                <button class="action-btn download-btn" onclick="event.stopPropagation(); downloadDocument('${doc.path}', '${doc.name}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    `).join('');
}

function highlightSearchTerm(text) {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function openDocument(path) {
    // Open file using relative path for web server
    try {
        window.open(path, '_blank');
    } catch (error) {
        alert(`Cannot open file: ${path}\n\nMake sure the PDF files are in the correct directory structure.`);
    }
}

function downloadDocument(path, fileName) {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = path;
    link.download = fileName;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    
    try {
        link.click();
    } catch (error) {
        alert(`Cannot download file: ${fileName}\n\nMake sure the PDF files are in the correct directory structure.`);
    }
    
    document.body.removeChild(link);
}

function clearAllFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    filteredDocuments = [...documents];
    renderDocuments(documents);
    updateStats();
}

function updateStats() {
    // Update mini stats in sidebar
    totalDocsMini.textContent = documents.length;
    filteredDocsMini.textContent = filteredDocuments.length;
    
    // Update category counts
    allCount.textContent = documents.length;
    cduCount.textContent = documents.filter(doc => doc.category === 'CDU').length;
    th12Count.textContent = documents.filter(doc => doc.category === 'TH12').length;
    th24Count.textContent = documents.filter(doc => doc.category === 'TH24').length;
    sc12Count.textContent = documents.filter(doc => doc.category === 'SC12').length;
    sc24Count.textContent = documents.filter(doc => doc.category === 'SC24').length;
    cable12Count.textContent = documents.filter(doc => doc.category === 'CABLE12').length;
    cable24Count.textContent = documents.filter(doc => doc.category === 'CABLE24').length;
    adb12Count.textContent = documents.filter(doc => doc.category === 'ADB12').length;
    adb24Count.textContent = documents.filter(doc => doc.category === 'ADB24').length;
}

function showLoading() {
    loadingSpinner.style.display = 'block';
    resultsContainer.style.opacity = '0.5';
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
    resultsContainer.style.opacity = '1';
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        clearAllFilters();
        searchInput.blur();
    }
});
