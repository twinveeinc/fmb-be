import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Packages extends BaseSchema {
  protected tableName = 'packages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('package_id').primary()
      table.boolean('active').defaultTo(1)
      table.string('name').notNullable()
      table.string('sub_name').notNullable()
      table.string('price').notNullable()
      table.string('price_sq_ft')
      table.string('discount')
      table.string('term')
      table.string('notes')
      table
        .integer('franchise_id')
        .references('franchise_id')
        .inTable('franchises')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
