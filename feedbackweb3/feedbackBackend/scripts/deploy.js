const main = async () => {
    const FeedbackContract = await hre.ethers.getContractFactory('Feedback');
    const feedbackContract = await FeedbackContract.deploy();
    await feedbackContract.deployed();
    console.log("Contract deployed to:", feedbackContract.address);

    const money = {value: hre.ethers.utils.parseEther("10")};
    //user accounts
    const [owner, tipper, tipper2, tipper3 , tipper4 ] = await hre.ethers.getSigners();

    
  
    await feedbackContract.connect(tipper).sendFeedback('excellent app bro',"rio");
    await feedbackContract.connect(tipper2).sendFeedback('nice',"david");
    await feedbackContract.connect(tipper3).sendFeedback('tatakaye',"eren");
    await feedbackContract.connect(tipper4).sendFeedback('bokuwa kira',"light");

    let feedbackArray = await feedbackContract.returnFeedbacks();

    for (let i = 0; i < feedbackArray.length; i++) {
        console.log(feedbackArray[i])
    }
    console.log("yo what")
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
  