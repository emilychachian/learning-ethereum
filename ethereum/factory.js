import web3 from './web3'; 
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x41a4882F61f9aFBe45fAEA1Fb64C6e2a9a0867e1'
);

export default instance; 