class HealtCheck {

  async valid(_, res) {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: new Date().toISOString()
    };
    try {
      res.send(healthcheck);
    } catch (e) {
      healthcheck.message = e;
      res.status(503).send(healthcheck);
    }
  }
}

export default new HealtCheck();