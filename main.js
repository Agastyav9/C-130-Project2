song1 = "";
song2 = "";
LeftWristX = "0";
LeftWristY = "0";
RightWristX = "0";
RightWristY = "0";
Song1_Status = "";
scoreLeftWrist = "0";
scoreRightWrist = "0";
Song2_Status = "";


function preload()
{
    song1 = loadSound("op1.mp3");
    song2 = loadSound("op2.mp3");
    
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(600,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
   image(video, 0, 0, 550, 500);

    if (scoreLeftWrist > 0.2) 
    {
       if (Song1_Status == "true")
       {
           song1.stop();
           song2.play();
           Song2_Status = "true";
       

       }

       else 
       {
       song1.play();
       Song1_Status = "true";
       }
    }
    
    

    

    


    if (scoreRightWrist > 0.2) 
    {
       if (Song2_Status == "true")
       {
           song2.stop();
           song1.play();
           Song1_Status = "true"
       

       }

       else 
    {
        song2.play()
        Song2_Status = "true";
    }

    }

    
   
   
    
   
}

  
    
    
   


function modelLoaded()
{
    console.log('Posenet is Initialized');
}  

function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[8].score;
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x
        LeftWristY = results[0].pose.leftWrist.y   
        RightWristX = results[0].pose.rightWrist.x
        RightWristY = results[0].pose.rightWrist.y
        console.log("LeftWristX = " + LeftWristX +"LeftWristY = " + LeftWristY );
        console.log("RightWristX = " + RightWristX +"RightWristY = " + RightWristY );

    }
}





