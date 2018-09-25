const assert = require('assert');
const Web3 = require('web3');
const providerUrl = "http://172.17.0.1:8545";
var web3=new Web3(new Web3.providers.HttpProvider(providerUrl)); // or web3 = new Web3('http://localhost:8545');

const { interface, bytecode } = require('../compile');
let abi = JSON.parse(interface); let data = "0x"+bytecode;

let me, accounts, inbox;
const INITIAL_STRING = "ABC";
const NEW_STRING = "XYZ";

beforeEach( async ()=>{

	// Get me
	me = await web3.eth.getCoinbase(); //web3.eth.getAccounts().then(f => { console.log(f); });

	// Get accounts
	accounts = await web3.eth.getAccounts();

	// Deploy
	inbox = await new web3.eth
			.Contract(abi /*, address*/)
			.deploy({ data : data, arguments : [INITIAL_STRING] })
			.send ( { from : me, gas : '500000' });

} );

describe("Inbox\n", () => {
	it("can grab coinbase", ()=>{ 
		console.log("eth_coinbase", me, "\n");
	});
	it("deploys the smart contract", ()=>{
		assert.ok(inbox);
	});
	it("deploys the contract with address", ()=>{
		assert.ok(inbox.options.address);
		console.log("\ncontract_address", inbox.options.address);
	});
	it("has a default message after deploy", async ()=>{
		const msg = await inbox.methods.message().call();
		assert.equal(msg, INITIAL_STRING, "The initial str is not right!");
	});
	it("cat change the default message to a new one after deploy", async ()=>{
		await inbox.methods.setMessage(NEW_STRING).send({from:me});
		const msg = await inbox.methods.message().call();
		assert.equal(msg, NEW_STRING, "The new string is not right!");
	});
});
