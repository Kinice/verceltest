  // 案例 6：Node + Web Handler（default 函数返回 Response）
  module.exports = async function (req) {
    return Response.json({
      case: 'node-default-web',
      runtime: 'node',
      method: req.method,
      url: req.url,
    });
  };
