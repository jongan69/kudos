import React, { useState } from 'react';
import { AppContext } from '../context/AppProvider';
import { Text } from 'react-native'
import { Card } from 'react-native-paper'
import Graph from './Graph';
import { Buffer } from "buffer";
import "@ethersproject/shims";
import { ethers } from "ethers";

export default function WalletOverview() {

  const [userInfo, setUserInfo] = useState("");
  const [console, setConsole] = useState("");
  const providerUrl = "https://rpc.ankr.com/eth"; // Or your desired provider url

  const uiConsole = (...args) => {
    setConsole(JSON.stringify(args || {}, null, 2) + "\n\n\n\n" + console);
  };

  // Refresh Balance -> Button
  const getBalance = async () => {
    try {
      setConsole("Fetching balance");
      const ethersProvider = ethers.getDefaultProvider(providerUrl);
      const wallet = new ethers.Wallet(key, ethersProvider);
      const balance = await wallet.getBalance();
      uiConsole(balance);
    } catch (e) {
      uiConsole(e);
    }
  };

  // Send Money -> Form
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
      uiConsole(tx);
    } catch (e) {
      uiConsole(e);
    }
  };

  // Form -> Sign A Message
  const signMessage = async () => {
    try {
      setConsole("Signing message");
      const ethersProvider = ethers.getDefaultProvider(providerUrl);
      const wallet = new ethers.Wallet(key, ethersProvider);

      const originalMessage = "YOUR_MESSAGE";

      // Sign the message
      const signedMessage = await wallet.signMessage(originalMessage);

      uiConsole(signedMessage);
    } catch (e) {
      uiConsole(e);
    }
  };

  const { currentWalletAddress, setCurrentWalletAddress } = React.useContext(AppContext);
  return (
    <Card>

      {/* { Need to Make 1. Sign Message Form Component } */}
      {/* { Need to Make 2. Balance Display Component } */}
      {/* { Need to Make 3. Receive Money Display Component } */}
      {/* { Need to Make 4. Send Money Display Component } */}
      <Graph />
    </Card>
  );
}