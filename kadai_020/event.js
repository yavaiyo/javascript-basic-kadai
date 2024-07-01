const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', () => {
    const childList = document.createElement('li');
    Text.textContent = 'ボタンをクリックしました';
});