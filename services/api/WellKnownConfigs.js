import axios from 'axios';
import oktaAuthConfig from '../../.config.js'

export default {
	getWellKnownConfigs(subdomain) {
		const path = 'https://' + oktaAuthConfig.udp_api + '/api/configs/' + subdomain  + '/bod/.well-known/default-setting';
		return axios.get(path)
		.then((res) => {
			var result = {
				issuer: '',
				base_url: '',
				client_id: '',
				redirect_uri: '',
				client2_id: ''
			};
			const data = res.data;
			if (Object.keys(data).length > 0) {
				result.issuer=data.issuer || '';
				result.base_url=data.okta_org_name || '';
				result.client_id=data.client_id || '';
				result.redirect_uri=data.redirect_uri || '';
				result.client2_id=data.settings.client2_id || '';
			}
			return result;
		})
		.catch((err)=>{
			return false;
		});
	}
}

