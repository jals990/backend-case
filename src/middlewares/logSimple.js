import * as Repository from '../app/repository/index';

export default async (req, res, next) => {

  await Repository.log.create({
    obj: {
      headers: req.rawHeaders,
      body: req.body
    },
  });
  
  return next();

};
