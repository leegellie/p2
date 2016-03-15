// JavaScript Document
// start BIO OBJECT
var bio = {
    "name": "Lee Gellie",
    "role": "Web Developer",
    "contacts": {
        "mobile": "817-994-5774",
        "email": "leegellie@gmail.com",
        "github": "leegellie",
        "location": "Winston-Salem, NC, USA"
    },
    "welcomeMessage": "Hello, I am Lee Gellie. I am a web programmer and designer.",
    "skills": ["Web Design", "Web Programming", "Problem Solving", "Being Awesome"],
    "biopic": "images/prof-pic.jpg",
    display: function() {

        // Insert Name and Role to Header
        $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

        // Set shorthand variable of Bio Object
        var contacts = bio.contacts;

        // Insert each contact detail into topContacts bar
        $('#topContacts').append(HTMLmobile.replace("%data%", contacts.mobile));
        $('#topContacts').append(HTMLemail.replace("%data%", contacts.email));
        $('#topContacts').append(HTMLgithub.replace("%data%", contacts.github));
        $('#topContacts').append(HTMLlocation.replace("%data%",
            contacts.location));

        // Insert each contact detail into footerContacts bar
        $('#footerContacts').append(HTMLmobile.replace("%data%", contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace("%data%", contacts.email));
        $('#footerContacts').append(HTMLgithub.replace("%data%", contacts.github));
        $('#footerContacts').append(HTMLlocation.replace("%data%", contacts.location));

        // Insert bioPic & Welcome Message
        $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
        $('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

        // Append Skills Header
        $('#header').append(HTMLskillsStart);

        // Set shorthand variable of Skills Array
        var skills = bio.skills;

        // Insert each skill into Header
        for (var i = 0; i < skills.length; i++) {
            $('#header').append(HTMLskills.replace("%data%", skills[i]));
        }
    }
};

bio.display();
// end BIO OBJECT

// start EUCATION OBJECT
var education = {
    "schools": [{
        "name": "International Training Organization",
        "location": "Hollywood, CA, USA",
        "degree": "Business Analysis &amp; Program Execution",
        "majors": ["Organizational Management"],
        "dates": "1995-2002",
        "url": ""
    }, {
        "name": "Robertsbridge",
        "location": "Knelle Rd, Robertsbridge, TN32 5EA, United Kingdom",
        "degree": "Full GCSEs",
        "majors": [],
        "dates": "1992-1993",
        "url": "http://www.robertsbridge.org.uk"
    }, {
        "name": "Warden Park",
        "location": "Broad St, Cuckfield, Haywards Heath, RH17 5DP, United Kingdom",
        "degree": "N/A",
        "majors": [],
        "dates": "1991-1992",
        "url": "http://www.wardenpark.co.uk"
    }, {
        "name": "Sackville",
        "location": "Lewes Rd, East Grinstead, RH19 3TY, United Kingdom",
        "degree": "N/A",
        "majors": [],
        "dates": "1991-1991",
        "url": "http://www.sackville.w-sussex.sch.uk"
    }, {
        "name": "Mace Kingsley",
        "location": "Passedena, CA, USA",
        "degree": "N/A",
        "majors": [],
        "dates": "1988-1991",
        "url": ""
    }, {
        "name": "Delphi Academy",
        "location": "Los Angeles, CA, USA",
        "degree": "N/A",
        "majors": [],
        "dates": "1987-1988",
        "url": "http://www.delphila.org"
    }, {
        "name": "Cave Creek",
        "location": "Phoenix, AZ, USA",
        "degree": "N/A",
        "majors": [],
        "dates": "1986-1987",
        "url": "http://www.ccusd93.org/education/district/district.php?sectionid=1"
    }, {
        "name": "Apple School",
        "location": "Clearwater, FL, USA",
        "degree": "N/A",
        "majors": [],
        "dates": "1983-1986",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-Current",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2014-2015",
        "url": "https://www.udacity.com/nanodegrees-new-s/nd000"
    }],
    display: function() {

        // Set shorthand variable of Work Object
        var educ = education.schools;

        // Loop through Work Object
        for (var i = 0; i < educ.length; i++) {
            var schools = educ[i];

            // Add in the work-entry container
            $('#education').append(HTMLschoolStart);

            // Combine <a> link for Employer & Title
            var educTitle = HTMLschoolName.replace("%url%", schools.url).replace("%data%", schools.name) + HTMLschoolDegree.replace("%data%", schools.degree);

            // Append all Job data
            $('.education-entry:last').append(educTitle);
            $('.education-entry:last').append(HTMLschoolDates.replace("%data%", schools.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", schools.location));

            // If no majors entered alter output
            if (schools.majors.length !== 0) {
                $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", schools.majors));
            } else {
                $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", "No Majors Listed"));
            }
        }

        // Add online Courses
        var onlineCs = education.onlineCourses;

        // Add in online courses if any exist
        if (onlineCs.length > 0) {
            $('#education').append(HTMLonlineClasses);

            // Loop through and add courses
            for (var j = 0; j < onlineCs.length; j++) {
                var online = onlineCs[j];
                var onlineTitle = HTMLonlineTitle.replace("%url%", online.url).replace("%data%", online.title) + HTMLonlineSchool.replace("%data%", online.school);
                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(onlineTitle);
                $('.education-entry:last').append(HTMLonlineDates.replace("%data%", online.dates));
                $('.education-entry:last').append(HTMLonlineURL.replace("%url%", online.url).replace("%data%", online.url));
            }
        }
    }
};

education.display();
// end EUCATION OBJECT

// start WORK OBJECT
var work = {
    "jobs": [{
        "employer": "Self",
        "title": "Master &amp; Commander",
        "location": "Winston-Salem, NC, USA",
        "dates": "2013-current",
        "description": "I do what I do, websites, design, programming"
    }, {
        "employer": "Self",
        "title": "Cowboy",
        "location": "Fort Worth, TX, USA",
        "dates": "2013-2013",
        "description": "I do what I do, websites, design, programming"
    }, {
        "employer": "Self",
        "title": "His Lordship",
        "location": "London, United Kingdom",
        "dates": "2008-2013",
        "description": "I do what I do, websites, design, programming"
    }, {
        "employer": "Greenfields Educational Trust",
        "title": "Marketing Executive",
        "location": "East Grinstead, United Kingdom",
        "dates": "2004-2008",
        "description": "Managed all tech, promotion and marketing for the Trust and its organizations."
    }, {
        "employer": "Cafe Florentine",
        "title": "Manager",
        "location": "Edinburgh, Scotland",
        "dates": "2002-2004",
        "description": "Ran coffee shop in the centre of Edinburgh's Old Town on the Royal Mile."
    }, {
        "employer": "The Jolly Judge",
        "title": "Chef",
        "location": "Edinburgh, Scotland",
        "dates": "2002-2004",
        "description": "Chef and barman at one of the oldest pubs in Edinburgh"
    }, {
        "employer": "International Management Organization",
        "title": "Data Bureau Chief",
        "location": "Hollywood Blvd, Hollywood, CA, USA",
        "dates": "1998-2002",
        "description": "Responsible for collecting, analyzing, reporting on data for around 2000 organizations and writing programs and getting them executed to handle any non-optimal situations."
    }, {
        "employer": "International Management Organization",
        "title": "Data Analysis &amp; Alerts Officer",
        "location": "Ivar Ave, Hollywood, CA, USA",
        "dates": "1995-1998",
        "description": "Responsible for analyzing and reporting on data for around 2000 organizations and summarizing situation reports for them."
    }, {
        "employer": "Advanced Org SH",
        "title": "Tours In/Charge",
        "location": "East Grinstead, United Kingdom",
        "dates": "1994-1995",
        "description": "Responsible for going around Europe to subsidiary companies and executing programs."
    }, {
        "employer": "Advanced Org SH",
        "title": "Computerization Project",
        "location": "East Grinstead, United Kingdom",
        "dates": "1994-1995",
        "description": "Responsible for computerizing all UK subsidiary organizations' files."
    }, {
        "employer": "Advanced Org SH",
        "title": "Central Files In/Charge",
        "location": "East Grinstead, United Kingdom",
        "dates": "1993-1994",
        "description": "Responsible for computerizing the organizations central files and keeping hard and computer files up to date."
    }, {
        "employer": "Jaager Fashion",
        "title": "Factory Worker",
        "location": "Burgess Hill, United Kingdom",
        "dates": "1992-1993",
        "description": "Worked in a factory sewing high-end clothing."
    }],
    display: function() {

        // Set shorthand variable of Work Object
        var jobs = work.jobs;

        // Loop through Work Object
        for (var i = 0; i < jobs.length; i++) {
            var job = jobs[i];

            // Add in the work-entry container
            $('#workExperience').append(HTMLworkStart);

            // Combine <a> link for Employer & Title
            var jobTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);

            // Append all Job data
            $('.work-entry:last').append(jobTitle);
            $('.work-entry:last').append(HTMLworkDates.replace("%data%", job.dates));
            $('.work-entry:last').append(HTMLworkLocation.replace("%data%", job.location));
            $('.work-entry:last').append(HTMLworkDescription.replace("%data%", job.description));
        }
    }
};

work.display();
// end WORK OBJECT

// start PROJECTS OBJECT
var projects = {
    "projects": [{
        "title": "Scilla Yacht",
        "dates": "2016",
        "description": "Web build of Chartered Yacht site",
        "images": ["images/pj1a.jpg", "images/pj1b.jpg"]
    }, {
        "title": "Sensible Shopper",
        "dates": "2015",
        "description": "Local Business site",
        "images": ["images/pj2a.jpg", "images/pj2b.jpg"]
    }, {
        "title": "French Coves",
        "dates": "2016",
        "description": "New House Development",
        "images": ["images/pj3a.jpg", "images/pj3b.jpg"]
    }],
    display: function() {

        // Set shorthand variable of Project Object
        var pjts = projects.projects;

        // Loop through Projects Object
        for (var i = 0; i < pjts.length; i++) {
            var pjt = pjts[i];

            // Add in the project-entry container
            $('#projects').append(HTMLprojectStart);

            // Append all Project data
            $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", pjt.title));
            $('.project-entry:last').append(HTMLprojectDates.replace("%data%", pjt.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", pjt.description));

            // Loop through and insert images for project, if any
            if (pjt.images !== 0) {
                var pjtImgs = pjt.images;
                for (var j = 0; j < pjtImgs.length; j++) {
                    $('.project-entry:last').append(HTMLprojectImage.replace("%data%", pjtImgs[j]));
                }
            }
        }
    }
};

projects.display();
// end PROJECTS OBJECT

// Call GOOGLE MAPS 
$('#mapDiv').append(googleMap);

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('topContacts').style.display = 'none';
    }
    if (document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.display = 'none';
    }
    if (document.getElementsByClassName('work-entry').length === 0) {
        document.getElementById('workExperience').style.display =
            'none';
    }
    if (document.getElementsByClassName('project-entry').length === 0) {
        document.getElementById('projects').style.display = 'none';
    }
    if (document.getElementsByClassName('education-entry').length === 0) {
        document.getElementById('education').style.display = 'none';
    }
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('letsConnect').style.display = 'none';
    }
    if (document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.display = 'none';
    }
});


// Scrolling and Menu
function scrollNav() {
    $('.nav-screen a').click(function() {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var thisClass = $(this).attr("class");
        $('.' + thisClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -70
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}

function scrollMob() {
    $('.dropdown-menu a').click(function() {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var thisClass = $(this).attr("class");
        $('.' + thisClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -70
        }, 400);
        $('#main-dd').click();
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();
scrollMob();