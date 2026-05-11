// 案例 7：Node + Service Worker 风格 { fetch }
export default {
  async fetch(req: Request): Promise<Response> {
    return Response.json({
      case: 'node-fetch-obj',
      runtime: 'node',
      url: req.url,
    });
  },
};
