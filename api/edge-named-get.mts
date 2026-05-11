// 案例 4：Edge + 命名导出 GET（App Router 风格）
// 预期：Vercel API Routes 不支持，应当 405 或 fail
export const config = { runtime: 'edge' };

export function GET(req: Request): Response {
  return Response.json({
    case: 'edge-named-get',
    runtime: 'edge',
  });
}
