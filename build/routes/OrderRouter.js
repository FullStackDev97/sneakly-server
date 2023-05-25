"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
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
router.get('/', components_1.OrderComponent.findAll);
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
router.post('/', components_1.OrderComponent.create);
router.get('/:id', components_1.OrderComponent.findOne);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=OrderRouter.js.map