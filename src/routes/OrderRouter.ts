import { Router } from 'express';
import { OrderComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/orders
 *
 * @swagger
 * /v1/categorie-products:
 *   get:
 *     description: Get all stored orders in Database
 *     tags: ["orders"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Users'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', OrderComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/products
 *
 * @swagger
 * /v1/orders:
 *   post:
 *      description: Create new Order
 *      tags: ["orders"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderSchema'
 *            example:
 *              categorie: Shoes
 *              unit_price: 80
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UserSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', OrderComponent.create);


router.get('/:id', OrderComponent.findOne);

/**
 * @export {express.Router}
 */
export default router;
