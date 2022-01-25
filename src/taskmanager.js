import Task from "./task.js";

export const TaskManager = {
	taskStack: [],
	idCount: 0,
	addTask(task) {
		if(!(task instanceof Task)) {
			throw new Error("task must be of type Task");
		} else {
			task.id = this.idCount;
			this.idCount++;
			this.taskStack.push(task);
			this.resetIds();
		}
	},

	removeTask(identifier=null) {
		if(identifier) {
			const type = typeof identifier;
			if(type == "number" || type == "string") {
				this.taskStack.every((task)=>{
					if(task.id == identifier || task.name == identifier) {
						const index = this.taskStack.indexOf(task);
						this.taskStack.splice(index, 1);
						this.resetIds();
						return false
					} else {
						return true;
					}
				});
			} else {
				throw new Error("identifier not of type 'number' or 'string'");
			}

		} else {
			this.taskStack.shift();
			this.resetIds();
		}
	},
	
	updateTasks() {
		this.taskStack[0].timeLeft -= 1;

		this.taskStack[0].timeLeft <= 0 ? this.taskFinished() : null;
	},

	taskFinished() {
		//run task finished funcs
		this.removeTask();
	},

	resetIds() {
		let idIndex = 0;
		for(let i=0; i < this.taskStack.length;i++) {
			this.taskStack[i].id = idIndex;
			idIndex++;
		}
		this.idCount = idIndex;
	},

	removeAllTasks() {
		this.taskStack = [];
	},

	getTask(identifier) {
		if(identifier) {
			const type = typeof identifier;
			if(type == "number") {
				try {
					return this.taskStack[identifier];
				} catch(e) {
					throw new Error(`No task with id ${identifier} found`);
				}
			} else if(type == "string") {
				for(let i=0; i < this.taskStack.length; i++) {
					if(this.taskStack[i].name == identifier) {
						return this.taskStack[i];
					}
				}
				throw new Error(`${identifier} not found`);
			} else {
				throw new Error("identifier not of type 'number' or 'string'");
			}
		} else {
			return this.taskStack[0];
		}
	},

	getAllTasks() {
		return this.taskStack;
	}
	
}