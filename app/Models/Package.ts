import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Package extends BaseModel {
  @column({ isPrimary: true })
  public package_id: number

  @column()
  public active: boolean

  @column()
  public name: string

  @column()
  public subName: string

  @column()
  public price: string

  @column()
  public priceSqFt: string

  @column()
  public special: string

  @column()
  public discount: string

  @column()
  public term: string

  @column()
  public notes: string

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
