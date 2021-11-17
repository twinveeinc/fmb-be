import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class ZipcodesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const data = await Database.from('zipcodes').paginate(page, limit)
    response.status(200).json({
      data,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ request, response, params }: HttpContextContract) {
    const [data] = await Zipcode.query().preload('franchises').where('zipcode', params.id)

    if (!data) {
      response.status(404)
      return { message: 'No Franchise available for the zipcode' }
    }
    response.status(200).json(data)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
