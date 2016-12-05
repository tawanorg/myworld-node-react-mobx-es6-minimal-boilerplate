# Node with React, Mobx, ES6 minimal boilerplate in My World (Real World)

I would like to have one single server with nodejs/express 
but reactjs as frontend library. I've modified the other stack and re build in my way

And I find Redux is over complicated with small application like medium size website.
Then Mobx is implemented.
 

# Installation 
Obviously, I would like to have same port, but i'll imporve it later on. 

### Development
- cd to folder
	1. npm install
	2. npm run dev 
		http://localhost:5000/api (Open this page for backend-end development)

- run api server
	3. cd app 
	4. npm install
	5. yarn start (sudo npm install -g yarn)
		http://localhost:3000/ (Open this page for front-end development)

### Production
- build server
	1. npm run build
- build client
	2. cd app 
	3. npm run build
- run server
	1. npm start
	
### open http://localhost:5000/ (Client & Server side integrated in same port)

### Deployment
I'm interesting in using "Now" https://zeit.co/now#whats-now, follow installation instructure.
1. now

### Routes
 - API (Backend)
 	- http://localhost:5000/api (Index)
 	- http://localhost:5000/api/company (Dummy JSON)
 - Client (FrontEnd)
 	- http://localhost:3000

## Thanks credit
 - https://github.com/facebookincubator/create-react-app