import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Franchises extends BaseSchema {
  protected tableName = 'franchises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('franchise_id')
      table.string('name')
      table.string('city')
      table.integer('franchise_owners_id').references('owner_id').inTable('owners').unsigned()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
