
//Leave
//console.log(udacityizer(term));
//var skills = ["Integrity", "Hard working", "Team Player", "Programming", "Troubleshooting"];
//$("#main").append(skills.length);
//var name = "John Stahnke";
//var role = "Software Engineer";

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
var bio = {
	"name" : "John Stahnke",
	"role" : "Software Engineer",
	"skills" : ["C/C++/C#", "Javascript", "ASP.NET MVC", "Git/Subversion/TFS/ClearQuest ClearCase", "Assembly", "ADA"],
	"picture" : "./images/BobbyAnd_I.jpg",
	contacts : { "location" : ["Seattle, Wa", "Houston, Tx"] }
	}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("#data%", bio.picture);
/*
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("%header").prepend(formattedPicture);
//$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
*/
$("#header").prepend(HTMLheaderRole.replace("%data%", formattedRole));
$("#header").prepend(HTMLheaderName.replace("%data%", formattedName));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	
}

var work = {
	"jobs": [{
		"employer": "Boeing EO&T",
		"title": "Software Engineer",
		"dates": "2010-present",
		"location": "Seattle, Wa",
		"description": ["Software analysis and development of applications in C sharp and Web Applications using Asp.net MVC Visual Studio.Net 3.0 and 4.0 using 2010 2012.",
			"Legacy application support using PLSql and setting up and using Oracle Web Tier Http Application Server.",
			"Currently converting legacy web application from PLSql to Asp.net C# using the MVC software architecture model.",
			"Admin focal on Software Configuration using Team Foundation Server and Subversion. Customer support on call 24/7 for our applications."
		]
	}, {
		"employer": "Boeing Space Station",
		"title": "Software Engineer",
		"dates": "2008-2010",
		"location": "Houston, Tx",
		"description": ["Software analysis and development and Unit Testing in ADA.",
			"Software Integration Test Scripting in C and running on our Simulators.",
			"Patch Creation between major releases using Intel 386 Assembly.",
			"Volunteered to assist our AEW&C program by working for two weeks with Hamilton Sundstrand to perform testing of the BITE system using the C language.",
			"Tools used: Understand for ADA, QPMT (metrics for Software Lifecycle), PVCS (Change Management), Visual Studio,  PIMS (peer review tool)."
		]
	}, {
		"employer": "Boeing Commercial Aviation Services",
		"title": "Configuration Management Specialist",
		"dates": "3/2007-4/2008",
		"location": "Seattle, Wa",
		"description": ["ClearCase and ClearQuest focal for Electronic Flight Bag and Electronic LogBook products. Assisting users with issues and generating reports for project management focals.",
			"ANT Software Builder for Electronic LogBook application (JAVA).",
			"Software release management in creation and coordinating with SQA to release production and engineering red label parts through Boeing delivery mechanisms to customers, test labs and aircraft. VDD and First Article Inspection (FAI) creation. Focal for sending software parts electronically through BEDS, and Jeppesen DDM to airlines around the world.",
			"Tools used: Rational ClearCase, ClearQuest, Apache ANT, Boeing Electronic Delivery System (BEDS), Boeing e-Plane A665 Packing Tool (BeAP), Red Hat Package Manager (RPM), Jeppesen Data Distribution Management (DDM)."
		]
	}, {
		"employer": "Boeing 787 Verification Validation",
		"title": "Configuration Management Specialist",
		"dates": "11/2005-3/2007",
		"location": "Everett, Wa",
		"description": ["Lead of the Red Label Admin team for the 787 program.",
			"Coordination with suppliers and customers all around the world at all times during the day to work parts delivery and parts configuration issues.",
			"Coordination between Test Labs, Supplier Factories and Boeing Factories on the delivery and mitigating dates for scheduling installation and testing of Red Label or engineering parts.",
			"Test Part Commitment Board Chairperson.",
			"Coordination of scheduling and delivery of test parts to various Boeing and Supplier labs to meet test schedules.",
			"Focal for creation of a software delivery mechanism and architect of how Blue Label software test parts are to be delivered and configuration controlled to also the protection of intellectual property of parts from suppliers to other suppliers."
		]
	}, {
		"employer": "Boeing Space Shuttle Flight Software Engineering",
		"title": "Software Builder",
		"dates": "3/2004-11/2005",
		"location": "Houston, Tx",
		"description": ["Backup Lead for the Reconfiguration Team (software builders for the back up flight software for the Space Shuttle)",
			"Attended meetings with NASA and our customer USA (United Space Alliance) to schedule and configuration control what versions were to go into the builds for each shuttle flight.",
			"Script and job creation using JCL and CLISTS to submit jobs on the z/OS mainframe system."
		]
	}, {
		"employer": "Boeing Digital Engineering Data Products",
		"title": "Programmer Analyst",
		"dates": "11/2002-6/2003",
		"location": "Tukwila, Wa",
		"description": ["Software Engineer developing components for the Portable Maintenance package using Visual Studio and Configuration Control using Visual Source Safe.",
			"Software Test Engineer running manual and automated tests using Mercury Interactive Winrunner and TestDirector.",
			"Lab focal in setting up lab network to ghost multiple different Microsoft Operating Systems."
		]
	}, {
		"employer": "Boeing Aero Computing",
		"title": "Programmer Analyst",
		"dates": "3/2002-10/2002",
		"location": "Renton, Wa",
		"description": "Visual Basic Software Developer on our 3-tier application called Airplane Mission Analysis."
	}, {
		"employer": "Boeing Engineering Labs Software Support",
		"title": "Programmer Analyst",
		"dates": "9/1999-3/2002",
		"location": "Seattle, Wa",
		"description": "Visual C/C++ Software Engineer responsible for all phases of the Software Development lifecycle staring with requirements gathering through maintenance support for our structures engineering customers in testing."
	}, {
		"employer": "Boeing Flight Line Maintenance",
		"title": "Mechanic",
		"dates": "8/1996-9/1999",
		"location": "Seattle, Wa",
		"description": ["Boeing 737, 757 flight line maintenance.",
			"Coordinating with engineering and airline customers to resolve any issues with their aircraft to ensure a safe and exemplary product.",
			"Experimental Flight Line mechanic coordinating with Flight Test engineering to setup the aircraft for the next day flight testing."
		]
	}, {
		"employer": "General Electric Aircraft Engines",
		"title": "Turbine Engine Technician",
		"dates": "6/1989-8/1996 11/1999-2/2003",
		"location": "Seattle, Wa",
		"description": ["Responsible for maintenance, inspection and analysis of any issues with our turbine engines.",
			"Focal for engineering in analyzing any issues with the flights and resolving those issues. Frequently called on as I had extensive knowledge of the functional workings of the turbine engine in relation to flight characteristics and performance."
		]
	}]
	
}

//my education JSON
var education = {
	"schools": [{
		"name": "Notre Dame",
		"degree": "Certificate",
		"major": "Certificate Executive Leadership",
		"year": "2016",
		"location": "South Bend, In"
	}, {
		"name": "University of Washington",
		"degree": "Certificate",
		"major": "Certificate HTML5 CSS Responsive Dev",
		"year": "2016",
		"location": "Seattle, Wa"
	}, {
		"name": "University of Washington",
		"degree": "Certificate",
		"major": "Certificate Advanced .Net Development",
		"year": "2015",
		"location": "Seattle, Wa"
	}, {
		"name": "University of Washington",
		"degree": "Certificate",
		"major": "Certificate .Net Development",
		"year": "2014",
		"location": "Seattle, Wa"
	}, {
		"name": "Capella University",
		"degree": "Masters of Science",
		"major": "Information Security and Assurance",
		"year": "2010",
		"location": "Minneapolis, Mn"
	}, {
		"name": "City University",
		"degree": "Bachelors of Science",
		"major": "Computer Systems",
		"year": "2007",
		"location": "Seattle, Wa"
	}, {
		"name": "South Seattle Community College",
		"degree": "Certificate",
		"major": "F.A.A Powerplant and Airframe",
		"year": "1993",
		"location": "Seattle, Wa"
	}]
}

work.display = function(){
	for ( job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concantenate employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	//selecting all class with work-entry
	$(".work-entry:last").append(formattedEmployerTitle);
	
	//dates
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

education.display = function(){
	for (school in education.schools) {
		// create new div for schools
		$("#education").append(HTMLschoolStart);
		
		//concantenate school name and degree
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedName + formattedDegree;
		//attach to education-entry
		$(".education-entry:last").append(formattedSchoolDegree);
		
			//dates
			var formattedDates = HTMLworkDates.replace("%data%", education.schools[school].year);
			$(".education-entry:last").append(formattedDates);
	
			var formattedMajor = HTMLworkDescription.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		
	}
}
/* commented out single function
function displayWork(){
	for ( job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concantenate employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	//selecting all class with work-entry
	$(".work-entry:last").append(formattedEmployerTitle);
	
	//dates
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}*/
//displayWork();
work.display(); //using encapsulating functions
education.display();
$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});
function logClicks(x,y){
	console.log(x);
	console.log(y);
}

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+ name[1];
}

$('main').append(internationalizeButton);

//My locations map
$("#mapDiv").append(googleMap);