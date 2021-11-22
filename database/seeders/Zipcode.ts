import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Zipcode from 'App/Models/Zipcode'

export default class ZipcodeSeeder extends BaseSeeder {
  public async run() {
    await Zipcode.createMany([
      {
        zipcode: 34987,
        franchiseId: 2,
      },
      {
        zipcode: 34953,
        franchiseId: 2,
      },
      {
        zipcode: 34982,
        franchiseId: 1,
      },
    ])
  }
}
