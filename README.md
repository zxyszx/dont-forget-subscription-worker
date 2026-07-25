# 别忘订阅 - Cloudflare Workers

共享会员车位管理 + 续费提醒 + 财务利润分析系统的 Cloudflare Workers MVP。

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zxyszx/dont-forget-subscription-worker)

## 功能

- Workers 原生部署，无服务器运维。
- 首页仪表盘、订阅卡片、财务 KPI、即将到期提醒。
- `/api/summary` 和 `/api/subscriptions` mock API，后续可平滑接入 D1。
- Cron Trigger 入口已预留，可用于 Telegram 到期提醒扫描。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 部署

```bash
pnpm install
pnpm deploy
```

也可以点击上方 `Deploy to Cloudflare` 按钮，从 GitHub 仓库一键导入到 Cloudflare Workers。

## API

- `GET /`：仪表盘页面。
- `GET /api/summary`：KPI 汇总。
- `GET /api/subscriptions`：订阅与成员车位列表。
- `GET /api/health`：健康检查。

## 后续接 D1

当前版本为可直接部署的 mock 数据 MVP。接入 D1 时建议新增：

- `subscriptions`
- `seats`
- `members`
- `memberships`
- `finance_entries`
- `reminder_rules`
- `notification_settings`
- `notification_logs`

然后把 `src/index.ts` 中的 `SUBSCRIPTIONS` 替换为 D1 查询。
