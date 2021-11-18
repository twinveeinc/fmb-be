import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Owner extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public first_name: string

  @column()
  public last_name: string

  // @column()
  // public address: string

  // @column()
  // public address2: string

  // @column()
  // public city: string

  // @column()
  // public state: string

  // @column()
  // public zipcode: number

  // @column()
  // public alert: boolean

  // @column()
  // public comment: string

  // @column()
  // public email: string

  // @column()
  // public phone: string

  // @column()
  // public phone1: string

  // @beforeCreate()
  // public static async createUUID(model: Owner) {
  //   model.owner_id = uuid()
  // }

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Franchise, {
    localKey: 'owner_id',
  })
  public franchises: BelongsTo<typeof Franchise>
}
