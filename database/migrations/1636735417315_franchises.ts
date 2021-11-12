import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Franchises extends BaseSchema {
  protected tableName = 'franchises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
 */
