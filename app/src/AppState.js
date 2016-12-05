import { observable } from 'mobx'
import 'whatwg-fetch'
// import * as Utils from './utils';

export default class AppState {
	@observable posts = []
	@observable isLoading = false;

	 

	loadData() {
		this.isLoading = true
		fetch('http://localhost:5000/api/company')	
		.then(response => response.json())
		.then(response => {
			setTimeout(() => { 
				this.posts = response
				this.isLoading = false
	    	}, 1000);
		})
		.catch(error => {
			console.log(error)
		})
	}

}