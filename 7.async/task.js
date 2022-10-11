class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
    }
    if (this.alarmCollection.find(clock => clock.id === id)) {
      return console.error('Будильник с таким id уже существует');
    }
    return this.alarmCollection.push({
      id,
      time,
      callback
    });
  }

  removeClock(id) {
    let tempAlarmCollection = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
    return tempAlarmCollection > this.alarmCollection;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    let checkClock = (clock) => {
      let time = this.getCurrentFormattedTime();
      if (clock.time === time) {
        return clock.callback();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 5000);
    }
    return;
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник № ${clock.id} заведен на ${clock.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock(`09:00`, () => console.log('Пора вставать'), 1);
  phoneAlarm.addClock(`09:01`, () => {
    console.log('Давай, вставай уже!');
    phoneAlarm.removeClock(2)
  }, 2);

  phoneAlarm.addClock(`09:02`, () => {
    console.log('Иди умывайся!');
    phoneAlarm.stop();
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms()
  }, 3);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();