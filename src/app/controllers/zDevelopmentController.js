import * as UseCase from '../useCases/index';

class DevelopmentController {
  async dev(req, res) {
    try {
      const result = await UseCase.zDev.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(400).json({ success: false, message: err })
    }
  };
}

export default new DevelopmentController();
