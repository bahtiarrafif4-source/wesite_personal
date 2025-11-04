document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.querySelector('.hearts-container');
    const startButton = document.getElementById('startButton');
    const message = document.getElementById('message');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3-6 seconds
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create hearts every 300ms
    setInterval(createHeart, 300);

    // Add click event to create extra hearts
    document.addEventListener('click', function() {
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 100);
        }
    });

    let clickCount = 0;

    // Start button event
    startButton.addEventListener('click', function() {
        clickCount++;
        if (clickCount < 3) {
            // Move the heart to a random position
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            const heart = startButton;
            const maxX = containerRect.width - heart.offsetWidth;
            const maxY = containerRect.height - heart.offsetHeight;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            heart.style.position = 'absolute';
            heart.style.left = randomX + 'px';
            heart.style.top = randomY + 'px';
        } else {
            // After third click, show name input
            document.querySelector('.start-section').style.display = 'none';
            document.getElementById('nameInput').style.display = 'block';
        }
    });

    // Submit button event
    document.getElementById('submitButton').addEventListener('click', function() {
        const name = document.getElementById('nameField').value.trim();
        if (name) {
            document.getElementById('userName').textContent = name;
            document.getElementById('nameInput').style.display = 'none';
            message.style.display = 'block';
            message.style.animation = 'slideIn 3s ease-in-out both';
        } else {
            alert('Silakan masukkan nama kamu!');
        }
    });
});
