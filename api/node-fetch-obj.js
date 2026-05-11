  // 案例 7：Node + Service Worker 风格 { fetch }
  module.exports = {
    async fetch(req) {
      return Response.json({
        case: 'node-fetch-obj',
        runtime: 'node',
        url: req.url,
      });
    },
  };
