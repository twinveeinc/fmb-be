import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Owner from 'App/Models/Owner'

export default class OwnersController {
  public async index({}: HttpContextContract) {
    // return await Database.from('owners as o')
    //   .select('*')
    //   .join('franchises as f', (q) => {
    //     q.on('o.owner_id', '=', 'f.owner_id')
    //   })

    return await Owner.query().preload('franchises')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
