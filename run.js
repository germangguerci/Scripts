var walkSpeed : float = 7; //Maxima velocidad al caminar
var runSpeed : float = 20; //Maxima velocidad al correr.
var maxStamina : float = 15; //resistencia maxima.
var regstamina : float = 0.5; //regeneracion de stamina por segundo (Mientras no se corre)
var stamina : float; //Resistencia actual del personaje.

//Este script funciona en conjunto con el CharacterMotor.js (script de movimiento de unity)

private var charactermotor : CharacterMotor; // charactermotor es una variable de tipo CharacterMotor (Nombre de script de movimiento de unity)

function Start () {
charactermotor = GetComponent(CharacterMotor); 
stamina = 15;
}

function Update () {
//Cambios de velocidad.
	var speed = walkSpeed;
	if (charactermotor.grounded && Input.GetButton("Run") && stamina > 0.0f){
		if (stamina >= 1){ //Este if, es para que apenas terminemos de correr, no podamos correr de vuelta a tramos. Sino que tenemos que esperar.
			speed = runSpeed;
		} 
		//Reduccion de stamina (Resistencia)
		if (stamina >= 0.0f)
		stamina -= Time.deltaTime;
	}
	else {
	// regeneracion de stamina
		if (stamina <= maxStamina){
			stamina += regstamina*Time.deltaTime;
		}
	}
	charactermotor.movement.maxForwardSpeed = speed; // Se cambia la maxima velocidad (La llamamos desde el script character motor)
	
	
}
//Muestra la estamina (Solo para testing)
function OnGUI() {
	GUI.Box(Rect(100,25,90,30), "Stamina: "+ stamina );
}