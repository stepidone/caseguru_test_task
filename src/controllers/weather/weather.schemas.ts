import * as Joi from 'joi';

export const getCurrentWeatherSchema = Joi.object({
  apiToken: Joi.string().required(),
  city: Joi.string().required(),
  language: Joi.string().valid('ru').optional(),
});
