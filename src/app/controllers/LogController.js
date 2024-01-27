import * as UseCase from '../useCases/index';

class LogController {
  
  async filter(req, res) {
    try {
      const result = await UseCase.logFilter.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };
 
}

export default new LogController();
