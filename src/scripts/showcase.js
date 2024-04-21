console.log('Hello, world! this is js');

const highlightedGames = document.querySelectorAll('.game-cover-wrapper');
console.log(highlightedGames);

highlightedGames.forEach(game => {
    game.addEventListener('click', async () => {
        console.log('Game clicked:', game);
        if (game.classList.contains('active')) {
            game.classList.remove('active');
        } else {
            game.classList.add('active');
        }
    });
});



