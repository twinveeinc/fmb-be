import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class ZipcodesController {
  public async index({ response }: HttpContextContract) {
    const data = await Zipcode.all()
    response.status(200).json({
      count: data.length,
      data,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ request, response, params }: HttpContextContract) {
    // const [data] = await Database.from('zipcodes').where('zipcode', params.id)
    const data = await Zipcode.query()
      .preload('franchises')
      .where('zipcode', params.id)
      .firstOrFail()
    const res = data ? data : { message: 'No Franchise available for the zipcode' }

    try {
      response.status(200).json(data)
    } catch (error) {
      response.status(404).json({ error, message: 'No Franchise available for the zipcode' })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
