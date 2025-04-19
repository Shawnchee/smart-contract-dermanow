# Charity Milestone DAO Staking Project

This project demonstrates a decentralized application for managing charity milestones with staking and voting mechanisms. It includes a smart contract, deployment scripts, and tests.

## Features
- Create and manage charity milestones.
- Stake ETH and earn rewards.
- Vote to release funds for milestones.
- Donate directly or via staking rewards.

## Prerequisites
- Node.js and npm installed.
- Hardhat installed globally or locally in the project.
- A `.env` file with the following variables:
  ```
  SEPOLIA_URL=<Your_Sepolia_RPC_URL>
  PRIVATE_KEY=<Your_Private_Key>
  ```

## Installation
1. Clone the repository:
   ```shell
   git clone <repository_url>
   cd smartContract
   ```
2. Install dependencies:
   ```shell
   npm install
   ```

## Deployment Guide
### Deploying the Contract
1. Compile the smart contracts:
   ```shell
   npx hardhat compile
   ```
2. Deploy the contract to the Sepolia network:
   ```shell
   npx hardhat run scripts/deploy.js --network sepolia
   ```
   Alternatively, you can deploy using `deploy1.js` for a different set of milestones:
   ```shell
   npx hardhat run scripts/deploy1.js --network sepolia
   ```

### Post-Deployment
- The deployment script logs the contract address. Save this address for interacting with the contract.
- Optionally, save the ABI and address for frontend integration (uncomment the relevant section in the deployment scripts).

## Testing
Run the tests to ensure the contract behaves as expected:
```shell
npx hardhat test
```

## Hardhat Tasks
Try running some of the following tasks:
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## Additional Notes
- The project uses Hardhat Ignition for managing deployments.
- Customize the deployment scripts (`deploy.js` and `deploy1.js`) to suit your use case.
- The `CharityMilestoneDAOStaking` contract includes staking, voting, and milestone management functionalities.
