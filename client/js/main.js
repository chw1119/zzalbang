document.querySelector('button').onclick = function () {
    let query = document.querySelector('input').value;
    if (query) location.href = `/search?query=${query}`;
}
document.querySelector('input').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
            let query = document.querySelector('input').value;
            if (query) location.href = `/search?query=${query}`;
    }
});