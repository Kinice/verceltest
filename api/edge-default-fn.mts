// 案例 1：Edge + default 函数
export const config = { runtime: 'edge' };

export default function (req: Request): Response {
  return Response.json({
    case: 'edge-default-fn',
    method: req.method,
    url: req.url,
    runtime: 'edge',
  });
}
