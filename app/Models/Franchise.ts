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

import Owner from './Owner'
import Location from './Location'
import Zipcode from './Zipcode'
import Package from './Package'
import Service from './Service'

export default class Franchise extends BaseModel {
  @column({ isPrimary: true })
  public franchiseId: number

  @column()
  public name: string

  @column()
  public city: string

  @column()
  public franchiseOwnersId: number

  @belongsTo(() => Owner, {
    foreignKey: 'franchiseOwnersId',
  })
  public owners: BelongsTo<typeof Owner>

  @hasMany(() => Zipcode, {
    foreignKey: 'franchiseId',
    serializeAs: null,
  })
  public zipcodes: HasMany<typeof Zipcode>

  public serializeExtras() {
    return {
      zipcodess: this.zipcodes?.map((e) => e.zipcode),
    }
  }

  @hasMany(() => Package, {
    foreignKey: 'franchiseId',
  })
  public packages: HasMany<typeof Package>

  @hasMany(() => Service, {
    foreignKey: 'franchiseId',
  })
  public services: HasMany<typeof Service>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
