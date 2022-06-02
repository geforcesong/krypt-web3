require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/JHTBQPby1_F_eJDboQ6SlKeKnMrvFkQx",
      accounts: [
        "df282f7d6f63ee2373f7e3a9486b2964f2743c856dfd5ccc47eeaac7a3856afd",
      ],
    },
  },
};
