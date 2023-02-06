//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract Feedback {
    struct FeedbackMessage {
        address sender;
        string message;
    }

    FeedbackMessage[] public feedbacks;

    function sendFeedback(string memory message) public {
        FeedbackMessage memory feedbackMessage = FeedbackMessage({
            sender: msg.sender,
            message: message
        });

        feedbacks.push(feedbackMessage);
    }
}
