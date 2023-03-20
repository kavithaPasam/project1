function talk(){

var know = {

"How are you" : "Good :)",
"ok" : "Thank You So Much",
"Bye" : "Okay! Will meet soon..",
"schemes":"related to education, Economic, health care",
"education":"schemes are Eklavya Model Residential Schools, National Fellowship,Scholarship for Higher Education",
"economic":"Schemes are Tribal Sub Plan (TSP),Pradhan Mantri Van Dhan Yojana, Institutional Support For Development And Marketing Of Tribal Products",
"health care":"Schemes are Tribal Sub Plan (TSP), Pradhan Mantri Van Dhan Yojana, Institutional Support For Development And Marketing Of Tribal Products",
"tribal welfare":"Tribal welfare in India refers to the measures taken by the government to improve the lives of the tribal communities. The government has implemented various policies and programs aimed at promoting tribal welfare."	
};


var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
	
} 
else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}




}

function ans(){





}
