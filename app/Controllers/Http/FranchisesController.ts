import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class FranchisesController {
  /**
   * @swagger
   * /api/v1/franchise/{zipcode}:
   *  get:
   *     tags:
   *      - Franchise
   *     security:
   *      - bearerAuth: []
   *     summary: Franchise avalibility by Zipcode
   *     parameters:
   *       - name: zipcode
   *         description: zipcode is required to match a franchise
   *         in: path
   *         required: true
   *         type: integer
   *
   *     responses:
   *       200:
   *         description: Successs
   *       401:
   *         description: Unauthorized access "Api Token Required"
   *       404:
   *         description: Unauthorized access "Api Token Required"
   *       500:
   *         description: Server Error
   */
  public async index({}: HttpContextContract) {
    return Franchise.query()
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      return await Franchise.findByOrFail('franchise_id', params.id)
    } catch (error) {
      return response.status(404).json({ msg: `Franchise not found with the ID# ${params.id}` })
    }
  }

  public async availabity({ params, response }: HttpContextContract) {
    try {
      const data = await Zipcode.findByOrFail('zipcode', params.zipcode)
      return {
        franchiseAvilable: true,
        zipode: data.zipcode,
      }
    } catch (error) {
      return response.status(404).json({
        msg: `Franchise not available with zipcode ${params.zipcode}`,
        franchiseAvilable: false,
        zipcode: Number(params.zipcode),
      })
    }
  }
  public async details({ response, params }: HttpContextContract) {
    try {
      return Franchise.query().preload('zipcodes').preload('packages').preload('services')
    } catch (error) {
      return response.status(404).json({
        msg: `Franchise not available with zipcode ${params.zipcode}`,
        franchiseAvilable: false,
        zipcode: Number(params.zipcode),
      })
    }
  }
  public async create({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
