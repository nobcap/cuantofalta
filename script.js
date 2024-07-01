document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('progressBar');
    const progressMessage = document.getElementById('progressMessage');

    const targetDate = new Date('September 9, 2024 00:00:00').getTime();
    const startDate = new Date('June 24, 2024 00:00:00').getTime();
    const totalDays = (targetDate - startDate) / (1000 * 60 * 60 * 24);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        const progress = ((totalDays - days) / totalDays) * 100;
        progressBar.style.width = `${progress}%`;

        if (days > 60) {
            progressBar.style.backgroundColor = 'red';
            progressMessage.textContent = "A comprar muuucho vino";
        } else if (days <= 60 && days > 2) {
            progressBar.style.backgroundColor = 'orange';
            progressMessage.textContent = "Falta todavía...dale con el vino";
        } else if (days <= 2) {
            progressBar.style.backgroundColor = 'green';
            progressMessage.textContent = "Enhorabuena! Hemos llegado al final!";
        }

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "¡Ha llegado el día!";
            progressMessage.textContent = "¡Ha llegado el día!";
            progressBar.style.width = '100%';
            progressBar.style.backgroundColor = 'green';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
