import { Router } from 'express'
import fs from 'fs';

export default (app) => {

	let apiRoutes = Router();

	apiRoutes.get('/', (req, res) => {
		res.json({
			version: 1
		});
	}); 	

	apiRoutes.get('/company', (req, res) => {
		fs.readFile( __dirname + '/MOCK_DATA.json', 'utf8', (err, data) => {
			if (err) throw err; 
			return res.json(JSON.parse(data));
		});
	});


	return apiRoutes;
}
