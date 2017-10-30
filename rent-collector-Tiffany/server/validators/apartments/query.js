
/* eslint-disable consistent-return, no-param-reassign, no-console */

import joi from 'joi';

const schema = {
  page: joi.number().default(1),
  limit: joi.number().default(10),
  filter: joi.object().keys({
    bedrooms: { $eq: joi.number(), $gte: joi.number() },
    sqrft: { $eq: joi.number(), $gte: joi.number() },
    floor: { $eq: joi.number(), $gte: joi.number() },
    rent: { $eq: joi.number(), $lte: joi.number() },
    renter: { $ne: joi.string(), $eq: joi.string() },
  }),
  sort: joi.object(),
};

module.exports = (req, res, next) => {
  const result = joi.validate(req.query, schema);

  if (result.error) {
    res.status(400).send({ messages: result.error.details.map(d => d.message) });
  } else {
    res.locals = result.value;
    res.locals.skip = (res.locals.page - 1) * res.locals.limit;
    next();
  }
};
