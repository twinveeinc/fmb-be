/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Hello FMB v1 API'
})

// AUTH
Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.post('/revoke', 'AuthController.revoke')
}).prefix('/api/v1/auth')

// Franchise
Route.group(() => {
  Route.get('/franchises', 'FranchisesController.index')
  Route.get('/franchise/available/:zipcode', 'FranchisesController.availabity')
  Route.get('/franchise/details', 'FranchisesController.details')
  Route.get('/franchise/:id', 'FranchisesController.show')
}).prefix('/api/v1/')
// .middleware('auth')

// Packages
Route.group(() => {
  Route.get('/packages', 'PackagesController.index')
  Route.get('/package/:id', 'PackagesController.show')
}).prefix('/api/v1/')
// .middleware('auth')

// Zipcode
Route.group(() => {
  Route.get('/zipcodes', 'ZipcodesController.index')
  Route.get('/zipcode/:zipcode', 'ZipcodesController.show')
}).prefix('/api/v1/')

//Owner Controller
Route.group(() => {
  Route.get('/owners', 'OwnersController.index')
  Route.get('/owner/:id', 'OwnersController.show')
}).prefix('/api/v1/')
// .middleware('auth')

//Location Controller
Route.group(() => {
  Route.get('/locations', 'LocationsController.index')
  Route.get('/location/:zipcode', 'LocationsController.show')
}).prefix('/api/v1/')
// .middleware('auth')

// Customer
Route.group(() => {}).prefix('/api/v1/')
