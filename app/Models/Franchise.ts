import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Zipcode from './Zipcode'
import Customer from './Customer'

export default class Franchise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Zipcode)
  public zipcodes: HasMany<typeof Zipcode>

  @hasMany(() => Customer)
  public customers: HasMany<typeof Customer>
}
