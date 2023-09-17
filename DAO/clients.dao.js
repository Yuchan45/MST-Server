const db = require('../models');


class ClientsDAO {
	static async loginClient(_case_number) {
		// try {
		// 	const clientData = await ClientModel.findOne({
		// 		where: { case_number: _case_number },
		// 		include: {
		// 			model: ContractModel,
		// 			as: 'clientContract',
		// 			attributes: ['name'],
		// 		},
		// 	});

		// 	if (!clientData) {
		// 		throw new Error(`Client not found! Case number: ${_case_number}`);
		// 	}
		// 	const clientInstance = new Client(
		// 		clientData.id,
		// 		clientData.contract_id,
		// 		clientData.case_number
		// 	);
		// 	const contract = new Contract(0, clientData.clientContract.name);
		// 	clientInstance.setId(clientData.id);
		// 	clientInstance.setContract(contract);

		// 	return clientInstance;
		// } catch (err) {
		// 	throw new Error(`Details: ${err}`);
		// }
	}

	static async createClient(contract_type_id, case_number) {
		// try {
		// 	const [client, created] = await ClientModel.findOrCreate({
		// 		where: { case_number: case_number },
		// 		defaults: { contract_type_id, case_number },
		// 	});

		// 	if (!created) {
		// 		throw new Error(
		// 			`This client already exist! case_number: ${case_number}`
		// 		);
		// 	}

		// 	const clientInstance = new Client(
		// 		client.id,
		// 		client.contract_type_id,
		// 		client.case_number
		// 	);

		// 	return clientInstance;
		// } catch (error) {
		// 	throw new Error(error);
		// }
	}
}

module.exports = { ClientsDAO }
