import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Franchise from 'App/Models/Franchise'

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
    return await Franchise.all()
  }

  public async test({}: HttpContextContract) {
    return await Franchise.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
