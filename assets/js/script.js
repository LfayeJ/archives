// script.js
document.getElementById('search_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 막음
    const query = document.getElementById('searchinput').value;

    // 검색 결과를 가져오는 가상의 함수 호출 (여기서 AJAX 요청 등을 사용할 수 있음)
    displaySearchResults(query);
});

function displaySearchResults(query) {
    // 여기서는 가상의 검색 결과를 사용
    const results = [
        `Result for "${query}" 1`,
        `Result for "${query}" 2`,
        `Result for "${query}" 3`
    ];

    const resultsList = document.getElementById('results_list');
    resultsList.innerHTML = ''; // 기존 결과를 지움

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });

    document.getElementById('search_results').style.display = 'block';
}
