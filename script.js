document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const word = document.getElementById('searchInput').value;
    fetchDefinition(word);
});

async function fetchDefinition(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        displayDefinition(data[0]);
    } catch (error) {
        console.error('Error fetching definition:', error);
    }
}

function displayDefinition(wordData) {
    const definitionElement = document.getElementById('definition');
    definitionElement.innerHTML = `
        <h2>${wordData.word}</h2>
        <p>${wordData.meanings[0].definitions[0].definition}</p>
    `;
}
