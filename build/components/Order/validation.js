"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class OrderValidation
 * @extends Validation
 */
class OrderValidation extends validation_1.default {
    /**
     * Creates an instance of OrderValidation.
     * @memberof OrderValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IOrderModel} params
     * @returns {Joi.ValidationResult}
     * @memberof OrderValidation
     */
    createOrder(params) {
        const schema = Joi.object().keys({
            products: Joi.array().items(Joi.string()).required(),
            owner: Joi.string().required()
        });
        return schema.validate(params);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof OrderValidation
     */
    getOrder(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof OrderValidation
     */
    removeOrder(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new OrderValidation();
//# sourceMappingURL=validation.js.map