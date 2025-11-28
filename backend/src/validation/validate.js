import { ZodError } from 'zod';

const validate = (schema) => async (req, res, next) => {
  try {
    if (schema?.body) {
      req.body = await schema.body.parseAsync(req.body);
    }

    if (schema?.query) {
      req.query = await schema.query.parseAsync(req.query);
    }

    if (schema?.params) {
      req.params = await schema.params.parseAsync(req.params);
    }

    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    return next(error);
  }
};

export default validate;
