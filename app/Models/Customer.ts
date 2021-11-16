import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public active: boolean
  @column()
  public alert: boolean
  @column()
  public firstName: string
  @column()
  public lastName: string
  @column()
  public phone?: string
  @column()
  public email?: string

  @column()
  public franchiseId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Franchise)
  public franchises: BelongsTo<typeof Franchise>
}
