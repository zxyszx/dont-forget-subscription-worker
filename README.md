# 别忘订阅 - Cloudflare Workers

共享会员车位管理 + 续费提醒 + 财务利润分析系统的 Cloudflare Workers MVP。V8.2 按 Cloudflare 控制台比例继续收紧字号、间距和布局密度。

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zxyszx/dont-forget-subscription-worker)

## 功能

- Workers 原生部署，无服务器运维。
- 纯白控制台布局、线性图标侧栏、顶部工具区、卡片化数据面板和响应式移动端。
- 订阅车位、订阅详情、新增订阅、成员管理、成员详情、移除关系弹窗。
- 到期提醒、续费日历、财务统计、Telegram 设置页面。
- `/api/summary` 和 `/api/subscriptions` mock API，后续可平滑接入 D1。
- `/api/members` mock API，便于后续接入成员关系表。
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

- `GET /`：订阅车位页面。
- `GET /subscriptions`：订阅车位页面。
- `GET /subscriptions/:id`：订阅详情页面。
- `GET /subscriptions/new`：新增订阅页面。
- `GET /members`：成员管理页面。
- `GET /members/:id`：成员详情页面。
- `GET /reminders`：到期提醒页面。
- `GET /calendar`：续费日历页面。
- `GET /finance`：财务统计页面。
- `GET /settings`：Telegram 与系统设置页面。
- `GET /api/summary`：KPI 汇总。
- `GET /api/subscriptions`：订阅与成员车位列表。
- `GET /api/members`：成员列表。
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
