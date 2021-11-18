import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
// import Franchise from 'App/Models/Franchise'
import Zipcode from 'App/Models/Zipcode'

export default class ZipcodesController {
  /**
   * @swagger
   * /api/v1/zipcodes:
   *  get:
   *     tags:
   *      - Zipcode
   *     security:
   *      - bearerAuth: []
   *     summary: All Franchises
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
   *       401:
   *         description: Unauthorized access "Api Token Required"
   *       500:
   *         description: Server Error
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
   * /api/v1/zipcode/{zipcode}:
   *  get:
   *     tags:
   *      - Zipcode
   *     security:
   *      - bearerAuth: []
   *     summary: Franchise By Zipcode - Details
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
   *       500:
   *         description: Server Error
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
