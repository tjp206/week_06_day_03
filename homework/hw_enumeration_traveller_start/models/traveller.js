const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const firstLocation = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return firstLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const lastLocation = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return lastLocation;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const myTravel = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return myTravel;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const myTravel = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return myTravel;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const myTravel = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
  return myTravel;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const myTravel = this.journeys.map((journey) => {
    return journey.transport;
  });
  const newTravel = new Set(myTravel); // gets rid of any duplicate values
  console.log(newTravel);
  return Array.from(newTravel); // takes Set & turns it back into array
};


module.exports = Traveller;
