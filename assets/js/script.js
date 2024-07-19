// script.js
document.getElementById('search_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 막음
    const query = document.getElementById('searchinput').value.toLowerCase();
    const resultsList = document.getElementById('results_list');
    resultsList.innerHTML = ''; // 기존 결과를 지움
    const contentElements = document.querySelectorAll('.primary-content *');
    let hasResults = false;

    // 기존 하이라이트 제거
    contentElements.forEach(element => {
        element.classList.remove('highlight');
    });

    // 검색어를 포함하는 요소 찾기
    contentElements.forEach(element => {
        if (element.innerText.toLowerCase().includes(query)) {
            hasResults = true;
            element.classList.add('highlight'); // 요소에 하이라이트 클래스 추가
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#`;
            a.textContent = `Result for "${query}": ${element.innerText.substring(0, 30)}...`;
            a.addEventListener('click', () => {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
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
