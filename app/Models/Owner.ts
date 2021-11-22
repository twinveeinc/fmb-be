import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Franchise from './Franchise'

export default class Owner extends BaseModel {
  @column({ isPrimary: true })
  public ownerId: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public franchiseOwnersId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Franchise, {
    foreignKey: 'franchiseId',
  })
  public franchises: HasMany<typeof Franchise>
}
