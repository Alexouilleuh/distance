// Ce script peut être utilisé pour afficher dynamiquement le message récupéré via une API ou AJAX
window.onload = function() {
    fetch('http://ton-site-php.com/back-end/get-message.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        });
};
