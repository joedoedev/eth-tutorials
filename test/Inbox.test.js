const assert = require('assert');
const Web3 = require('web3');
const providerUrl = "http://172.17.0.1:8545";
var web3=new Web3(new Web3.providers.HttpProvider(providerUrl)); // or web3 = new Web3('http://localhost:8545');

const { interface, bytecode } = require('../compile');
let abi = JSON.parse(interface); let data = "0x"+bytecode;

let me, accounts, inbox;

beforeEach( async ()=>{

	// Get me
	me = await web3.eth.getCoinbase(); //web3.eth.getAccounts().then(f => { console.log(f); });

	// Get accounts
	accounts = await web3.eth.getAccounts();

	// Deploy
	inbox = await new web3.eth
			.Contract(abi /*, address*/)
			.deploy({ data : data, arguments : ['ABC'] })
			.send ( { from : me, gas : '500000' });

} );

describe("Inbox\n", () => {
	it("can grab coinbase", ()=>{ 
		console.log("eth_coinbase", me, "\n");
	});
	it("deploys the smart contract", ()=>{
		console.log(inbox);
	});
});
