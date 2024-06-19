const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {

  // const USDT = m.contract("USDT",[], {
  // });

  const Skillswap = m.contract("SkillSwap",["0xFbba553bd8a051EA83D4Ac145b00c5F3827E2335"], {
  });

  return {Skillswap };
});

// skillswap 0xec275C9a85436AE22D760b94184b424C24fC24bF
// USDT 0xFbba553bd8a051EA83D4Ac145b00c5F3827E2335