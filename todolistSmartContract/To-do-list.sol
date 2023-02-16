//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TodoList {
    address public owner;
    uint public taskCount = 0;
    uint public completeCount = 0;
    uint public incompleteCount = 0;
    
    struct Task {
        uint id;
        string content;
        bool completed;
        uint priority;
        address assignee;
    }
    
    mapping(uint => Task) public tasks;
    mapping(uint => uint) public taskIndexes;
    
    event TaskCreated(uint id, string content, bool completed, uint priority, address assignee);
    event TaskCompleted(uint id, bool completed);
    event TaskDeleted(uint id);
    event TaskUpdated(uint id, string content, uint priority, address assignee);
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }
    
    function createTask(string memory _content, uint _priority, address _assignee) public {
        require(_priority >= 1 && _priority <= 3, "Priority must be between 1 and 3");
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false, _priority, _assignee);
        taskIndexes[taskCount] = incompleteCount + 1;
        incompleteCount ++;
        emit TaskCreated(taskCount, _content, false, _priority, _assignee);
    }
    
    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        require(_task.id != 0, "Task does not exist");
        if (!_task.completed) {
            completeCount ++;
            incompleteCount --;
        } else {
            completeCount --;
            incompleteCount ++;
        }
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }
    
    function deleteTask(uint _id) public {
        Task memory _task = tasks[_id];
        require(_task.id != 0, "Task does not exist");
        if (_task.completed) {
            completeCount --;
        } else {
            incompleteCount --;
        }
        delete tasks[_id];
        taskCount--;
        emit TaskDeleted(_id);
    }
    
    function updateTask(uint _id, string memory _content, uint _priority, address _assignee) public {
        Task memory _task = tasks[_id];
        require(_task.id != 0, "Task does not exist");
        require(_priority >= 1 && _priority <= 3, "Priority must be between 1 and 3");
        if (_task.completed) {
            completeCount --;
        } else {
            incompleteCount --;
        }
        _task.content = _content;
        _task.priority = _priority;
        _task.assignee = _assignee;
        tasks[_id] = _task;
        emit TaskUpdated(_id, _content, _priority, _assignee);
    }
    
    function getIncompleteTasks() public view returns (Task[] memory) {
        Task[] memory _tasks = new Task[](incompleteCount);
        uint index = 0;
        for (uint i = 1; i <= taskCount; i++) {
            Task memory _task = tasks[i];
            if (!_task.completed) {
                _tasks[index] = _task;
                index ++;
            }
        }
        return _tasks;
    }
    
    function getCompleteTasks() public view returns (Task[] memory) {
          Task[] memory _tasks = new Task[](completeCount);
        uint index = 0;
        for (uint i = 1; i <= taskCount; i++) {
            Task memory _task = tasks[i];
            if (_task.completed) {
                _tasks[index] = _task;
                index ++;
            }
        }
        return _tasks;
    }
}
