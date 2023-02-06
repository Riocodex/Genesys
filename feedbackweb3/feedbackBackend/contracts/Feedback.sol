//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
//0x94Fa44A0e6F9C11279B5D6aA0522D1713AC320BD

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

    function payMeEth()public payable{
        require(msg.value > 0, "cant buy coffee with 0 eth..:(");
    }

    function returnFeedbacks() public view returns(FeedbackMessage[] memory){
        return feedbacks;
    }
}
