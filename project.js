// document.getElementById('searchButton').addEventListener('click', performSearch);

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('resultsContainer');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.innerHTML = '<div class="result-item">Please enter a search query.</div>';
        return;
    }

    // Example data to simulate search results
    const data = [
        'Mathematics',
        'Science',
        'History',
        'Geography',
        'Literature',
        'Physics',
        'Chemistry',
        'Biology'
    ];

    // Simulate search results
    const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="result-item">No results found.</div>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = result;
            resultsContainer.appendChild(resultItem);
        });
    }
}
