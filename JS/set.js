function saveNumber() {
    let number = parseInt(document.getElementById("chosenNumber").value);
    let message = document.getElementById("message");

    if (isNaN(number) || number < 1 || number > 100) {
        message.textContent = "Voer een geldig nummer in tussen 1 en 100!";
        message.className = "text-danger lead";
        return;
    }

    // JSON opslaan via de server (AJAX verzoek)
    fetch('update.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secretNumber: number })
    })
    .then(response => response.json())
    .then(data => {
        message.textContent = "Nummer opgeslagen! Ga nu naar de andere pagina.";
        message.className = "text-success lead";
    })
    .catch(error => {
        message.textContent = "Er is een fout opgetreden!";
        message.className = "text-danger lead";
    });
}
