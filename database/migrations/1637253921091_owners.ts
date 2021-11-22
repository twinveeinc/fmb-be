import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Owners extends BaseSchema {
  protected tableName = 'owners'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('owner_id')
      table.string('first_name')
      table.string('last_name')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
