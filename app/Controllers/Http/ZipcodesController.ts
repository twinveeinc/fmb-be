import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class ZipcodesController {
  public async index({}: HttpContextContract) {
    return Zipcode.query().preload('franchises')
  }

  public async create({}: HttpContextContract) {}

  public async show({ params, response }: HttpContextContract) {
    const data = await Zipcode.query()
      .preload('franchises')
      .where('zipcode', params.zipcode)

      .first()

    console.log(data)

    if (!data) {
      response.status(404).json({ msg: `Franchise not available with zipcode ${params.zipcode}` })
    } else {
      return data
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
