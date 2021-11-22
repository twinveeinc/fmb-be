import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Owner from 'App/Models/Owner'

export default class OwnerSeeder extends BaseSeeder {
  public async run() {
    await Owner.createMany([
      {
        first_name: 'bruno',
        last_name: 'paula',
      },
      {
        first_name: 'john',
        last_name: 'doe',
      },
    ])
  }
}
