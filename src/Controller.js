import Task from "./task";
import { TaskManager } from "./taskmanager";
import { Text } from "react-native";

// const taskManager = new TaskManager

export default {
    createTask: (taskName) => {
        let task = new Task(taskName, 20);
        TaskManager.addTask(task)
    },

    getAllTasks: () => {
        return (<Text>This is a Task</Text>)
    }
}