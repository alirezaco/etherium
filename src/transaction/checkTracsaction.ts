import Web3 from 'web3';
import { web3_config } from '../config/config';

export default class CheckTracsaction {
  async checkTrancaction(token: string): Promise<Boolean> {
    const web3_http: Web3 = new Web3(
      new Web3.providers.HttpProvider(
        web3_config.web3_url_http + web3_config.projectId,
      ),
    );
    const receipt = await web3_http.eth.getTransaction(token);

    return !receipt;
  }
}
