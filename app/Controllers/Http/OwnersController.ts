import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Franchise from 'App/Models/Franchise'

import Owner from 'App/Models/Owner'

export default class OwnersController {
  public async index({}: HttpContextContract) {
    // return await Database.from('owners as o')
    //   .select('*')
    //   .join('franchises as f', (q) => {
    //     q.on('o.owner_id', '=', 'f.owner_id')
    //   })

    return await Owner.query().preload('franchises', (q) =>
      q.where('franchises.franchise_owners_id', 1)
    )
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ params, response }: HttpContextContract) {
    const t = await Franchise.query().preload('owners').where('franchise_owners_id', params.id)

    return t

    // try {
    //   return Owner.query().withCount('*').preload('franchises')
    // } catch (error) {
    //   return response.status(404).json({
    //     msg: `Owner not found with ID# ${params.id}`,
    //   })
    // }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
