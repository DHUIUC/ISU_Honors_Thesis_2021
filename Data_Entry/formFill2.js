var retrievedData = [];
var healthData;



//Treatment Checkboxes
var hadMedication = false;
var hadSurgery = false;
var hadPhysicalTherapy = false;
var hadChiropractic = false;
var hadOther = false;


//MAJOR CHECKBOXES
var hasAIDS = false;
var hasAlcoholism = false;
var hasAllergyShot = false;
var hasAnemia = false;
var hasAnorexia = false;
var hasAppendicitis = false;
var hasArthiritis = false;
var hasAsthma = false;
var hasBleedingDisorder = false;
var hasBreastLump = false;
var hasBronchitis = false;
var hasBulimia = false;
var hasCancer = false;
var hasCataracts = false;
var hasChemicalDependency = false;
var hasChickenPox = false;
var hasDiabetes = false;
var hasEmphysema = false;
var hasEpilepsy = false;
var hasFractures = false;
var hasGlaucoma = false;
var hasGoiter = false;
var hasGonorrhea = false;
var hasGout = false;
var hasHeartDisease = false;
var hasHepatitis = false;
var hasHernia = false;
var hasHerniatedDisc = false;
var hasHerpes = false;
var hasHighCholesterol = false;
var hasKidneyDisease = false;
var hasLiverDisease = false;
var hasMeasles = false;
var hasMigraines = false;
var hasHeadaches = false;
var hasMiscarriage = false;
var hasMononucleosis = false;
var hasMultipleSclerosis = false;
var hasMumps = false;
var hasOsteoporosis = false;
var hasPacemaker = false;
var hasParkinsons = false;
var hasPinchedNerve = false;
var hasPneumonia = false;
var hasPolio = false;
var hasProstateIssues = false;
var hasProsthesis = false;
var hasPsychiatricCare = false;
var hasRheumatoidArthiritis = false;
var hasRheumaticFever = false;
var hasScarletFever = false;
var hasStroke = false;
var hasSuicideAttempt = false;
var hasThyroidProblems = false;
var hasTonsillitis = false;
var hasTuberculosis = false;
var hasTumors = false;
var hasTyphoidFever = false;
var hasUlcers = false;
var hasVaginalInfection = false;
var hasVenerealDisease = false;
var hasWhoopingCough = false;
var hasOther = false;

//Exercise variables
var exercise;

//Work variables
var work_sitting = false;
var work_standing = false;
var work_light_labor = false;
var work_heavy_labor = false;

//Habit variables
var hab_smoking = false;
var hab_alcohol = false;
var hab_caffeine = false;

//is Pregnant (Female Only)
var isPregnant;

//Text Input Vars
var input_Falls;
var input_HeadInjury;
var input_BrokenBones;
var input_Dislocations;
var input_Surgeries;

window.onload = function(){
	document.getElementById('submit').onclick = function(){
		
		
		//Set Treatment Variables
		if (document.getElementById("cb1").checked) {
			hadMedication = true;
		}
		if (document.getElementById("cb2").checked) {
			hadSurgery = true;
		}
		if (document.getElementById("cb3").checked) {
			hadPhysicalTherapy = true;
		}
		if (document.getElementById("cb4").checked) {
			hadChiropractic = true;
		}
		if (document.getElementById("cb5").checked) {
			hadOther = true;
		}
		
		
		//Set mass variables based on checkboxes
		if (document.getElementById("check1").checked) {
			hasAIDS = true;
		}
		if (document.getElementById("check2").checked) {
			 hasAlcoholism = true;
		}
		if (document.getElementById("check3").checked) {
			 hasAllergyShot = true;
		}
		if (document.getElementById("check4").checked) {
			 hasAnemia = true;
		}
		if (document.getElementById("check5").checked) {
			 hasAnorexia = true;
		}
		if (document.getElementById("check6").checked) {
			 hasAppendicitis = true;
		}
		if (document.getElementById("check7").checked) {
			 hasArthiritis = true;
		}
		if (document.getElementById("check8").checked) {
			 hasAsthma = true;
		}
		if (document.getElementById("check9").checked) {
			 hasBleedingDisorder = true;
		}
		if (document.getElementById("check10").checked) {
			 hasBreastLump = true;
		}
		if (document.getElementById("check11").checked) {
			 hasBronchitis = true;
		}
		if (document.getElementById("check12").checked) {
			 hasBulimia = true;
		}
		if (document.getElementById("check13").checked) {
			 hasCancer = true;
		}
		if (document.getElementById("check14").checked) {
			 hasCataracts = true;
		}
		if (document.getElementById("check15").checked) {
			 hasChemicalDependency = true;
		}
		if (document.getElementById("check16").checked) {
			 hasChickenPox = true;
		}
		if (document.getElementById("check17").checked) {
			 hasDiabetes = true;
		}
		if (document.getElementById("check18").checked) {
			 hasEmphysema = true;
		}
		if (document.getElementById("check19").checked) {
			 hasEpilepsy = true;
		}
		if (document.getElementById("check20").checked) {
			 hasFractures = true;
		}
		if (document.getElementById("check21").checked) {
			 hasGlaucoma = true;
		}
		if (document.getElementById("check22").checked) {
			 hasGoiter = true;
		}
		if (document.getElementById("check23").checked) {
			 hasGonorrhea = true;
		}
		if (document.getElementById("check24").checked) {
			 hasGout = true;
		}
		if (document.getElementById("check25").checked) {
			 hasHeartDisease = true;
		}
		if (document.getElementById("check26").checked) {
			 hasHepatitis = true;
		}
		if (document.getElementById("check27").checked) {
			 hasHernia = true;
		}
		if (document.getElementById("check28").checked) {
			 hasHerniatedDisc = true;
		}
		if (document.getElementById("check29").checked) {
			 hasHerpes = true;
		}
		if (document.getElementById("check30").checked) {
			 hasHighCholesterol = true;
		}
		if (document.getElementById("check31").checked) {
			 hasKidneyDisease = true;
		}
		if (document.getElementById("check32").checked) {
			 hasLiverDisease = true;
		}
		if (document.getElementById("check33").checked) {
			 hasMeasles = true;
		}
		if (document.getElementById("check34").checked) {
			 hasMigraines = true;
		}
		if (document.getElementById("check35").checked) {
			 hasHeadaches = true;
		}
		if (document.getElementById("check36").checked) {
			 hasMiscarriage = true;
		}
		if (document.getElementById("check37").checked) {
			 hasMononucleosis = true;
		}
		if (document.getElementById("check38").checked) {
			 hasMultipleSclerosis = true;
		}
		if (document.getElementById("check39").checked) {
			 hasMumps = true;
		}
		if (document.getElementById("check40").checked) {
			 hasOsteoporosis = true;
		}
		if (document.getElementById("check41").checked) {
			 hasPacemaker = true;
		}
		if (document.getElementById("check42").checked) {
			 hasParkinsons = true;
		}
		if (document.getElementById("check43").checked) {
			 hasPinchedNerve = true;
		}
		if (document.getElementById("check44").checked) {
			 hasPneumonia = true;
		}
		if (document.getElementById("check45").checked) {
			 hasPolio = true;
		}
		if (document.getElementById("check46").checked) {
			 hasProstateIssues = true;
		}
		if (document.getElementById("check47").checked) {
			 hasProsthesis = true;
		}
		if (document.getElementById("check48").checked) {
			 hasPsychiatricCare = true;
		}
		if (document.getElementById("check49").checked) {
			 hasRheumatoidArthiritis = true;
		}
		if (document.getElementById("check50").checked) {
			 hasRheumaticFever = true;
		}
		if (document.getElementById("check51").checked) {
			 hasScarletFever = true;
		}
		if (document.getElementById("check52").checked) {
			 hasStroke = true;
		}
		if (document.getElementById("check53").checked) {
			 hasSuicideAttempt = true;
		}
		if (document.getElementById("check54").checked) {
			 hasThyroidProblems = true;
		}
		if (document.getElementById("check55").checked) {
			 hasTonsillitis = true;
		}
		if (document.getElementById("check56").checked) {
			 hasTuberculosis = true;
		}
		if (document.getElementById("check57").checked) {
			 hasTumors = true;
		}
		if (document.getElementById("check58").checked) {
			 hasTyphoidFever = true;
		}
		if (document.getElementById("check59").checked) {
			 hasUlcers = true;
		}
		if (document.getElementById("check60").checked) {
			 hasVaginalInfection = true;
		}
		if (document.getElementById("check61").checked) {
			 hasVenerealDisease = true;
		}
		if (document.getElementById("check62").checked) {
			 hasWhoopingCough = true;
		}
		if (document.getElementById("check63").checked) {
			 hasOther = true;
		}
		
		
		//Exercise value retrieval
		var radOpts = document.getElementsByName('exVal');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				exercise = radOpts[i].value;
			}
		}
		
		
		//Work values
		if (document.getElementById("wrk1").checked) {
			 work_sitting = true;
		}
		if (document.getElementById("wrk2").checked) {
			work_standing = true;
		}
		if (document.getElementById("wrk3").checked) {
			work_light_labor = true;
		}
		if (document.getElementById("wrk4").checked) {
			 work_heavy_labor = true;
		}
		
		
		//Habit Values
		if (document.getElementById("hab1").checked) {
			 hab_smoking = true;
		}
		if (document.getElementById("hab2").checked) {
			 hab_alcohol = true;
		}
		if (document.getElementById("hab3").checked) {
			 hab_caffeine = true;
		}
		
		//Is Pregnant?
		radOpts = document.getElementsByName('radAnswer5');
		for(var i =0;i < radOpts.length; i++){
			if(radOpts[i].checked){
				isPregnant = radOpts[i].value;
			}
		}
		
		//Injury/Surgery Information
		input_Falls = document.getElementById("Falls").value;
		input_HeadInjury = document.getElementById("Head_Injuries").value;
		input_BrokenBones = document.getElementById("Broken_Bones").value;
		input_Dislocations = document.getElementById("Dislocations").value;
		input_Surgeries = document.getElementById("Surgeries").value;
		
		healthData =[hadMedication.toString(),hadSurgery.toString(),hadPhysicalTherapy.toString(),
					  hadChiropractic.toString(),hadOther.toString(),hasAIDS.toString(),hasAlcoholism.toString(),
					  hasAllergyShot.toString(),hasAnemia.toString(),hasAnorexia.toString(),hasAppendicitis.toString(),
					  hasArthiritis.toString(),hasAsthma.toString(),hasBleedingDisorder.toString(),
					  hasBreastLump.toString(),hasBronchitis.toString(),hasBulimia.toString(),
					  hasCancer.toString(),hasCataracts.toString(),hasChemicalDependency.toString(),
					  hasChickenPox.toString(),hasDiabetes.toString(),hasEmphysema.toString(),hasEpilepsy.toString(),
					  hasFractures.toString(),hasGlaucoma.toString(),hasGoiter.toString(),hasGonorrhea.toString(),
					  hasGout.toString(),hasHeartDisease.toString(),hasHepatitis.toString(),hasHernia.toString(),
					  hasHerniatedDisc.toString(),hasHerpes.toString(),hasHighCholesterol.toString(),
					  hasKidneyDisease.toString(),hasLiverDisease.toString(),hasMeasles.toString(),hasMigraines.toString(),
					  hasHeadaches.toString(),hasMiscarriage.toString(),hasMononucleosis.toString(),hasMultipleSclerosis.toString(),
					  hasMumps.toString(),hasOsteoporosis.toString(),hasPacemaker.toString(),hasParkinsons.toString(),
					  hasPinchedNerve.toString(),hasPneumonia.toString(),hasPolio.toString(),hasProstateIssues.toString(),
					  hasProsthesis.toString(),hasPsychiatricCare.toString(),hasRheumatoidArthiritis.toString(),
					  hasRheumaticFever.toString(),hasScarletFever.toString(),hasStroke.toString(),hasSuicideAttempt.toString(),
					  hasThyroidProblems.toString(),hasTonsillitis.toString(),hasTuberculosis.toString(),hasTumors.toString(),
					  hasTyphoidFever.toString(),hasUlcers.toString(),hasVaginalInfection.toString(),hasVenerealDisease.toString(),
					  hasWhoopingCough.toString(),hasOther.toString(),exercise,work_sitting.toString(),work_standing.toString(),
					  work_light_labor.toString(),work_heavy_labor.toString(),hab_smoking.toString(),hab_alcohol.toString(),
					  hab_caffeine.toString(),isPregnant,input_Falls,input_HeadInjury,input_BrokenBones,input_Dislocations,
					  input_Surgeries];
		
		
		
		
		//Creating anonymous patient profile
		console.log(healthData);
		
		
		
	}
}