import Task from "./tasks.mjs";
import TaskManager from "./taskmanager.mjs";

export const Timer = {
	time: 1500,
	intervalID: null,

	startTimer() {
		this.intervalID = setInterval(this.timerLoop.bind(this), 1000);
	},

	stopTimer() {
		console.log("All done!");
    //So this should never come up on the web, but in node, intervalID is some funky object and this is how you get the id
    let primitiveID;
    if(this.intervalID[Symbol.toPrimitive]()) {
      primitiveID = this.intervalID[Symbol.toPrimitive]();
    } else {
      primitiveID = this.intervalID;
    }
    
		this.intervalID ? clearInterval(primitiveID) : null;
	},

	timerLoop() {
		if(TaskManager.taskStack.length <= 0) {
      this.stopTimer()
      console.log("HI");
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
	}
}
