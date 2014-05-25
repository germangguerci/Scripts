#pragma strict
 
var walk : AudioClip;
var run : AudioClip;
 
var walkAudioSpeed : float = 0.4;
var runAudioSpeed : float = 0.2;
 
private var walkAudioTimer : float = 0.0;
private var runAudioTimer : float = 0.0;
 
var isWalking : boolean = false;
var isRunning : boolean = false;

private var chCtrl: CharacterController;
private var chMotor: CharacterMotor;
 
function Start()
{
    chCtrl = GetComponent(CharacterController);
    chMotor = GetComponent(CharacterMotor);
}
 
function Update()
{
    if ( chCtrl.isGrounded )
    {
        PlayFootsteps();
    }
    else
    {
        walkAudioTimer = 0.0;
        runAudioTimer = 0.0;
    }
}
 
function PlayFootsteps() {
    if ( Input.GetAxis( "Horizontal" ) || Input.GetAxis( "Vertical" ))
    {
		if (chMotor.movement.maxForwardSpeed==20)
		{
         // Running
         isWalking = false;
         isRunning = true;
       }
  
       else
       {
         // Walking
         isWalking = true;
         isRunning = false;
       }
    }
    else
    {
       // Stopped
       isWalking = false;
       isRunning = false;
    }
 
    // Play Audio
    if ( isWalking)
    {
       if ( audio.clip != walk )
       {
         audio.Stop();
         audio.clip = walk;
       }
       
       if ( walkAudioTimer > walkAudioSpeed )
       {
         audio.Stop();
         audio.Play();
         walkAudioTimer = 0.0;
       }
    }
    else if ( isRunning )
    {
       if ( audio.clip != run )
       {
         audio.Stop();
         audio.clip = run;
       }
 
       if ( runAudioTimer > runAudioSpeed )
       {
         audio.Stop();
         audio.Play();
         runAudioTimer = 0.0;
       }
    }
    else
    {
       audio.Stop();
    }
 
    // increment timers
    walkAudioTimer += Time.deltaTime;
    runAudioTimer += Time.deltaTime; 
    }