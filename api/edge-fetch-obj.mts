// 案例 3：Edge + Service Worker 风格 { fetch }
export const config = { runtime: 'edge' };

export default {
  async fetch(req: Request): Promise<Response> {
    return Response.json({
      case: 'edge-fetch-obj',
      runtime: 'edge',
      url: req.url,
    });
  },
};
