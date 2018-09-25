const assert = require('assert');
const Web3 = require('web3');
const providerUrl = "http://172.17.0.1:8545";
web3=new Web3(new Web3.providers.HttpProvider(providerUrl)); // or web3 = new Web3('http://localhost:8545');
