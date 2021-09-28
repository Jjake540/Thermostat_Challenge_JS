'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this.isMinimumTempreature()) {
      return;
    }
    this.temperature += 1
  }
  down() {
    if (this.isMinimumTempreature()) {
      return;
    }
    this.temperature -= 1
  }
  
  isMinimumTempreature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true; 
  }

  isMaximumTempreature() {
    if(this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
}
