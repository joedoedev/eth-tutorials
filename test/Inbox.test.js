const assert = require('assert');
const Web3 = require('web3');
const providerUrl = "http://172.17.0.1:8545";
web3=new Web3(new Web3.providers.HttpProvider(providerUrl)); // or web3 = new Web3('http://localhost:8545');

beforeEach( ()=>{
	web3.eth.getCoinbase().then(me=>console.log(me));
	// web3.eth.getAccounts()
	// .then(f => {
	// 	console.log(f);
	// });

} );

describe('Inbox', () => {
	it('is capable of deploying contracts\n', ()=>{  })
});
