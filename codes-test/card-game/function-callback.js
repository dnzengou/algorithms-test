# 9. Micro-programme Javascript (un ou plusieurs fonctions) permettant de recevoir de 
# manière asynchrone les données d’un capteur de température et de les afficher en sortie aux cinq (5) secondes.
$$ source: https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/86 $$
        
function getTemp(callback) {
//lit la température du capteur et, une fois récupérée,
//appelle la callback avec la valeur.
}


function getTemp(){
    // route vers une variable de type charactere (tempStr) renvoyant la température de l'appareil en Celsius
    $.get('/temp', callback);
}

function callback(tempStr){
    console.info(`fonction temperature appelée`);
    serviceRequest.getTemp("Lieu", function(resp){
        if (resp['status'] === 'Y') {
            // succès 
            temp = parseFloat(tempStr).toFixed(2);         
            const msg = `Temperature au Lieu est ${resp['temp']} Celsius`;
            console.log(`Speech Response -- ${msg}`);
            g.refresh(temp);
            setTimeout(getTemp, 5000);
    } else{
        alert('Une erreur est survenue. Essayez plus tard svp.');
    }
}


function getTemp(agent) {
    const timeStart = new Date().getTime();
    console.info(`temp function called`);
    serviceRequest.getTemp("Lieu", function(resp){
        if (resp['status'] === 'Y') {
            // succès
            const msg = `Temperature au Lieu est ${resp['temp']} Celsius`;
            console.log(`Speech Response -- ${msg}`);
            agent.add(msg);
        } else {
            // Echec
            console.log(`Une erreur est survenue. Essayez plus tard svp.`);
        }
        const timeEnds = new Date().getTime();
        console.log("\nLe processus complet 'getTemp' a pris " + (timeEnds - timeStart) + " millisecondes.");
        console.log("------ Function temperature termine ici ------");
        
        // return our current value
        callback(SENSOR.getTemperature());
  });

// randomiser notre lecture de température toutes les 5s
setInterval(function() {

  SENSOR.getTemperature();

  // mettre à jour la valeur caractéristique afin que les appareils intéressés puissent être informés
  sensor.getService(Service.TemperatureSensor)
    sensor.setCharacteristic(Characteristic.CurrentTemperature, SENSOR.currentTemperature);

}, 5000);
}



var Accessory = require('../').Accessory;
var Service = require('../').Service;
var Characteristic = require('../').Characteristic;
var uuid = require('../').uuid;
var request = require("request");

// here is a fake temperature sensor device that we'll expose to HomeKit
var FAKE_SENSOR = {
  getTemperature: function() { 
    console.log("Getting the current temperature!");
    request("http://10.0.1.1:8080/json.htm?type=devices&rid=xxx", function(error, response, body) {
                    var regtemplate = new RegExp(/-?\d+\.\d+/g);
                    var regtemp= body.match(regtemplate);
                    console.log('RegExp result:');
                    console.log(regtemp[5]);
                var floattemp = parseFloat(regtemp[5]);
                console.log('called back:');
                console.log(floattemp)
                FAKE_SENSOR.currentTemperature = floattemp;
                    return FAKE_SENSOR.floattemp;
            });
  }
}


// Generate a consistent UUID for our Temperature Sensor Accessory that will remain the same
// even when restarting our server. We use the `uuid.generate` helper function to create
// a deterministic UUID based on an arbitrary "namespace" and the string "temperature-sensor".
var sensorUUID = uuid.generate('hap-nodejs:accessories:temperature-sensor');

// This is the Accessory that we'll return to HAP-NodeJS that represents our fake lock.
var sensor = exports.accessory = new Accessory('Test Temperature Sensor', sensorUUID);

// Add properties for publishing (in case we're using Core.js and not BridgedCore.js)
sensor.username = "C1:5D:3A:AE:5D:FA";
sensor.pincode = "031-45-154";

// Add the actual TemperatureSensor Service.
// We can see the complete list of Services and Characteristics in `lib/gen/HomeKitTypes.js`
sensor
  .addService(Service.TemperatureSensor)
  .getCharacteristic(Characteristic.CurrentTemperature)
  .on('get', function(callback) {

    // return our current value
    callback(FAKE_SENSOR.getTemperature());
  });

// randomize our temperature reading every 3 seconds
setInterval(function() {

  FAKE_SENSOR.getTemperature();

  // update the characteristic value so interested iOS devices can get notified
  sensor
    .getService(Service.TemperatureSensor)
    .setCharacteristic(Characteristic.CurrentTemperature, FAKE_SENSOR.currentTemperature);

}, 3000);

                                  
onRead: function(callback) {
    		console.log("Reading temperature outside");
    		fs = require('fs')
			fs.readFile('/home/username/hktmp.txt', 'utf8', function (err,data) {
  				if (err) {
    			        return console.log(err);
 					}
 				console.log(data);
 				var inttemp = parseFloat(data);
				console.log(inttemp)
  				callback(inttemp);
  			})


===============================================================


# 9. Micro-programme Javascript (un ou plusieurs fonctions) permettant de recevoir de 
# manière asynchrone les données d’un capteur de température et de les afficher en sortie aux cinq (5) secondes.
$$ source: https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/86 $$
        
function getTemp(callback) {
//lit la température du capteur et, une fois récupérée,
//appelle la callback avec la valeur.
}


function getTemp(){
    // route vers une variable de type charactere renvoyant la température de l'appareil en Celsius
    $.get('/temp', callback);
}

function callback(tempStr, status){
    if(status == 'success'){
        temp = parseFloat(tempStr).toFixed(2);
        g.refresh(temp);
        setTimeout(getTemp, 5000);
    } else{
        alert('Une erreur est survenue. Essayez plus tard svp.');
    }
}


function getTemp(agent) {
    const timeStart = new Date().getTime();
    console.info(`temp function called`);
    serviceRequest.getTemp("Lieu", function(resp){
        if (resp['status'] === 'Y') {
            // succès
            const msg = `Temperature au Lieu est ${resp['temp']} Celsius`;
            console.log(`Speech Response -- ${msg}`);
            agent.add(msg);
        } else {
            // Echec
            console.log(`Une erreur est survenue. Essayez plus tard svp.`);
        }
        const timeEnds = new Date().getTime();
        console.log("\nLe processus complet 'getTemp' a pris " + (timeEnds - timeStart) + " millisecondes.");
        console.log("------ Function temperature termine ici ------");
        
        // return our current value
        callback(SENSOR.getTemperature());
  });

// randomiser notre lecture de température toutes les 5s
setInterval(function() {

  SENSOR.getTemperature();

  // mettre à jour la valeur caractéristique afin que les appareils intéressés puissent être informés
  sensor.getService(Service.TemperatureSensor)
    sensor.setCharacteristic(Characteristic.CurrentTemperature, SENSOR.currentTemperature);

}, 5000);
}



var Accessory = require('../').Accessory;
var Service = require('../').Service;
var Characteristic = require('../').Characteristic;
var uuid = require('../').uuid;
var request = require("request");

// here is a fake temperature sensor device that we'll expose to HomeKit
var FAKE_SENSOR = {
  getTemperature: function() { 
    console.log("Getting the current temperature!");
    request("http://10.0.1.1:8080/json.htm?type=devices&rid=xxx", function(error, response, body) {
                    var regtemplate = new RegExp(/-?\d+\.\d+/g);
                    var regtemp= body.match(regtemplate);
                    console.log('RegExp result:');
                    console.log(regtemp[5]);
                var floattemp = parseFloat(regtemp[5]);
                console.log('called back:');
                console.log(floattemp)
                FAKE_SENSOR.currentTemperature = floattemp;
                    return FAKE_SENSOR.floattemp;
            });
  }
}


// Generate a consistent UUID for our Temperature Sensor Accessory that will remain the same
// even when restarting our server. We use the `uuid.generate` helper function to create
// a deterministic UUID based on an arbitrary "namespace" and the string "temperature-sensor".
var sensorUUID = uuid.generate('hap-nodejs:accessories:temperature-sensor');

// This is the Accessory that we'll return to HAP-NodeJS that represents our fake lock.
var sensor = exports.accessory = new Accessory('Test Temperature Sensor', sensorUUID);

// Add properties for publishing (in case we're using Core.js and not BridgedCore.js)
sensor.username = "C1:5D:3A:AE:5D:FA";
sensor.pincode = "031-45-154";

// Add the actual TemperatureSensor Service.
// We can see the complete list of Services and Characteristics in `lib/gen/HomeKitTypes.js`
sensor
  .addService(Service.TemperatureSensor)
  .getCharacteristic(Characteristic.CurrentTemperature)
  .on('get', function(callback) {

    // return our current value
    callback(FAKE_SENSOR.getTemperature());
  });

// randomize our temperature reading every 3 seconds
setInterval(function() {

  FAKE_SENSOR.getTemperature();

  // update the characteristic value so interested iOS devices can get notified
  sensor
    .getService(Service.TemperatureSensor)
    .setCharacteristic(Characteristic.CurrentTemperature, FAKE_SENSOR.currentTemperature);

}, 3000);

                                  
onRead: function(callback) {
    		console.log("Reading temperature outside");
    		fs = require('fs')
			fs.readFile('/home/username/hktmp.txt', 'utf8', function (err,data) {
  				if (err) {
    			        return console.log(err);
 					}
 				console.log(data);
 				var inttemp = parseFloat(data);
				console.log(inttemp)
  				callback(inttemp);
  			})

