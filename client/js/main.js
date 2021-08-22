document.querySelector('button').onclick =  () => {
    let query = document.querySelector('input').value;
    if (query) location.href = `/search?query=${query}`;
}
document.querySelector('input').addEventListener('keydown', event => {
    if (event.keyCode === 13) {
            let query = document.querySelector('input').value;
            if (query) location.href = `/search?query=${query}`;
    }
});