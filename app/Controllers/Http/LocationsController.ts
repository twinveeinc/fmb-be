import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Location from 'App/Models/Location'

export default class LocationsController {
  public async index({}: HttpContextContract) {
    // return await Database.from('franchises')
    //   .select('*')
    //   .join('locations as l', 'l.franchise_id', '=', 'l.franchise_id')
    //   .join('packages as p', 'l.package_id', '=', 'p.package_id')

    return await Franchise.query().preload('locations', (q) => q.where('franchise_id', 1))
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
