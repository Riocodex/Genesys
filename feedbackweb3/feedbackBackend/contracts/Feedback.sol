//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract Feedback {
    struct FeedbackMessage {
        address sender;
        uint256 timeStamp;
        string name;
        string message;
    }

    FeedbackMessage[] public feedbacks;

    function sendFeedback(string memory _message, string memory _name) public {
        FeedbackMessage memory feedbackMessage = FeedbackMessage({
            sender: msg.sender,
            timeStamp: block.timestamp,
            name: _name,
            message: _message
        });

        feedbacks.push(feedbackMessage);
    }
}
