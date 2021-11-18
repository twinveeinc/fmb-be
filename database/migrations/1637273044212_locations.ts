import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
  protected tableName = 'locations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('city_name')
      table.string('zipcode')
      table.integer('franchise_id').references('id').inTable('franchises').unsigned()
      table.integer('package_id').references('id').inTable('packages').unsigned()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
