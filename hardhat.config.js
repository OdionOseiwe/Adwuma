require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    hardhat: {},
    celo: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: ["20fdc71dc348f8ad561f3f3d4f168605853d66983c3efff9e7aa440c9ed85f5e"]
    }
  },
  etherscan: {
    apiKey: {celo: "488ZSIVA1ZSDCQCU66FTBI7TEGC7NNGVVF"},
    customChains: [
      {
        network: "celo",
        chainId: 44787,
        urls: {
          apiURL: "https://alfajores-forno.celo-testnet.org",
          browserURL: "https://alfajores.celoscan.io/"
        }
      }
    ],
  },

  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  sourcify: {
    enabled: true,
  },
};
