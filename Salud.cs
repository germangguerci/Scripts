using UnityEngine;
using System.Collections;

public class Salud : MonoBehaviour {

	//Salud Actual
	float salud;
	//Salud maxima
	float saludmax = 100f;

	// Use this for initialization
	void Start () {
		salud = saludmax;
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnGUI(){
		GUI.Box (new Rect(100,30,180,25), "Salud");
	}
}
