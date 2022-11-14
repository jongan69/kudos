# Kudos - Give to get

-----

A full stack monorepo with

- React Native
- Nextjs
- Web3Auth
- Solidity
- Chainlink VRF
- Filecoin NFT.storage

built under The Chainlink 2022 Hackathon <https://devpost.com/software/kudos-bzion8>

## KUDOS TOKEN CONTRACT ADDRESS (GOERLI): 0x7f7A1D2196A6817bBF075f32C55128876F4E79AA

## FAVORS CONTRACT ADDRESS (GOERLI): 0x6b326076F6D0ee9dBEF72a80f825FABB35C9762B

[Remix](https://remix.ethereum.org/#url=https://docs.chain.link/samples/VRF/VRFD20.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)

-----

Mobile: <https://exp.host/@jongan69/kudos>

Web: <https://kudos-taupe.vercel.app/sign-in>

## Setup

1. Create Nhost Account at <https://app.nhost.io/>
2. Create Web3Auth.io Account at <https://dashboard.web3auth.io/>
3. Copy into credentials .env and constant.js
   Note: `WEB_API_ROUTES` would be the URL of the deployed nextjs app ie: vercel
4. yarn install inside the root and web directories

### For smart contract functionality

   1. Receive Test Link from <https://faucets.chain.link/>
   2. Create and Fund a VRF Subscription at <https://vrf.chain.link/>
   3. Deploy the `contracts/Favors.sol` via <https://remix.ethereum.org/>
   4. Add Favor Contract Address to .env file

## Usage

`yarn ios` - Run iOS App

`yarn android` - Run Android App

`yarn web` - Start Nextjs app

### Features

- Built using Web3auth
- Has nhost for Graph QL DB if needed
- Has Nextjs App for API
- File Reading Functions
- Has Smart Contract for Favor Posting, Retrieving, Completing, and payment

in a new `.env`
   backendUrl: "YOUR_NHOST_BACKEND_URL",

in `App.js`
  clientStorageType: "expo-secure-storage",

To Run Nextjs App:
  `yarn web` in root directory

### To do

1. Configure Storage of user data using local storage
2. Finish Smart Contract Functions
3. Configure Smart Contract Function Calls via React Native App:

Message Signing

`
const signMessage = async () => {
    try {
      setConsole("Signing message");
      const ethersProvider = ethers.getDefaultProvider(providerUrl);
      const wallet = new ethers.Wallet(key, ethersProvider);
      const originalMessage = "YOUR_MESSAGE";
      // Sign the message
      const signedMessage = await wallet.signMessage(originalMessage);
      console.log(signedMessage)
    } catch (e) {
      console.log(e)
    }
  };
`

Transaction Sending

`
const sendTransaction = async () => {
    try {
      setConsole("Sending transaction");
      const ethersProvider = ethers.getDefaultProvider(providerUrl);
      const wallet = new ethers.Wallet(key, ethersProvider);
      const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";
      // Convert 1 ether to wei
      const amount = ethers.utils.parseEther("0.001");
      // Submit transaction to the blockchain
      const tx = await wallet.sendTransaction({
        to: destination,
        value: amount,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      console.log(tx)
    } catch (e) {
      console.log(e)
    }
  };
`
