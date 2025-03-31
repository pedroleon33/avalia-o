// Função para fechar uma janela de vídeo
function closeVideo(videoId) {
    const videoWindow = document.getElementById(videoId);
    videoWindow.style.display = 'none';
}

// Função de busca de vídeos
function filterVideos() {
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();
    let videoWindows = document.querySelectorAll('.video-window, .small-video');

    videoWindows.forEach(window => {
        let title = window.querySelector('.video-title').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            window.style.display = 'block'; // Exibe vídeos que combinam com a busca
        } else {
            window.style.display = 'none'; // Oculta vídeos que não combinam com a busca
        }
    });
}
