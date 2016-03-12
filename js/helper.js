// HTML Strings for use in resumeBuilder.js
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="aqua-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="aqua-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="aqua-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="aqua-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="aqua-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="aqua-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="aqua-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3" class="skillsH3 right">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item right"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
// Added %url% to give links to schools.
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
// Added %url% to give links to Courses.
var HTMLonlineTitle = '<a href="%url%">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
// Added %url% to give links to Courses.
var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var googleMap = '<div id="map"></div>';

// Log page clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
    console.log(x, y);
});

clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

// Google Maps JS
var map; // declares a global map variable

function initializeMap() {

    var locations;
    var locationsNow;
    var locationsJobs;
    var locationsEduc;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinderNow() {
        var locationsNow = [];
        locationsNow.push(bio.contacts.location);
        console.log("now : " + locationsNow);
        return locationsNow;
    }

    function locationFinderEduc() {
        var locationsEduc = [];
        for (var school in education.schools) {
            locationsEduc.push(education.schools[school].location);
        }
        console.log("Educ : " + locationsEduc);
        return locationsEduc;
    }

    function locationFinderJobs() {
        var locationsJobs = [];
        for (var job in work.jobs) {
            locationsJobs.push(work.jobs[job].location);
        }
        console.log("Jobs : " + locationsJobs);
        return locationsJobs;
    }

    // Variables to be used with Markers Functions
    var iconBase = 'https://maps.google.com/mapfiles/kml/pal3/';
    var icons = {
        educType: {
            icon: iconBase + 'icon31.png'
        },
        workType: {
            icon: iconBase + 'icon21.png'
        },
    };
    var image = {
        url: bio.biopic,
        scaledSize: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };

    // Create Current Location Marker
    function createMapMarker(placeData) {
        var lat = placeData.geometry.location.k;
        var lon = placeData.geometry.location.D;
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;
        var type = image;

        // Make Markers
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            animation: google.maps.Animation.DROP,
            title: name,
            icon: type
        });

        // Make infoWindows
        var labData = "<h2>Here I am!</h2><p>" + bio.contacts.location + "</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: labData
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(labData);
            infoWindow.open(map, this);
        });

        // Set Bounds
        bounds.extend(placeData.geometry.location);
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
    }

    // Create Jobs Locations Marker
    function createMapMarkerJobs(placeData) {
        var lat = placeData.geometry.location.k;
        var lon = placeData.geometry.location.D;
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;
        var type = icons.workType.icon;

        // Make Work Markers
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            animation: google.maps.Animation.DROP,
            title: name,
            icon: type
        });

        // Make Work infoWindows
        var jobs = work.jobs;
        var labData;
        for (var i = 0; i < jobs.length; i++) {
            var job = jobs[i];
            if (name.substring(0, 3) == job.location.substring(0, 3)) {
                var labData = "<h2>" + job.title + "</h2><h3>" + job.dates + "</h3><p>" + job.location + "</p>";
            }
        }
        var infoWindow = new google.maps.InfoWindow({
            content: labData
        });

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(labData);
            infoWindow.open(map, this);
        });

        // Set Bounds
        bounds.extend(placeData.geometry.location);
        map.fitBounds(bounds);
    }

    // Create Educ Locations Marker
    function createMapMarkerEduc(placeData) {
        var lat = placeData.geometry.location.k;
        var lon = placeData.geometry.location.D;
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;
        var type = icons.educType.icon;

        // Add Markers
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            animation: google.maps.Animation.DROP,
            title: name,
            icon: type
        });

        // Add infoWindows
        var educs = education.schools;
        var labData;
        for (var i = 0; i < educs.length; i++) {
            var educ = educs[i];
            if (name.substring(0, 3) == educ.location.substring(0, 3)) {
                var labData = "<h2>" + educ.name + "</h2><h3>" + educ.dates + "</h3><p>" + educ.location + "</p>";
            }
        }
        var infoWindow = new google.maps.InfoWindow({
            content: labData
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(labData);
            infoWindow.open(map, this);
        });

        // Set Map Bounds
        bounds.extend(placeData.geometry.location);
        map.fitBounds(bounds);
    }

    //Get back Current Location Search from Google and calls Create Markers Functions
    function callback(results, status) {
        console.log(results + ' -- Status -- ' + status);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results[0]);
            createMapMarker(results[0]);
        }
    }

    //Get back Educ Search from Google and calls Create Markers Functions
    function callbackEduc(results, status) {
        console.log(results + ' -- Status -- ' + status);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results[0]);
            createMapMarkerEduc(results[0]);
        }
    }

    //Get back Jobs Search from Google and calls Create Markers Functions
    function callbackJobs(results, status) {
        console.log(results + ' -- Status -- ' + status);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results[0]);
            createMapMarkerJobs(results[0]);
        }
    }

    // Find Current Location with Google PlacesService search
    function pinPoster(locations) {
        var service = new google.maps.places.PlacesService(map);

        // I have set the map to only call pins for unique locations. 
        var uniqueLocations = [];
        $.each(locations, function(i, el) {
            if ($.inArray(el, uniqueLocations) === -1)
                uniqueLocations.push(el);
        });
        for (var place in uniqueLocations) {
            var request = {
                query: uniqueLocations[place],
            };
            service.textSearch(request, callback);
        }
    }

    // Find Educ Locations with Google PlacesService search
    function pinPosterEduc(locations) {
        var service = new google.maps.places.PlacesService(map);
        var uniqueLocations = [];
        $.each(locations, function(i, el) {
            if ($.inArray(el, uniqueLocations) === -1)
                uniqueLocations.push(el);
        });
        for (var place in uniqueLocations) {
            var request = {
                query: uniqueLocations[place]
            };
            service.textSearch(request, callbackEduc);
        }
    }

    // Find Jobs Locations with Google PlacesService search
    function pinPosterJobs(locations) {
        var service = new google.maps.places.PlacesService(map);
        var uniqueLocations = [];
        $.each(locations, function(i, el) {
            if ($.inArray(el, uniqueLocations) === -1)
                uniqueLocations.push(el);
        });
        for (var place in uniqueLocations) {
            var request = {
                query: uniqueLocations[place]
            };
            service.textSearch(request, callbackJobs);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locationsEduc = locationFinderEduc();
    locationsJobs = locationFinderJobs();
    locationsNow = locationFinderNow();

    /*
				Set functions to post pins and call them at intervals to 
				avoid Google Places Text Search 10 pins per second limit.
				*/
    function runEduc() {
        pinPosterEduc(locationsEduc);
    }

    function runJobs() {
        pinPosterJobs(locationsJobs);
    }

    function runNow() {
        pinPoster(locationsNow);
    }
    setTimeout(runEduc, 1000)
    setTimeout(runJobs, 3500)
    setTimeout(runNow, 6000)
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});