using UnityEngine;
using System.Collections;

public class Salud : MonoBehaviour {

	//Salud Actual
	float salud;
	//Salud maxima
	float saludmax = 100f;
	//¿Me estan atacando?
	bool bajoataque;
	//Regeneracion de vida por segundo
	float regsalud = 1.5f;

	// Use this for initialization
	void Start () {
		salud = saludmax;
		bajoataque = false; 

	}
	
	// Update is called once per frame
	void Update () {
		//Esta funcion es la encargada regenerar la salud mientras no esta bajo ataque
		Regeneracion ();

	}

	//Regeneracion de salud.
	void Regeneracion () {
		//Siempre y cuando no estemos bajo ataque, regeneraremos vida. Se deberia insertar un delay entre estados, (bajoataque y no) en el ataque.
		if (!bajoataque) {
			salud += Time.deltaTime * regsalud;
				}
		//La salud no sera mayor a la saludmaxima establecida.
		if (salud > saludmax) {
						salud = saludmax;
				}
		}
	//Muestra salud actual (Solo para vercion devolper, quitar en verciones de usuario)
	void OnGUI(){
		GUI.Box (new Rect(40,50,80,25), "Salud: " + salud);
	}

	//Nota: Aqui se deberia insertar las imagenes de daño o barra de salud. 
}
