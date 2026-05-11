  // 案例 5：Node + 经典 (req, res)
  module.exports = function (req, res) {
    res.json({
      case: 'node-classic',
      method: req.method,
      url: req.url,
      runtime: 'node',
    });
  };
