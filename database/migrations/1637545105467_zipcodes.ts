import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Zipcodes extends BaseSchema {
  protected tableName = 'zipcodes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('zipcode_id')
      table.integer('zipcode').unsigned()
      table.integer('franchise_id').references('franchise_id').inTable('franchises').unsigned()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
