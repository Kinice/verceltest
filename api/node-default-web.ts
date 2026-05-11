// 案例 6：Node + Web Handler（default 函数返回 Response）
// 预期：Vercel 较新版本支持
export default async function (req: Request): Promise<Response> {
  return Response.json({
    case: 'node-default-web',
    runtime: 'node',
    method: req.method,
    url: req.url,
  });
}
