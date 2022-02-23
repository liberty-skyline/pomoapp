//import Task from "./task.js";
//import { TaskManager } from "./taskmanager.js";

/*export */const Timer = {
	time: 1500,
	intervalID: null,
  timerRunning: false,

	startTimer() {
    if(TaskManager.getTask()) {
      this.intervalID = setInterval(this.timerLoop.bind(this), 1000);
      this.timerRunning = true;
    } else {
      return undefined;
    }
	},

	stopTimer() {
		console.log("All done!");
    //So this should never come up on the web, but in node, intervalID is some funky object and this is how you get the id
    /*let primitiveID;
    if(this.intervalID[Symbol.toPrimitive]()) {
      primitiveID = this.intervalID[Symbol.toPrimitive]();
    } else {
      primitiveID = this.intervalID;
    }*/
    
		this.intervalID ? clearInterval(this.intervalID) : null;
    this.timerRunning = false;
	},

	timerLoop() {
		if(TaskManager.taskStack.length <= 0) {
      this.stopTimer()
      return;
		} else {
			if(this.time <= 0) {
				this.runBreak();
				this.time = 1500;
				return;
			} else {
				TaskManager.updateTasks();
				this.time--;
			}
		}
	},

	runBreak() {
		//setTimeout or something that takes 5 min + other funcs
		console.log("Break done!");
	},
  
  getCurrentProgress() {
    if(this.timerRunning && TaskManager.getTask()) {
      let left = TaskManager.getTask().timeLeft;
      let total = TaskManager.getTask().duration;
      return Math.round(((total - left) / total) * 100);
    } else {
      return undefined;
    }
  }
  
}
