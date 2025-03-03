let secretNumber = null;
let attempts = 0;

// Haal het geheime nummer uit getal.json
fetch('getal.json')
    .then(response => response.json())
    .then(data => {
        secretNumber = data.secretNumber;
    })
    .catch(error => console.log("Fout bij laden JSON:", error));

function checkGuess() {
    let guessInput = document.getElementById("guess");
    let guess = parseInt(guessInput.value);
    let feedback = document.getElementById("feedback");
    attempts++;

    if (secretNumber === null) {
        feedback.textContent = "Er is nog geen nummer ingesteld. Ga terug naar de andere pagina!";
        feedback.className = "text-danger lead";
        return;
    }

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Voer een geldig getal in tussen 1 en 100!";
        feedback.className = "text-danger lead";
        guessInput.value = "";
        return;
    }

    if (guess < secretNumber) {
        feedback.textContent = "Te laag! Probeer opnieuw.";
        feedback.className = "text-warning lead";
    } else if (guess > secretNumber) {
        feedback.textContent = "Te hoog! Probeer opnieuw.";
        feedback.className = "text-warning lead";
    } else {
	//stop();
	//document.getElementById("display").textContent = "0.00";
	//alert();
	
	document.getElementById("display").style.display="none";
	

	var tijd=document.getElementById("display").textContent;
	
	
	
        feedback.textContent = `🎉 Goed geraden! Het nummer was ${secretNumber}. 
		Je deed er ${attempts} pogingen over. 
		Je deed er ${tijd} seconden over`;
        feedback.className = "text-success lead";
        document.getElementById("reset").style.display="block";
        document.getElementById("guess").style.display="none";
        document.getElementById("knop").style.display="none";
		
    }
}
