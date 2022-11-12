# Kuods - Give to get

Mobile: <https://exp.host/@jongan69/kudos>

Web: <https://kudos-taupe.vercel.app/sign-in>

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

To Run React + Node Express:
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
