document.addEventListener('DOMContentLoaded', function() {
    const letsGoBtn = document.getElementById('lets-go-btn');
    if (letsGoBtn) {
        letsGoBtn.addEventListener('click', function() {
            document.getElementById('greeting').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
        });
    }
});