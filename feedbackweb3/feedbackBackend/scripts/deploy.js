const main = async () => {
    const FeedbackContract = await hre.ethers.getContractFactory('Feedback');
    const feedbackContract = await FeedbackContract.deploy();
    await feedbackContract.deployed();
    console.log("Contract deployed to:", feedbackContract.address);

    const money = {value: hre.ethers.utils.parseEther("10")};
    //user accounts
    const [owner, tipper, tipper2, tipper3 , tipper4 ] = await hre.ethers.getSigners();

    
  
    let feedbackTxn = await feedbackContract.sendFeedback()
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  