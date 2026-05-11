// 案例 2：Edge + async default 函数
export const config = { runtime: 'edge' };

export default async function (req: Request): Promise<Response> {
  return Response.json({
    case: 'edge-async-fn',
    runtime: 'edge',
    headers: Object.fromEntries(req.headers.entries()),
  });
}
