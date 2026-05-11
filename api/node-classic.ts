// 案例 5：Node + 经典 (req, res)（Vercel 默认）
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  res.json({
    case: 'node-classic',
    method: req.method,
    url: req.url,
    runtime: 'node',
  });
}
