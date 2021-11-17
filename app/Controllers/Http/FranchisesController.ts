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
    // const [data] = await Zipcode.query().where('zipcode', params.id)
    const data = await Zipcode.findBy('zipcode', params.id)

    if (!data) {
      response.status(404)
      return {
        message: ' No franchise available for this zipcode',
        franchise_available: false,
        zipcode: params.id,
      }
    }
    const [company] = await Franchise.query().where('id', data.franchiseId)
    const combinedResponse = {
      franchise_available: true,
      zipdode: data.zipcode,
      city: company.name,
      franchise_id: company.id,
    }
    return combinedResponse
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
