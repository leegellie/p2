// JavaScript Document

var bioObj = {"bio":[
				{"name":"Lee Gellie",
    "role":"Web Developer",
				"contacts":{
					   "details":[
        {"mobile":"817-994-5774"},
        {"email":"leegellie@gmail.com"},
        {"github":"leegellie"},
        {"location":"Winston-Salem"}
				]},
				"welcomeMessage":"Hello, I am Lee Gellie. I am a web programmer and designer.",
				"skills":["Web Design", "Web Programming", "Problem Solving"],
    "biopic":"images/prof-pic.jpg", 
				"display":function() {
        var formattedHead = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedHead);
    }
}
]};

var education = {"schools":[
    {"name":"Apple School", "location":"Clearwater, FL, USA", "degree":"N/A", "majors":"N/A", "dates":"1983-1986", "url":""},
    {"name":"Cave Creek", "location":"Pheonix, AZ, USA", "degree":"N/A", "majors":"N/A", "dates":"1986-1987", "url":"http://www.ccusd93.org/education/district/district.php?sectionid=1"},
    {"name":"Delphi Academy", "location":"Los Angeles, CA, USA", "degree":"N/A", "majors":"N/A", "dates":"1987-1988", "url":"http://www.delphila.org"},
    {"name":"Mace Kingsley", "location":"Passedena, CA, USA", "degree":"N/A", "majors":"N/A", "dates":"1988-1991", "url":""},
    {"name":"Sackville", "location":"East Grinstead, United Kingdom", "degree":"N/A", "majors":"N/A", "dates":"1991-1991", "url":"http://www.sackville.w-sussex.sch.uk"},
    {"name":"Warden Park", "location":"Haywards Heath, United Kingdom", "degree":"N/A", "majors":"N/A", "dates":"1991-1992", "url":"http://www.wardenpark.co.uk"},
    {"name":"Roberstbridge", "location":"Robertsbridge, United Kingdom", "degree":"Full GCSEs", "majors":"", "dates":"1992-1993", "url":"http://www.robertsbridge.org.uk"},
    {"name":"International Training Organization", "location":"Hollywood, CA, USA", "degree":"Business Analysis &amp; Program Execution", "majors":"", "dates":"1995-2002", "url":""}
],
"onlineCourses":[
    {"title":"Intro to Programming Nanodegree", "school":"Udacity", "dates":"2014-2015", "url":""}
],
"display":function() {
				    var schools = JSON.parse(education[0]);
        for (var i = 0; i < schools.length; i++) {
								    
        var educationEntry = HTMLheaderName.replace("%data%", education.schools);
        $("#header").append(formattedHead);
				}}
]};

var workObj = {"jobs":[
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""},
    {"employer":"John", "title":"Doe", "location":"", "dates":"", "description":""}
],

};







var www = {display: function() {
    var formattedHead = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedHead);
}}