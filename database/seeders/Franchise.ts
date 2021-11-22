import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Franchise from 'App/Models/Franchise'

export default class FranchiseSeeder extends BaseSeeder {
  public async run() {
    await Franchise.createMany([
      {
        name: 'FMB of Fort Piece',
        city: 'Fort Piece',
        franchiseOwnersId: 1,
      },
      {
        name: 'FMB of Port st Lucie',
        city: 'Port St Lucie',
        franchiseOwnersId: 2,
      },
    ])
  }
}
