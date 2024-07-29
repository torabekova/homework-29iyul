
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const addNameButton = document.getElementById('addNameButton');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const nameList = document.getElementById('nameList');
    const resultsList = document.getElementById('resultsList');

    let names = [];

    addNameButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            updateNameList();
            nameInput.value = '';
        }
    });

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm));
        updateSearchResults(filteredNames);
    });

    function updateNameList() {
        nameList.innerHTML = '';
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    }

    function updateSearchResults(results) {
        resultsList.innerHTML = '';
        if (results.length > 0) {
            results.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                resultsList.appendChild(li);
            });
        } else {
            resultsList.innerHTML = '<li>No results found</li>';
        }
    }
});