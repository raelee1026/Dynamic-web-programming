window.onload = function() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('dark-background').classList.add('active');
    document.body.classList.add('unscrollable');
    
};

// Close popup functionality
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('dark-background').classList.remove('active');
    document.body.classList.remove('unscrollable');
});