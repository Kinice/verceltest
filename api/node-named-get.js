  // 案例 8：Node + 命名导出 GET
  exports.GET = function (req) {
    return Response.json({
      case: 'node-named-get',
      runtime: 'node',
    });
  };
