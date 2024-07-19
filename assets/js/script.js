// script.js
document.getElementById('search_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 막음
    const query = document.getElementById('searchinput').value.toLowerCase();
    const resultsList = document.getElementById('results_list');
    resultsList.innerHTML = ''; // 기존 결과를 지움
    const contentElements = document.querySelectorAll('.primary-content *');

    let hasResults = false;
    contentElements.forEach(element => {
        if (element.innerText.toLowerCase().includes(query)) {
            hasResults = true;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${element.id}`; // 해당 요소의 ID를 링크로 사용
            a.textContent = `Result for "${query}": ${element.innerText.substring(0, 30)}...`;
            li.appendChild(a);
            resultsList.appendChild(li);
        }
    });

    if (!hasResults) {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        resultsList.appendChild(li);
    }

    document.getElementById('search_results').style.display = 'block';
});
