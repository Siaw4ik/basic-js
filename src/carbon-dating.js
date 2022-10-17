const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if(Number.isNaN(+sampleActivity) || typeof sampleActivity !== 'string' || (+sampleActivity < 1) || (+ sampleActivity > MODERN_ACTIVITY)) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  }

  

}

module.exports = {
  dateSample
};
