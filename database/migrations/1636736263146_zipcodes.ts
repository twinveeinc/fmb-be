import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Zipcodes extends BaseSchema {
  protected tableName = 'zipcodes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('zipcode')
      table
        .string('franchise_id')
        .unsigned()
        .references('id')
        .inTable('franchises')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
