import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Package from 'App/Models/Package'

export default class PackagesController {
  public async index({}: HttpContextContract) {
    return await Package.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ params, response }: HttpContextContract) {
    try {
      return await Package.findByOrFail('package_id', params.id)
    } catch (error) {
      response.status(404).json({ msg: `No package matching the ID# ${[params.id]}` })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
