document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('q');
    
    if (query) {
        document.title = '검색 결과 - ' + query + ' - {{ site.title }}';
        search(query);
    }
});

function search(query) {
    var resultsContainer = document.getElementById("searchResults");
    // 여기에 실제 검색 로직을 추가합니다. 예시:
    var results = [
        { title: "Example Result 1", link: "/result1", snippet: "This is an example snippet for result 1." },
        { title: "Example Result 2", link: "/result2", snippet: "This is an example snippet for result 2." },
    ];

    resultsContainer.innerHTML = "<h2>'" + query + "'에 대한 검색 결과</h2>";

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
        resultsContainer.innerHTML += "<p>검색 결과가 없습니다.</p>";
    }
}