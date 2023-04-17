//https://teachablemachine.withgoogle.com/models/pbbn1t9HI/
prediction1="";
prediction2="";

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";    
    }); 
}

console.log("ml5 version ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pbbn1t9HI/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The First Prediction is "+prediction1;
var utterthis=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterthis);
}

function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotresult);    
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
prediction1=results[0].label;
speak();
if(results[0].label=="left side pointing hand"){
document.getElementById("update_emoji1").innerHTML="&#9754"; 
}
if(results[0].label=="victory"){
    document.getElementById("update_emoji1").innerHTML="&#9996"; 
    }
    if(results[0].label=="upwards pointing hand"){
        document.getElementById("update_emoji1").innerHTML="&#128070"; 
        }
        if(results[0].label=="thums up"){
            document.getElementById("update_emoji1").innerHTML="&#128077"; 
            }
        

}
}