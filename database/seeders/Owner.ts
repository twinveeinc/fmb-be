import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Owner from 'App/Models/Owner'

export default class OwnerSeeder extends BaseSeeder {
  public async run() {
    await Owner.createMany([
      {
        firstName: 'bruno',
        lastName: 'paula',
        phone: '772-489-1222',
        email: 'aol@aol.com',
      },
      {
        firstName: 'john',
        lastName: 'doe',
        phone: '772-489-1223',
        email: 'aol22@aol.com',
      },
    ])
  }
}
