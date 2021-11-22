import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Owner from 'App/Models/Owner'

export default class OwnerSeeder extends BaseSeeder {
  public async run() {
    await Owner.createMany([
      {
        firstName: 'bruno',
        lastName: 'paula',
      },
      {
        firstName: 'john',
        lastName: 'doe',
      },
    ])
  }
}
