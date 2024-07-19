// script.js
document.getElementById('search_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 막음
    const query = document.getElementById('searchinput').value.toLowerCase();
    const content = document.querySelector('.main-content').innerText.toLowerCase();
    const resultsList = document.getElementById('results_list');
    resultsList.innerHTML = ''; // 기존 결과를 지움

    if (content.includes(query)) {
        const regex = new RegExp(query, 'gi');
        const matches = content.match(regex);
        matches.forEach(match => {
            const li = document.createElement('li');
            li.textContent = match;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        resultsList.appendChild(li);
    }

    document.getElementById('search_results').style.display = 'block';
});
