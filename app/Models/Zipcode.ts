import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Zipcode extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public zipcode: number

  @column()
  public franchiseId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Franchise)
  public franchises: BelongsTo<typeof Franchise>
}
