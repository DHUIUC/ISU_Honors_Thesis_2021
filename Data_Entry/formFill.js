var patientData;
var degenDisc;

//General Patient Information
var sex;
var age;

//Accident Info
var injury;
var accidentType;

//Other General Info
var concern;
var symptomDate;
var improvement;
var painScale;
var constantPain;
var bettersPain;
var worsensPain;
var painMoves;


//Pain types
var painIsSharp = false;
var painIsAching = false;
var painIsDull = false;
var painIsNumb = false;
var painIsCramp = false;
var painIsBurning = false;
var painIsThrobbing = false;
var painIsTingling = false;
var painIsStiff = false;
var painIsSwelling = false;
var painIsShooting = false;
var painIsOther = false;

//Interfered Activities
var intrf_Sleep = false;
var intrf_Work = false;
var intrf_DailyActivities = false;
var intrf_Other = false;


//Painful Activities
var painToSit = false;
var painToStand = false;
var painToLayDown = false;
var painToBend = false;
var painToWalk = false;

window.onload = function(){
	document.getElementById('continue').onclick = function() {
	
		//Has degen Disc?
		var radOpts = document.getElementsByName('radAnswer6');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				degenDisc = radOpts[i].value;
			}
		}
		
		//retrieve Sex
		radOpts = document.getElementsByName('sexVal');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				sex = radOpts[i].value;
			}
		}
		
		
		//retrieve Age
		age = document.getElementById("age").value;
		
		//retrieve injury status
		radOpts = document.getElementsByName('radAnswer');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				injury = radOpts[i].value;
			}
		}
		
		//retrieve Accident Type
		radOpts = document.getElementsByName('accVal');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				accidentType = radOpts[i].value;
			}
		}
		
		
		//Reason for Concern
		concern = document.getElementById("reason").value;
		
		//Symptom Date
		symptomDate = document.getElementById("symptomDate").value;
		
		//Condition Improving
		radOpts = document.getElementsByName('radAnswer2');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				improvement = radOpts[i].value;
			}
		}
		
		//Pain Scale
		painScale = document.getElementById("painScale").value;
		
		
		//Pain Type variables set
		if (document.getElementById("pn1").checked) {
			 painIsSharp = true;
		}
		if (document.getElementById("pn2").checked) {
			 painIsAching = true;
		}
		if (document.getElementById("pn3").checked) {
			 painIsDull = true;
		}
		if (document.getElementById("pn4").checked) {
			 painIsNumb = true;
		}
		if (document.getElementById("pn5").checked) {
			 painIsCramp = true;
		}
		if (document.getElementById("pn6").checked) {
			 painIsBurning = true;
		}
		if (document.getElementById("pn7").checked) {
			 painIsThrobbing = true;
		}
		if (document.getElementById("pn8").checked) {
			 painIsTingling = true;
		}
		if (document.getElementById("pn9").checked) {
			 painIsStiff = true;
		}
		if (document.getElementById("pn10").checked) {
			 painIsSwelling = true;
		}
		if (document.getElementById("pn11").checked) {
			 painIsShooting = true;
		}
		if (document.getElementById("pn12").checked) {
			 painIsOther = true;
		}
		
		
		//Is pain Constant
		radOpts = document.getElementsByName('radAnswer3');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				constantPain = radOpts[i].value;
			}
		}
		
		
		//Improvement Metrics
		bettersPain = document.getElementById("bettering").value;
		worsensPain = document.getElementById("worsening").value;
		
		//Does the pain move?
		radOpts = document.getElementsByName('radAnswer4');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				painMoves = radOpts[i].value;
			}
		}
		
		//Interfered Activities variables set
		if (document.getElementById("intf1").checked) {
			 intrf_Sleep = true;
		}
		if (document.getElementById("intf2").checked) {
			 intrf_Work = true;
		}
		if (document.getElementById("intf3").checked) {
			 intrf_DailyActivities = true;
		}
		if (document.getElementById("intf4").checked) {
			 intrf_Other = true;
		}
		
		//Painful Activities variables set
		if (document.getElementById("pnt1").checked) {
			 painToSit = true;
		}
		if (document.getElementById("pnt2").checked) {
			 painToStand = true;
		}
		if (document.getElementById("pnt3").checked) {
			 painToLayDown = true;
		}
		if (document.getElementById("pnt4").checked) {
			 painToBend = true;
		}
		if (document.getElementById("pnt5").checked) {
			 painToWalk = true;
		}
		
		patientData = [degenDisc,sex,age.toString(),injury,accidentType,
					concern,symptomDate,improvement,painScale.toString(),
					painIsSharp.toString(),painIsAching.toString(),painIsDull.toString(),
					painIsNumb.toString(),painIsCramp.toString(),painIsBurning.toString(),
					painIsThrobbing.toString(),painIsTingling.toString(),painIsStiff.toString(),
					painIsSwelling.toString(),painIsShooting.toString(),painIsOther.toString(),
					constantPain, bettersPain, worsensPain, painMoves, intrf_Sleep.toString(),
					intrf_Work.toString(),intrf_DailyActivities.toString(),intrf_Other.toString(),
					painToSit.toString(),painToStand.toString(),painToLayDown.toString(),
					painToBend.toString(),painToWalk.toString()];
		
		
		/*
		let csvContent = "data:text/csv;charset=utf-8,";
		
		patientData.forEach(function(rowArray) {
			let row = rowArray.join(",");
			csvContent += row + "\r\n";
		});
		
		var encodedUri = encodeURI(csvContent);
		window.open(encodedUri);
		}
		*/

		console.log(concern);
		console.log(patientData);
	}
}