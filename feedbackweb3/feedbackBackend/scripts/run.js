const main = async () => {
    const FeedbackContract = await hre.ethers.getContractFactory('Feedback');
    const feedbackContract = await FeedbackContract.deploy();
    await feedbackContract.deployed();
    console.log("Contract deployed to:", feedbackContract.address);
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
  