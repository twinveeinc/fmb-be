import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Package from 'App/Models/Package'

export default class PackageSeeder extends BaseSeeder {
  public async run() {
    await Package.createMany([
      {
        name: 'The DIY boater',
        subName: '1 time, try us out',
        term: 'once',
        price: '199.99',
        priceSqFt: '7.96',
        discount: '',
        notes: 'notes',
        active: true,
      },
      {
        name: 'The Sandbar Hopper',
        subName: '6 per year (bi-monthly',
        term: 'monthly',
        price: '87.50',
        priceSqFt: '3.20',
        discount: '',
        notes: 'notes',
        active: true,
        franchiseId: 1,
      },
      {
        name: 'The Sportsman',
        subName: '12 per year (monthly)',
        term: 'montlhly',
        price: '185.00',
        priceSqFt: '7.40',
        discount: '',
        notes: 'notes',
        active: true,
        franchiseId: 1,
      },

      {
        name: 'The Weekend Warrior',
        subName: '24 per year (bi-weekly)',
        term: 'montlhly',
        price: '350.00',
        priceSqFt: '14.00',
        discount: '',
        notes: 'notes',
        active: true,
        franchiseId: 1,
      },
    ])
  }
}
