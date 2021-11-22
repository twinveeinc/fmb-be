import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public serviceId: number

  @column()
  public active: boolean

  @column()
  public name: string

  @column()
  public title: string

  @column()
  public price: string

  @column()
  public description: string

  @column()
  public notes: string

  @column()
  public imageUrl: string

  @column()
  public estimateRequired: boolean

  @column()
  public primary: boolean

  @column()
  public flatRate: boolean

  @column()
  public franchiseId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Franchise, {
    foreignKey: 'franchiseId',
  })
  public franchises: BelongsTo<typeof Franchise>
}
