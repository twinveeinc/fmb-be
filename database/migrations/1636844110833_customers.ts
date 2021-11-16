import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('active').notNullable().unsigned().defaultTo(1)
      table.string('alert').unsigned().defaultTo(0)
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email')
      table.string('phone')
      table.integer('franchise_id').references('id').inTable('franchises').unsigned()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
