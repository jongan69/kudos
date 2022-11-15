import '@ethersproject/shims';
import {ethers} from 'ethers';
import {Buffer} from 'buffer';
import { FAVOR_CONTRACT } from "@env"
import FavorABI from './artifacts/FavorsContractV2_metadata.json'

global.Buffer = global.Buffer || Buffer;

const providerUrl = 'https://rpc.ankr.com/eth'; // Or your desired provider url

const getChainId = async () => {
  try {
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const networkDetails = await ethersProvider.getNetwork();
    return networkDetails;
  } catch (error) {
    return error;
  }
};

const getAccounts = async key => {
  try {
    const wallet = new ethers.Wallet(key);
    const address = await wallet.address;
    return address;
  } catch (error) {
    return error;
  }
};

const getBalance = async key => {
  try {
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);
    const balance = await wallet.getBalance();

    return balance;
  } catch (error) {
    return error;
  }
};

const sendTransaction = async key => {
  try {
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);

    const destination = '0x8FB135b5892b9b26f3De16c454718fdA9dAa9EA0';

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther('0.001');

    // Submit transaction to the blockchain
    const tx = await wallet.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: '5000000000', // Max priority fee per gas
      maxFeePerGas: '6000000000000', // Max fee per gas
    });

    return tx;
  } catch (error) {
    return error;
  }
};

const signMessage = async key => {
  try {
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);

    const originalMessage = 'YOUR_MESSAGE';

    // Sign the message
    const signedMessage = await wallet.signMessage(originalMessage);

    return signedMessage;
  } catch (error) {
    return error;
  }
};

const getAllIncompleteFavors = async () => {
  try {
    const provider = new ethers.getDefaultProvider(providerUrl);
    const signer = provider.getSigner();
    const FavorContract = new ethers.Contract(FAVOR_CONTRACT, FavorABI.abi, signer);
    let allFavors = await FavorContract.getAllIncompleteFavors(); 
    return allFavors;
  } catch (error) {
    console.log(error)
  }
}

export default {
  getChainId,
  getAccounts,
  getBalance,
  sendTransaction,
  signMessage,
  getAllIncompleteFavors
};