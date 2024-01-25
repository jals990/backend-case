import * as UseCase from '../useCases/index';

class LogController {
  
  async filter(req, res) {
    try {
      const result = await UseCase.logFilter.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };
 
}

export default new LogController();
