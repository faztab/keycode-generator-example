document.addEventListener('keydown', function(event) {
    const keycodeInfo = document.querySelector('.keycode-info');
    const code = event.code.toString ();
    const key = event.key.toString();
    const which = event.which.toString();

    keycodeInfo.style.display = 'block';
    keycodeInfo.querySelector('.code').textContent = code;
    keycodeInfo.querySelector('.key').textContent = key;
    keycodeInfo.querySelector('.which').textContent = which;
});