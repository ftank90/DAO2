
//https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades#proxies-tests 

//test the upgraded boxV2 contract before deploying and replacing it with V1 

const { expect } = require("chai");

describe("Box", function() {
  it('works', async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

    const value = await upgraded.value();
    expect(value.toString()).to.equal('42');
  });
});