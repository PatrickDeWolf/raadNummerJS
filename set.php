<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kies een nummer</title>
    	<!-- Bootstrap 3 CSS -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="./css/stijl.css">
</head>
<body>





<div id="game-container" class="container">

	<a href="index.php" class="btn btn-link pull-left"><span class="glyphicon glyphicon-menu-left"></span></a>
	
	<button class="btn btn-primary pull-right" STYLE='margin:3px;' onclick='fillRandomNumber()'>
	<span class="glyphicon glyphicon-refresh"></span> Random</button>
 
    <h2 class="text-primary">Speler 1: Kies een Nummer</h2>

    <div class="form-group">
        <input type="number" id="chosenNumber" class="form-control input-lg" placeholder="Voer een nummer in (1-100)" min="1" max="100">
    </div>

    <button class="btn btn-success btn-lg btn-block" onclick="saveNumber()">Opslaan</button>
    <p id="message" class="text-info lead" style="margin-top: 20px;"></p>

    <a href="raad.html" class="btn btn-link">Ga naar Raad het Nummer</a>
	
</div>





<!-- Bootstrap 3 JS BIBLIOTHEEK-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- eigen code in JS map. Deze stuurt het getal naar update.php dat in de getal.json het getal opschrijft-->
<script src="./JS/set.js"></script>

<script>
function fillRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    document.getElementById('chosenNumber').value = randomNumber;
}
</script>


</body>
</html>
