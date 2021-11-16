import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Zipcodes extends BaseSchema {
  protected tableName = 'zipcodes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('zipcode')
      table.integer('franchise_id').unsigned().notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
