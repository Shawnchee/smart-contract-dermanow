const hre = require("hardhat");

async function main() {
  // Replace with real committee wallet addresses
  const committee = [
    "0x483bF34b4444dB73FB0b1b5EBDB0253A4E8b714f",
    "0xcDdAb279c5F6736541b7DFBFD353C0d224D45378"
  ];

  // Compile and deploy the contract
  const Charity = await hre.ethers.getContractFactory("CharityMilestoneDAOStaking");
  const contract = await Charity.deploy(committee);

  await contract.waitForDeployment();

  console.log("✅ Contract deployed to:", contract.target);

  // Create realistic milestones related to a food catering service
  const milestones = [
    {
      description: "Providing Nutritious Breakfast Meals for Children",
      serviceProvider: "0x483bF34b4444dB73FB0b1b5EBDB0253A4E8b714f", // valid food service provider
      targetAmount: hre.ethers.parseEther("0.05"),
    },
    {
      description: "Delivering Healthy Lunch Meals to Schools",
      serviceProvider: "0xcDdAb279c5F6736541b7DFBFD353C0d224D45378", // valid food service provider
      targetAmount: hre.ethers.parseEther("0.1"),
    },
    {
      description: "Providing Snacks and Drinks During After-School Programs",
      serviceProvider: "0x483bF34b4444dB73FB0b1b5EBDB0253A4E8b714f", // valid food service provider
      targetAmount: hre.ethers.parseEther("0.07"),
    },
  ];

  for (let i = 0; i < milestones.length; i++) {
    const { description, serviceProvider, targetAmount } = milestones[i];
    console.log(`🚀 Creating milestone ${i + 1}: ${description}...`);
    const tx = await contract.createMilestone(description, serviceProvider, targetAmount);
    await tx.wait();
    console.log(`✅ Milestone ${i + 1} created!`);
  }

  // // Optional: Save ABI + address for frontend use
  // const fs = require("fs");
  // const contractAddress = contract.target;
  // const contractABI = JSON.parse(
  //   fs.readFileSync("./artifacts/contracts/CharityMilestoneDAOStaking.sol/CharityMilestoneDAOStaking.json", "utf8")
  // ).abi;

  // fs.writeFileSync(
  //   "./frontend/constants/contractDetails.json",
  //   JSON.stringify({ address: contractAddress, abi: contractABI }, null, 2)
  // );

  // console.log("📦 Contract details written to frontend/constants/contractDetails.json");
}

main().catch((error) => {
  console.error("❌ Error deploying contract:", error);
  process.exitCode = 1;
});
