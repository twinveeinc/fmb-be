import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class FranchisesController {
  public async index({ request, response, params }: HttpContextContract) {
    const data = await Franchise.query().preload('zipcodes')

    response.send(data)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ response, params }: HttpContextContract) {
    const [data] = await Zipcode.query().where('zipcode', params.id)

    const zipcodeMatcher = data
      ? { franchiseAvailable: true, zipcode: data.zipcode }
      : { franchiseAvailable: false, zipcode: null }

    response.status(200).json(zipcodeMatcher)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
