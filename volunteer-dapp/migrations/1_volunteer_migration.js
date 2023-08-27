const volunteer = artifacts.require("volunteer");

module.exports = function (deployer) {
    deployer.deploy(volunteer);
};
