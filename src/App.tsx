import React from "react";
import "./App.css";
import DevelopmentRoadmap from "./components/DevelopmentRoadmap";
import Exclusive from "./components/Exclusive/Exclusive";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Specs from "./components/Specs/Specs";
import Welcome from "./components/Welcome/Welcome";
import CustomizedAccordions from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import OurTeam from "./components/OurTeam/OurTeam";
import Guests from "./components/Guests/Guests";

import { FC, useMemo } from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

export const network = process.env
  .REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

export const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);

export const txTimeout = 30000; // milliseconds (confirm this works for your project)

function App() {
  // const changeURL = window.location.replace(
  //   "https://discord.gg/heroesofthemetaverse"
  // );
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );
  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets}>
        <WalletDialogProvider>
          <div className="App">
            <Navbar />
            <div className="banner">
              <Button className="mint-btn" text="VIEW ON OPENSEA" />
            </div>
            <Welcome />
            <Exclusive />
            <Guests />
            <Roadmap />
            <DevelopmentRoadmap />
            <Specs />
            <OurTeam />
            <CustomizedAccordions />
            <div className="party-never">
              <h2>The Universe awaits you !</h2>
              <h1>Become a hero with Us! Join our Discord</h1>
              <a
                className="external-discord"
                href="https://discord.gg/heroesofthemetaverse"
                target="_blank"
              >
                LET'S START
              </a>
            </div>
            <Footer />
          </div>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
