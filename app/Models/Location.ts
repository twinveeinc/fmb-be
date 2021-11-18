import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Package from './Package'
import Franchise from './Franchise'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public city_name: string

  @column()
  public zipcode: string

  @column()
  public franchiseId: string

  @column()
  public packageId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Package)
  public packages: HasMany<typeof Package>

  @belongsTo(() => Franchise)
  public franchises: BelongsTo<typeof Franchise>
}
