//var map = L.map('map').setView([45.5, -122.7], 12);
//
//var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '<a href="https://chaelese.carto.com/builder/2da1b663-e77e-452b-81d5-0df8f42bf7f2/embed">OpenStreetMap</a>'
//}).addTo(map);
//
//
//var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//    subdomains: 'abcd',
//    maxZoom: 19
//}).addTo(map);


// vars
//var nossaFamilia, coava, ristrettoRoasters, heartRoasters, waterAvenueCoffee, Stumptown, upperLeftRoasters, extractoCoffeeRoasters, sevenVirtues, portlandRoastingCoffee

// Database Queries
// Get all coffee cafes from dataset


//set up the SQL queires
var nossaFamiliaSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Nossa Familia'";

var coavaSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Coava Coffee Roasters'";

var ristrettoRoastersSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Ristretto Roasters'";

var heartRoastersSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Heart Roasters'";

var waterAvenueCoffeeSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Water Avenue Coffee'";

var stumptownSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Stumptown'";

var upperLeftRoastersSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Upper Left Roasters'";

var extractoCoffeeRoastersSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Extracto Coffee Roasters'";

var sevenVirtuesSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Seven Virtues'";

var portlandRoastingCoffeeSqlQuery = "SELECT * FROM cofee WHERE name_roast = 'Portland Roasting Coffee'";

// Set CartoDB Username
var cartoDBUserName = "chaelese";

//request all the data then pass the callback function all the data to make the map with 
$.when($.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + nossaFamiliaSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + coavaSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + ristrettoRoastersSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + heartRoastersSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + waterAvenueCoffeeSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + stumptownSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + upperLeftRoastersSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + extractoCoffeeRoastersSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + sevenVirtuesSqlQuery),
        $.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + portlandRoastingCoffeeSqlQuery))
    .then(function (nossaFamiliaData, coavaData, ristrettoData, heartData, waterAvenueData, stumptownData, upperLeftData, extractoData, sevenVirtuesData, portlandRoastingData) {

        ;

        /////////////////////
        //base layers
        var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '<a href="https://chaelese.carto.com/builder/2da1b663-e77e-452b-81d5-0df8f42bf7f2/embed">OpenStreetMap</a>'
        });


        var cartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        });
        /////////////////////////////////
        //vector layers
        var nossaFamiliaStyle = {
            "color": "#0000CD",
            "weight": 5,
            "opacity": 0.65
        };

        //nossa familia
        var nossaFamilia = L.geoJson(nossaFamiliaData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: nossaFamiliaStyle
        });


        //coava
        var coavaStyle = {
            "color": "#ff7800",
            "weight": 5,
            "opacity": 0.65
        };

        coava = L.geoJson(coavaData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: coavaStyle
        })

        //ristretto
        var ristrettoStyle = {
            "color": "#DC143C",
            "weight": 5,
            "opacity": 0.65
        };

        ristrettoRoasters = L.geoJson(ristrettoData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: ristrettoStyle
        })

        //heart
        var heartStyle = {
            "color": "#9ACD32",
            "weight": 5,
            "opacity": 0.65
        };

        heartRoasters = L.geoJson(heartData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: heartStyle
        })

        //water ave
        var waterAvenueStyle = {
            "color": "#00CED1",
            "weight": 5,
            "opacity": 0.65
        };

        waterAvenueCoffee = L.geoJson(waterAvenueData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: waterAvenueStyle
        })

        //strumptown
        var stumptownStyle = {
            "color": "#ff7800",
            "weight": 5,
            "opacity": 0.65
        };

        stumptown = L.geoJson(stumptownData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: stumptownStyle
        })

        //upper left
        var upperLeftRoastersStyle = {
            "color": "#FFD700",
            "weight": 5,
            "opacity": 0.65
        };

        upperLeftRoasters = L.geoJson(upperLeftData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: upperLeftRoastersStyle
        })


        //extracto
        var extractoStyle = {
            "color": "#FF00FF",
            "weight": 5,
            "opacity": 0.65
        };

        extractoCoffeeRoasters = L.geoJson(extractoData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: extractoStyle
        })

        //7 virtues
        var sevenVirtuesStyle = {
            "color": "#8B008B",
            "weight": 5,
            "opacity": 0.65
        };

        sevenVirtues = L.geoJson(sevenVirtuesData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: sevenVirtuesStyle
        })


        //portland roasting
        var portlandRoastingStyle = {
            "color": "#00FFFF",
            "weight": 5,
            "opacity": 0.65
        };

        portlandRoastingCoffee = L.geoJson(portlandRoastingData, {
            onEachFeature: function (feature, layer) {
                //            console.log(feature)
                layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
                //            layer.cartodb_id = feature.properties.cartodb_id;
            },
            style: portlandRoastingStyle
        })


        ///////////////////////////////////

        //instantiate the map
        //the layers option includes all the layers that will be visible when the map first renders
        var map = L.map('map', {
            center: [45.526236, -122.668073],
            zoom: 12,
            layers: [cartoDB_Positron, nossaFamilia, coava, ristrettoRoasters, heartRoasters, waterAvenueCoffee, stumptown, upperLeftRoasters, extractoCoffeeRoasters, sevenVirtues, portlandRoastingCoffee] // add all the layers you want to show when the map first renders
        })


        /////////////////////////////
        //set layers object

        var baseLayers = {
            "OSM": osmLayer,
            "Carto Positron": cartoDB_Positron
        };


        //finsish adding the layers here...
        var overlays = {
            "Nossa Familia": nossaFamilia,
            "Coava": coava,
            "Ristretto": ristrettoRoasters,
            "Heart": heartRoasters,
            "Water Avenue Coffee": waterAvenueCoffee,
            "Stumptown": stumptown,
            "Upper Left Roasters": upperLeftRoasters,
            "Extracto Coffee Roasters": extractoCoffeeRoasters,
            "Seven Virtues": sevenVirtues,
            "Portland Roasting Coffee": portlandRoastingCoffee
        };

        //////////////////////////////////
        //add the layer controller
        L.control.layers(baseLayers, overlays).addTo(map);

    })


//////TESTING
//var map = L.map('map').setView([45.5, -122.7], 12);

////////////
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + nossaFamiliaSqlQuery, function (data) {
//
//    var nossaFamiliaStyle = {
//        "color": "#0000CD",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    nossaFamilia = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: nossaFamiliaStyle
//    }).addTo(map)
//
//});
//
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + coavaSqlQuery, function (data) {
//
//
//    var coavaStyle = {
//        "color": "#ff7800",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    coava = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: coavaStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + ristrettoRoastersSqlQuery, function (data) {
//
//    var ristrettoStyle = {
//        "color": "#DC143C",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    ristrettoRoasters = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: ristrettoStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + heartRoastersSqlQuery, function (data) {
//
//    var heartStyle = {
//        "color": "#9ACD32",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    heartRoasters = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: heartStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + waterAvenueCoffeeSqlQuery, function (data) {
//
//    var waterAvenueStyle = {
//        "color": "#00CED1",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    waterAvenueCoffee = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: waterAvenueStyle
//    }).addTo(map)
//
//});
//
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + stumptownSqlQuery, function (data) {
//
//
//    var stumptownStyle = {
//        "color": "#ff7800",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    stumptown = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: stumptownStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + upperLeftRoastersSqlQuery, function (data) {
//
//    var upperLeftRoastersStyle = {
//        "color": "#FFD700",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    upperLeftRoasters = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: upperLeftRoastersStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + extractoCoffeeRoastersSqlQuery, function (data) {
//
//    var extractoStyle = {
//        "color": "#FF00FF",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    extractoCoffeeRoasters = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: extractoStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + sevenVirtuesSqlQuery, function (data) {
//
//    var sevenVirtuesStyle = {
//        "color": "#8B008B",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    sevenVirtues = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: sevenVirtuesStyle
//    }).addTo(map)
//
//});
//
//$.getJSON("https://" + cartoDBUserName + ".cartodb.com/api/v2/sql?format=GeoJSON&q=" + PortlandRoastingCoffeeSqlQuery, function (data) {
//
//    var portlandRoastingStyle = {
//        "color": "#00FFFF",
//        "weight": 5,
//        "opacity": 0.65
//    };
//
//    PortlandRoastingCoffee = L.geoJson(data, {
//        onEachFeature: function (feature, layer) {
//            //            console.log(feature)
//            layer.bindPopup('<p><b>' + feature.properties.name_cafe + '</b><br /><em>' + feature.properties.name_roast + '</em></p>');
//            //            layer.cartodb_id = feature.properties.cartodb_id;
//        },
//        style: portlandRoastingStyle
//    }).addTo(map)
//
//});

//add layer controller 
