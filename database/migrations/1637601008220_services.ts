import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
  protected tableName = 'services'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('service_id').primary()
      table.boolean('active').defaultTo(0)
      table.string('title')
      table.text('image_url')
      table.string('price')
      table.string('description')
      table.text('notes')
      table.boolean('estimate_required').defaultTo(1)
      table.boolean('primary')
      table.boolean('flat_rate')
      table.integer('franchise_id').references('franchise_id').inTable('franchises')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
