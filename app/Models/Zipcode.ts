import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Zipcode extends BaseModel {
  @column({ isPrimary: true })
  public zipcode_id: number

  @column()
  public zipcode: number

  @column()
  public franchiseId: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Franchise, {
    foreignKey: 'franchiseId',
  })
  public franchises: BelongsTo<typeof Franchise>
}
