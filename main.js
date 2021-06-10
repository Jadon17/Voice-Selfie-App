var SpeechRecognition = window.webkitSpeechRecognition;
Recognition = new SpeechRecognition();

function start()    {
    document.getElementById("speech_box").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
     console.log(content);
    document.getElementById("speech_box").innerHTML = content;
    if (content == "take my selfie"){
        console.log("taking you selfie ---");  
        speak();
    }
    else {
        window.alert("Error : Say 'Take my selfie'");
    }
    
}

function speak(){
    synth = window.speechSynthesis;
    speak_data = "Taking your selfie in five seconds"
    utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width : 350,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 90
});

camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "myselfie" src = "'+data_uri+'">'
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("myselfie").src;
    link.href = image;
    link.click();
}