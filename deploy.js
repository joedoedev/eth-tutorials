const fs = require('fs');
// const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const providerUri = "http://172.17.0.1:8545";

const INITIAL_STRING = "ABC";

// const mnemonic = fs.readFileSync('mnemonic.txt','utf-8').split("\n")[0];
// const provider = new HDWalletProvider(mnemonic,providerUrl,0,2); // const provider = providerUri;
// '0x48cd1Dc417167a202856E172dFF1B76F9Af78321',
// '0xFEAd357A1BAAde00A4f737D264Ed0b7B1715355C'
const provider = providerUri;

let abi = JSON.parse(interface); let data = "0x"+bytecode;

var web3 = new Web3(provider);

/*deploy = */
(async ()=>{
	inbox = await new web3.eth
			.Contract(abi /*, address*/)
			.deploy({ data : data, arguments : [INITIAL_STRING] })
			.send ( { from : await web3.eth.getCoinbase(), gas : '500000' });
	console.log("Contract deployed:", index.options.address);
})();
// deploy();
