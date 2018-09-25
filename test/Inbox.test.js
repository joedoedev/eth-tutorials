const assert = require('assert');
const Web3 = require('web3');
const providerUrl = "http://172.17.0.1:8545";
var web3=new Web3(new Web3.providers.HttpProvider(providerUrl)); // or web3 = new Web3('http://localhost:8545');

let me, accounts;

beforeEach( async ()=>{
	me = await web3.eth.getCoinbase(); //web3.eth.getAccounts().then(f => { console.log(f); });
} );

describe("Inbox\n", () => {
	it("is capable of deploying contracts", ()=>{ 
		console.log("eth_coinbase", me, "\n");
	})
});
