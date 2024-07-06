document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var searchButton = document.getElementById("searchButton");

    searchInput.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) { // Enter 키가 눌렸을 때
            searchFunction();
        }
    });

    searchButton.addEventListener("click", function() {
        searchFunction();
    });
});

function searchFunction() {
    var query = document.getElementById("searchInput").value;
    
    // AJAX 요청으로 검색 결과 가져오기
    fetch('/search?q=' + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data); // 검색 결과를 표시하는 함수 호출
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}

function displaySearchResults(results) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // 결과를 비우고 다시 채우기

    if (results.length > 0) {
        var resultsList = document.createElement('ul');
        results.forEach(function(result) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = result.link;
            link.textContent = result.title;

            var snippet = document.createElement('p');
            snippet.textContent = result.snippet;

            listItem.appendChild(link);
            listItem.appendChild(snippet);
            resultsList.appendChild(listItem);
        });
        resultsContainer.appendChild(resultsList);
    } else {
        resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
    }
}
