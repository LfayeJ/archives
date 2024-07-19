// assets/js/script.js
let posts = [];

// JSON 파일을 로드하여 posts 배열에 저장
fetch('{{ site.baseurl }}/posts.json')
    .then(response => response.json())
    .then(data => {
        posts = data;
    })
    .catch(error => console.error('Error loading posts:', error));

// 검색 폼 제출 이벤트 핸들러
document.getElementById('search_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 막음
    const query = document.getElementById('searchinput').value.toLowerCase();
    const resultsList = document.getElementById('results_list');
    resultsList.innerHTML = ''; // 기존 결과를 지움

    const results = posts.filter(post => post.content.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.url;
            a.textContent = `Result for "${query}": ${result.title}`;
            li.appendChild(a);
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        resultsList.appendChild(li);
    }

    document.getElementById('search_results').style.display = 'block';
});
