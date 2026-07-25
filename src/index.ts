export interface Env {
  APP_NAME: string;
  APP_VERSION: string;
}

type Member = {
  name: string;
  email: string;
  amount: number;
  dueDate: string;
  paid: boolean;
};

type Subscription = {
  id: string;
  platform: string;
  account: string;
  seatNo: string;
  capacity: number;
  cost: number;
  renewalDate: string;
  status: "正常" | "即将到期" | "已过期";
  members: Member[];
  color: string;
};

const SUBSCRIPTIONS: Subscription[] = [
  {
    id: "netflix",
    platform: "Netflix",
    account: "netflix@gmail.com",
    seatNo: "01号车位",
    capacity: 6,
    cost: 139,
    renewalDate: "2027-08-13",
    status: "正常",
    color: "#ef4444",
    members: [
      { name: "张三", email: "zhangsan@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { name: "李四", email: "lisi@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { name: "王五", email: "wangwu@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { name: "赵六", email: "zhaoliu@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { name: "钱七", email: "qianqi@example.com", amount: 40, dueDate: "2027-08-13", paid: false }
    ]
  },
  {
    id: "spotify",
    platform: "Spotify",
    account: "spotify@gmail.com",
    seatNo: "02号车位",
    capacity: 5,
    cost: 99,
    renewalDate: "2027-07-25",
    status: "正常",
    color: "#22c55e",
    members: [
      { name: "小明", email: "xiaoming@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { name: "小红", email: "xiaohong@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { name: "小刚", email: "xiaogang@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { name: "小美", email: "xiaomei@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { name: "小强", email: "xiaoqiang@example.com", amount: 24, dueDate: "2027-07-25", paid: true }
    ]
  },
  {
    id: "youtube",
    platform: "YouTube Premium",
    account: "youtube@gmail.com",
    seatNo: "03号车位",
    capacity: 5,
    cost: 179,
    renewalDate: "2026-06-30",
    status: "已过期",
    color: "#f97316",
    members: [
      { name: "大力", email: "dali@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { name: "大芳", email: "dafang@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { name: "大伟", email: "dawei@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { name: "大强", email: "daqiang@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { name: "大美", email: "damei@example.com", amount: 30, dueDate: "2026-06-30", paid: true }
    ]
  },
  {
    id: "chatgpt",
    platform: "ChatGPT Plus",
    account: "chatgpt@gmail.com",
    seatNo: "04号车位",
    capacity: 3,
    cost: 80,
    renewalDate: "2027-08-10",
    status: "正常",
    color: "#10b981",
    members: [
      { name: "阿辰", email: "achen@example.com", amount: 90, dueDate: "2027-08-10", paid: true },
      { name: "阿林", email: "alin@example.com", amount: 90, dueDate: "2027-08-10", paid: true }
    ]
  },
  {
    id: "disney",
    platform: "Disney+",
    account: "disney@gmail.com",
    seatNo: "05号车位",
    capacity: 4,
    cost: 83,
    renewalDate: "2027-09-01",
    status: "即将到期",
    color: "#2563eb",
    members: [
      { name: "小迪", email: "xiaodi@example.com", amount: 90, dueDate: "2027-09-01", paid: true },
      { name: "小尼", email: "xiaoni@example.com", amount: 90, dueDate: "2027-09-01", paid: true },
      { name: "小乐", email: "xiaole@example.com", amount: 90, dueDate: "2027-09-01", paid: false }
    ]
  }
];

function json(data: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...init?.headers
    }
  });
}

function money(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0
  }).format(value);
}

function getSummary() {
  const seats = SUBSCRIPTIONS.reduce((sum, item) => sum + item.capacity, 0);
  const used = SUBSCRIPTIONS.reduce((sum, item) => sum + item.members.length, 0);
  const income = SUBSCRIPTIONS.reduce(
    (sum, item) => sum + item.members.reduce((memberSum, member) => memberSum + member.amount, 0),
    0
  );
  const cost = SUBSCRIPTIONS.reduce((sum, item) => sum + item.cost, 0);
  const profit = income - cost;
  const unpaid = SUBSCRIPTIONS.flatMap((item) =>
    item.members
      .filter((member) => !member.paid)
      .map((member) => ({ platform: item.platform, member: member.name, dueDate: member.dueDate }))
  );

  return {
    subscriptionCount: SUBSCRIPTIONS.length,
    seats,
    used,
    empty: seats - used,
    income,
    cost,
    profit,
    profitRate: income === 0 ? 0 : profit / income,
    reminders: unpaid.length + SUBSCRIPTIONS.filter((item) => item.status !== "正常").length,
    unpaid
  };
}

function renderSubscription(item: Subscription): string {
  const income = item.members.reduce((sum, member) => sum + member.amount, 0);
  const profit = income - item.cost;
  const used = item.members.length;
  const statusClass = item.status === "正常" ? "ok" : item.status === "即将到期" ? "warn" : "danger";
  const memberChips = item.members
    .map(
      (member) =>
        `<span class="member" title="${member.email}"><span>${member.name.slice(0, 1)}</span>${member.name}</span>`
    )
    .join("");

  return `
    <article class="subscription-card">
      <div class="card-head">
        <div class="brand-mark" style="--brand:${item.color}">${item.platform.slice(0, 1)}</div>
        <div>
          <h3>${item.platform} <small>${item.seatNo}</small></h3>
          <p>主账号：${item.account}</p>
        </div>
        <span class="status ${statusClass}">${item.status}</span>
      </div>
      <div class="meta">
        <span>续费日 <strong>${item.renewalDate}</strong></span>
        <span>费用 <strong>${money(item.cost)} / 年</strong></span>
      </div>
      <div class="usage">
        <div class="bar"><span style="width:${(used / item.capacity) * 100}%"></span></div>
        <strong>${used} / ${item.capacity}</strong>
      </div>
      <div class="members">${memberChips}<button aria-label="添加车友">+</button></div>
      <div class="finance">
        <span>收入 <strong>${money(income)}</strong></span>
        <span>成本 <strong>${money(item.cost)}</strong></span>
        <span>利润 <strong class="${profit < 0 ? "loss" : ""}">${money(profit)}</strong></span>
      </div>
    </article>
  `;
}

function renderPage(env: Env): string {
  const summary = getSummary();
  const cards = [
    ["订阅账号", String(summary.subscriptionCount), "较上月 +2"],
    ["会员位置", `${summary.used} / ${summary.seats}`, `空闲 ${summary.empty}`],
    ["本期收入", money(summary.income), "当前账期"],
    ["本期利润", money(summary.profit), `利润率 ${(summary.profitRate * 100).toFixed(1)}%`],
    ["即将到期", `${summary.reminders} 个`, "含未付款"]
  ];

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${env.APP_NAME}</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f6f8fb;
      --surface: #ffffff;
      --ink: #0f172a;
      --muted: #64748b;
      --line: #e5e7eb;
      --blue: #2563eb;
      --green: #10b981;
      --red: #ef4444;
      --orange: #f59e0b;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--ink); }
    .shell { display: grid; grid-template-columns: 240px 1fr; min-height: 100dvh; }
    aside { background: #0b1220; color: #cbd5e1; padding: 24px 18px; }
    .logo { display: flex; gap: 12px; align-items: center; margin-bottom: 32px; }
    .logo-mark { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; background: var(--blue); color: white; font-weight: 800; }
    .logo strong { display: block; color: white; font-size: 20px; }
    nav { display: grid; gap: 8px; }
    nav a { color: inherit; text-decoration: none; padding: 12px 14px; border-radius: 8px; font-weight: 650; }
    nav a.active, nav a:hover { background: #2563eb; color: white; }
    main { padding: 28px; }
    header { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 22px; }
    h1 { margin: 0; font-size: 28px; letter-spacing: 0; }
    .search { flex: 0 1 360px; border: 1px solid var(--line); background: white; border-radius: 8px; padding: 12px 14px; color: var(--muted); }
    .primary { border: 0; background: var(--blue); color: white; min-height: 44px; padding: 0 18px; border-radius: 8px; font-weight: 700; cursor: pointer; }
    .kpis { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; margin-bottom: 22px; }
    .kpi, .subscription-card { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; box-shadow: 0 8px 24px rgba(15, 23, 42, .05); }
    .kpi { padding: 18px; }
    .kpi span { color: var(--muted); font-weight: 650; }
    .kpi strong { display: block; margin: 8px 0 4px; font-size: 28px; }
    .kpi small { color: var(--muted); }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
    .subscription-card { padding: 18px; }
    .card-head { display: grid; grid-template-columns: 52px 1fr auto; gap: 12px; align-items: center; }
    .brand-mark { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 12px; background: var(--brand); color: white; font-size: 26px; font-weight: 900; }
    h3 { margin: 0 0 6px; font-size: 18px; }
    h3 small { color: var(--blue); background: #eff6ff; padding: 3px 8px; border-radius: 999px; font-size: 12px; }
    p { margin: 0; color: var(--muted); font-size: 13px; }
    .status { font-size: 12px; font-weight: 800; border-radius: 999px; padding: 5px 8px; }
    .ok { color: #047857; background: #d1fae5; }
    .warn { color: #b45309; background: #fef3c7; }
    .danger { color: #b91c1c; background: #fee2e2; }
    .meta, .finance { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px; color: var(--muted); font-size: 13px; }
    .meta { grid-template-columns: 1fr 1fr; }
    .meta strong, .finance strong { display: block; color: var(--ink); margin-top: 4px; }
    .finance strong { color: var(--green); }
    .finance strong.loss { color: var(--red); }
    .usage { display: flex; align-items: center; gap: 12px; margin-top: 16px; }
    .bar { flex: 1; height: 9px; background: #e5e7eb; border-radius: 999px; overflow: hidden; }
    .bar span { display: block; height: 100%; background: linear-gradient(90deg, var(--green), #22c55e); }
    .members { display: flex; flex-wrap: wrap; gap: 9px; align-items: center; margin-top: 16px; min-height: 44px; }
    .member { display: inline-flex; gap: 6px; align-items: center; font-size: 13px; color: var(--ink); }
    .member span, .members button { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 999px; border: 1px solid var(--line); background: #f8fafc; }
    .members button { min-width: 44px; min-height: 44px; color: var(--blue); font-size: 24px; cursor: pointer; }
    .empty { display: grid; place-items: center; min-height: 310px; border: 1px dashed #cbd5e1; border-radius: 8px; color: var(--muted); background: white; }
    footer { margin-top: 22px; color: var(--muted); font-size: 13px; }
    @media (max-width: 1100px) {
      .shell { grid-template-columns: 1fr; }
      aside { position: static; }
      nav { grid-template-columns: repeat(3, 1fr); }
      .kpis { grid-template-columns: repeat(2, 1fr); }
      .grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      main { padding: 18px; }
      header { align-items: stretch; flex-direction: column; }
      .search { flex-basis: auto; }
      nav { grid-template-columns: 1fr 1fr; }
      .kpis { grid-template-columns: 1fr; }
      .meta, .finance { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <aside>
      <div class="logo">
        <div class="logo-mark">订</div>
        <div><strong>${env.APP_NAME}</strong><small>Don't Forget Subscription</small></div>
      </div>
      <nav aria-label="主导航">
        <a class="active" href="/">订阅车位</a>
        <a href="/api/subscriptions">成员管理</a>
        <a href="/api/summary">财务统计</a>
        <a href="/api/health">到期提醒</a>
      </nav>
    </aside>
    <main>
      <header>
        <div>
          <h1>订阅车位</h1>
          <p>管理所有订阅账号和车位</p>
        </div>
        <div class="search" role="search">搜索订阅平台 / 主账号</div>
        <button class="primary">+ 添加订阅</button>
      </header>
      <section class="kpis" aria-label="关键指标">
        ${cards
          .map(
            ([label, value, note]) => `
          <article class="kpi">
            <span>${label}</span>
            <strong>${value}</strong>
            <small>${note}</small>
          </article>`
          )
          .join("")}
      </section>
      <section class="grid" aria-label="订阅列表">
        ${SUBSCRIPTIONS.map(renderSubscription).join("")}
        <div class="empty">+ 添加订阅<br /><small>添加新的订阅账号</small></div>
      </section>
      <footer>Version ${env.APP_VERSION} · Powered by Cloudflare Workers</footer>
    </main>
  </div>
</body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({ ok: true, app: env.APP_NAME, version: env.APP_VERSION, now: new Date().toISOString() });
    }

    if (url.pathname === "/api/summary") {
      return json(getSummary());
    }

    if (url.pathname === "/api/subscriptions") {
      return json(SUBSCRIPTIONS);
    }

    return new Response(renderPage(env), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  },

  async scheduled(_event: ScheduledEvent, _env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(
      Promise.resolve().then(() => {
        const summary = getSummary();
        console.log("Daily reminder scan", {
          reminders: summary.reminders,
          unpaid: summary.unpaid.length
        });
      })
    );
  }
};
