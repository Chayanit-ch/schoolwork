document.addEventListener("DOMContentLoaded",function(){
    UpdateTime()
    initSearchFunction()
})

function UpdateTime(){
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    const now = new Date()

    const date = now.toLocaleDateString('th-TH', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });

    const time = now.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    dateElement.textContent = date;
    timeElement.textContent = time;
}
setInterval(UpdateTime,1000)

function initSearchFunction() {
    const searchBox = document.querySelector('.searchbar');
    const searchInput = searchBox.querySelector('input[type="text"]');
    const searchButton = searchBox.querySelector('button');

    function doSearch() {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.item');

        products.forEach(product => {
            const title = product.querySelector('h1').textContent.toLowerCase();
            const title2 = product.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || title2.includes(query)) {
                product.style.opacity = '1';
                product.style.pointerEvents = 'auto';
                product.style.position = 'relative';
            } else {
                product.style.opacity = '0';
                product.style.pointerEvents = 'none';
                product.style.position = 'absolute';
            }
        });
    }

    searchButton.addEventListener('click', doSearch);

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            doSearch();
        }
    });
}