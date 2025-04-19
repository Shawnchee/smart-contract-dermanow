const hre = require("hardhat");

async function main() {
  // Replace with real committee wallet addresses
  const committee = ["0x483bF34b4444dB73FB0b1b5EBDB0253A4E8b714f", "0x5A2108c92d1429172F70d899AEe3d011fa4891CE"];

  // Compile and deploy the contract
  const Charity = await hre.ethers.getContractFactory("CharityMilestoneDAOStaking");
  const contract = await Charity.deploy(committee);

  await contract.waitForDeployment();

  console.log("✅ Contract deployed to:", contract.target);

  // Create multiple milestones
  const milestones = [
    {
      description: "Land Preparation and Surveying",
      serviceProvider: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", // valid
      targetAmount: hre.ethers.parseEther("0.05"),
    },
    {
      description: "Foundation and Structural Work",
      serviceProvider: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", // valid
      targetAmount: hre.ethers.parseEther("0.1"),
    },
    {
      description: "Electrical and Plumbing Installation",
      serviceProvider: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", // valid
      targetAmount: hre.ethers.parseEther("0.07"),
    },
    {
      description: "Painting and Furnishing",
      serviceProvider: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", // valid
      targetAmount: hre.ethers.parseEther("0.03"),
    },
    {
      description: "School Supplies and Equipment",
      serviceProvider: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", // valid
      targetAmount: hre.ethers.parseEther("0.02"),
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
