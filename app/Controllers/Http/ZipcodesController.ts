import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'
import docs from '../docs/zipcode'

export default class ZipcodesController {
  /**
   * @swagger
   * /api/v1/zipcodes:
   *  get:
   *     tags:
   *      - Zipcodes
   *     security:
   *      - bearerAuth: []
   *     summary: Returns a list of all zipcodes
   *     parameters:
   *       - name: limit
   *         description: limits the number of records returned for paging
   *         in: query
   *         required: false
   *         type: string
   *       - name: page
   *         description: The page of results to be returned
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: Successs
   *       500:
   *        description: Server response error
   */

  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const items = await Database.from('zipcodes').paginate(page, limit)
    response.status(200).json({
      items,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  /**
   * @swagger
   * /api/v1/zipcode/:zicode:
   *  get:
   *     tags:
   *      - Franchisee by Zipcode
   *     security:
   *      - bearerAuth: []
   *     summary: Returns a list of all zipcodes
   *     produces:
   *      - application/json
   *     parameters:
   *       - name: limit
   *         description: limits the number of records returned for paging
   *         in: query
   *         required: false
   *         type: string
   *       - name: page
   *         description: The page of results to be returned
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: Successs
   *       500:
   *        description: Server response error
   */
  public async show({ request, response, params }: HttpContextContract) {
    const [data] = await Zipcode.query().preload('franchises').where('zipcode', params.id)

    if (!data) {
      response.status(404)
      return { message: 'No Franchise available for the zipcode' }
    }
    response.status(200).json(data)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
