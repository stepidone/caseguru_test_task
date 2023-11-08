import * as Joi from 'joi';

const loginSchema = Joi.string();
const passwordSchema = Joi.string().regex(/^(?=.*[.,!_])[A-Za-z\d.,!_]{6,}$/);

export const signUpSchema = Joi.object({
  login: loginSchema.required(),
  password: passwordSchema.required(),
  fio: Joi.string().alphanum().max(1000).required(),
});

export const signInSchema = Joi.object({
  login: loginSchema.required(),
  password: passwordSchema.required(),
});
