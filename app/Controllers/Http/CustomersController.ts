import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async index({ response }: HttpContextContract) {
    const data = await Database.from('customers')
      // .select('customers.id,')
      .join('franchises', 'franchises.id', 'franchise_id')
    response.status(200).json(data)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
