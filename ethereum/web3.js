import Web3 from 'web3'; 

let web3;

//checking if we're in the browser or server. 
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { 
    //we're in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else { 
    // we are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8f4967edad594700b342ab7f3bd2ae7c'
    );
    web3 = new Web3(provider);
}

export default web3; 