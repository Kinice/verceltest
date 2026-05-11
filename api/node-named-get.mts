// 案例 8：Node + 命名导出 GET
export function GET(req: Request): Response {
  return Response.json({
    case: 'node-named-get',
    runtime: 'node',
  });
}
