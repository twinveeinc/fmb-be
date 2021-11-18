import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Franchises extends BaseSchema {
  protected tableName = 'franchises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('city')
      table.integer('owner_id').references('id').inTable('owners').unsigned()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
