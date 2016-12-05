import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import logger from 'morgan'
import chalk from 'chalk'
import errorHandler from 'errorhandler'
import dotenv from 'dotenv'
import path from 'path'
import expressValidator from 'express-validator'
import expressStatusMonitor from 'express-status-monitor'
import multer from 'multer'
import apiRoutes from './api'
import cors from 'cors'

// Load environment variables from .env file
dotenv.load({ path: '.env' })

// Create express server
const app = express()
// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 5000)
app.use(expressStatusMonitor())
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

app.use(express.static(path.join(__dirname, 'app/build')))
app.use('static', express.static(path.join(__dirname, 'app/build/static')))

// apply the routes to our application
app.use('/api', apiRoutes(app))

// Error handler 
app.use(errorHandler())  

app.listen(app.get('port'), () => {
	console.log(chalk.green('✓'), 'CORS-enabled')
	console.log('%s App is running at http://localhost:%d in %s mode', 
  	chalk.green('✓'), app.get('port'), app.get('env')) 
})

export default app
