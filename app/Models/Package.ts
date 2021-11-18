import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Location from './Location'

export default class Package extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public package_name: string

  @column()
  public term: string

  @column()
  public price: string

  @column()
  public descriptions: string

  @column()
  public price_by_sqft: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Location, { localKey: 'packages_id' })
  public franchises: BelongsTo<typeof Location>
}
