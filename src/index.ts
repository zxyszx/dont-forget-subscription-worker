export interface Env {
  APP_NAME: string;
  APP_VERSION: string;
}

type SeatMember = {
  id: string;
  name: string;
  phone: string;
  email: string;
  amount: number;
  dueDate: string;
  paid: boolean;
};

type Subscription = {
  id: string;
  platform: string;
  category: string;
  account: string;
  seatNo: string;
  capacity: number;
  cost: number;
  cycle: "月付" | "季付" | "年付";
  renewalDate: string;
  status: "正常" | "即将到期" | "已过期";
  accent: string;
  members: SeatMember[];
};

type AppMember = SeatMember & {
  subscriptions: Subscription[];
  monthlyFee: number;
  status: "正常" | "即将到期" | "已停用";
};

type PageKey = "subscriptions" | "members" | "reminders" | "calendar" | "finance" | "settings";

const SUBSCRIPTIONS: Subscription[] = [
  {
    id: "netflix",
    platform: "Netflix",
    category: "视频娱乐",
    account: "netflix@gmail.com",
    seatNo: "01 号车位",
    capacity: 6,
    cost: 139,
    cycle: "年付",
    renewalDate: "2027-08-13",
    status: "正常",
    accent: "#e11d48",
    members: [
      { id: "zhangsan", name: "张三", phone: "138****1234", email: "zhangsan@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { id: "lisi", name: "李四", phone: "139****5678", email: "lisi@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { id: "wangwu", name: "王五", phone: "137****2468", email: "wangwu@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { id: "zhaoliu", name: "赵六", phone: "136****1357", email: "zhaoliu@example.com", amount: 40, dueDate: "2027-08-13", paid: true },
      { id: "qianqi", name: "钱七", phone: "135****9876", email: "qianqi@example.com", amount: 40, dueDate: "2027-08-13", paid: false }
    ]
  },
  {
    id: "spotify",
    platform: "Spotify",
    category: "音乐",
    account: "spotify@gmail.com",
    seatNo: "02 号车位",
    capacity: 5,
    cost: 99,
    cycle: "年付",
    renewalDate: "2027-07-25",
    status: "正常",
    accent: "#16a34a",
    members: [
      { id: "xiaoming", name: "小明", phone: "134****8721", email: "xiaoming@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { id: "xiaohong", name: "小红", phone: "133****0921", email: "xiaohong@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { id: "xiaogang", name: "小刚", phone: "132****5521", email: "xiaogang@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { id: "xiaomei", name: "小美", phone: "131****8821", email: "xiaomei@example.com", amount: 24, dueDate: "2027-07-25", paid: true },
      { id: "xiaoqiang", name: "小强", phone: "130****7721", email: "xiaoqiang@example.com", amount: 24, dueDate: "2027-07-25", paid: true }
    ]
  },
  {
    id: "youtube",
    platform: "YouTube Premium",
    category: "视频娱乐",
    account: "youtube@gmail.com",
    seatNo: "03 号车位",
    capacity: 5,
    cost: 179,
    cycle: "年付",
    renewalDate: "2026-06-30",
    status: "已过期",
    accent: "#f97316",
    members: [
      { id: "dali", name: "大力", phone: "159****1001", email: "dali@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { id: "dafang", name: "大芳", phone: "158****1002", email: "dafang@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { id: "dawei", name: "大伟", phone: "157****1003", email: "dawei@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { id: "daqiang", name: "大强", phone: "156****1004", email: "daqiang@example.com", amount: 30, dueDate: "2026-06-30", paid: true },
      { id: "damei", name: "大美", phone: "155****1005", email: "damei@example.com", amount: 30, dueDate: "2026-06-30", paid: true }
    ]
  },
  {
    id: "chatgpt",
    platform: "ChatGPT Plus",
    category: "AI 工具",
    account: "chatgpt@gmail.com",
    seatNo: "04 号车位",
    capacity: 3,
    cost: 80,
    cycle: "月付",
    renewalDate: "2027-08-10",
    status: "正常",
    accent: "#0f766e",
    members: [
      { id: "achen", name: "阿辰", phone: "188****9011", email: "achen@example.com", amount: 90, dueDate: "2027-08-10", paid: true },
      { id: "alin", name: "阿林", phone: "187****9012", email: "alin@example.com", amount: 90, dueDate: "2027-08-10", paid: true }
    ]
  },
  {
    id: "disney",
    platform: "Disney+",
    category: "视频娱乐",
    account: "disney@gmail.com",
    seatNo: "05 号车位",
    capacity: 4,
    cost: 83,
    cycle: "年付",
    renewalDate: "2027-09-01",
    status: "即将到期",
    accent: "#2563eb",
    members: [
      { id: "xiaodi", name: "小迪", phone: "186****3001", email: "xiaodi@example.com", amount: 90, dueDate: "2027-09-01", paid: true },
      { id: "xiaoni", name: "小尼", phone: "185****3002", email: "xiaoni@example.com", amount: 90, dueDate: "2027-09-01", paid: true },
      { id: "xiaole", name: "小乐", phone: "184****3003", email: "xiaole@example.com", amount: 90, dueDate: "2027-09-01", paid: false }
    ]
  }
];

const FINANCE_ROWS = [
  { month: "2027-07", income: 920, cost: 580, profit: 340, renewals: 5 },
  { month: "2027-06", income: 840, cost: 539, profit: 301, renewals: 4 },
  { month: "2027-05", income: 790, cost: 539, profit: 251, renewals: 4 },
  { month: "2027-04", income: 760, cost: 459, profit: 301, renewals: 3 }
];

const REMINDER_RULES = [
  { name: "续费前 7 天", channel: "Telegram", enabled: true, target: "管理员" },
  { name: "续费前 3 天", channel: "Telegram + 邮件", enabled: true, target: "成员" },
  { name: "逾期当天", channel: "Telegram", enabled: true, target: "管理员" },
  { name: "未付款每 2 天", channel: "Telegram", enabled: false, target: "成员" }
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

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char] ?? char;
  });
}

function money(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0
  }).format(value);
}

function percent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
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
  const renewals = SUBSCRIPTIONS.filter((item) => item.status !== "正常");

  return {
    subscriptionCount: SUBSCRIPTIONS.length,
    seats,
    used,
    empty: seats - used,
    income,
    cost,
    profit,
    profitRate: income === 0 ? 0 : profit / income,
    reminders: unpaid.length + renewals.length,
    unpaid,
    renewals
  };
}

function getMembers(): AppMember[] {
  const members = new Map<string, AppMember>();

  for (const subscription of SUBSCRIPTIONS) {
    for (const member of subscription.members) {
      const existing = members.get(member.id);
      const status = subscription.status === "已过期" ? "已停用" : subscription.status === "即将到期" ? "即将到期" : "正常";

      if (existing) {
        existing.subscriptions.push(subscription);
        existing.monthlyFee += member.amount;
        if (existing.status !== "已停用") {
          existing.status = status;
        }
      } else {
        members.set(member.id, {
          ...member,
          subscriptions: [subscription],
          monthlyFee: member.amount,
          status
        });
      }
    }
  }

  return [...members.values()];
}

function findSubscription(id: string): Subscription | undefined {
  return SUBSCRIPTIONS.find((subscription) => subscription.id === id);
}

function findMember(id: string): AppMember | undefined {
  return getMembers().find((member) => member.id === id);
}

function icon(name: string, className = "icon"): string {
  return `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function sprite(): string {
  return `
    <svg width="0" height="0" class="sprite" aria-hidden="true" focusable="false">
      <symbol id="i-account" viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/></symbol>
      <symbol id="i-car" viewBox="0 0 24 24"><path d="m5 12 2-5h10l2 5"/><path d="M5 12h14v6H5z"/><path d="M7 18v2"/><path d="M17 18v2"/><path d="M8 15h.01"/><path d="M16 15h.01"/></symbol>
      <symbol id="i-users" viewBox="0 0 24 24"><path d="M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M21 20v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
      <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></symbol>
      <symbol id="i-calendar" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/><path d="M7 20v-5"/><path d="M12 20v-9"/><path d="M17 20v-6"/></symbol>
      <symbol id="i-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.38 1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.38H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06A2 2 0 1 1 7.03 4.2l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .38-1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 .6 1 1.7 1.7 0 0 0 1 .38H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z"/></symbol>
      <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></symbol>
      <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></symbol>
      <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/></symbol>
      <symbol id="i-chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>
      <symbol id="i-more" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>
      <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.4 19.4 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.64a16 16 0 0 0 6.36 6.36l1.21-1.21a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z"/></symbol>
      <symbol id="i-credit" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></symbol>
      <symbol id="i-key" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m12 12 8-8"/><path d="m16 8 2 2"/><path d="m19 5 2 2"/></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
      <symbol id="i-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.9 5.03"/><path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07l1.2-1.2"/></symbol>
      <symbol id="i-bot" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M9 17h6"/></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></symbol>
    </svg>
  `;
}

function statusTone(status: string): string {
  if (status === "正常" || status === "已发送" || status === "已付款") return "success";
  if (status === "即将到期" || status === "待发送" || status === "未付款") return "warning";
  if (status === "已过期" || status === "已停用") return "danger";
  return "neutral";
}

function badge(label: string): string {
  return `<span class="badge ${statusTone(label)}">${escapeHtml(label)}</span>`;
}

function avatar(name: string, tone = "gray"): string {
  return `<span class="avatar ${tone}" aria-hidden="true">${escapeHtml(name.slice(0, 1))}</span>`;
}

function activeClass(active: PageKey, current: PageKey): string {
  return active === current ? "active" : "";
}

function navLink(active: PageKey, current: PageKey, href: string, iconName: string, label: string, count?: string): string {
  return `
    <a class="nav-item ${activeClass(active, current)}" href="${href}">
      ${icon(iconName)}
      <span>${label}</span>
      ${count ? `<b>${count}</b>` : icon("chevron", "chevron")}
    </a>
  `;
}

function layout(env: Env, active: PageKey, title: string, content: string, actions = ""): string {
  const summary = getSummary();

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} - ${escapeHtml(env.APP_NAME)}</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #fafafa;
      --surface: #ffffff;
      --surface-soft: #f5f5f5;
      --surface-hover: #f0f0f0;
      --ink: #1f1f1f;
      --muted: #6f6f6f;
      --subtle: #9a9a9a;
      --line: #dedede;
      --line-soft: #ececec;
      --orange: #f38020;
      --blue: #2563eb;
      --green: #0f8f5f;
      --red: #dc2626;
      --amber: #b45309;
      --shadow: 0 1px 2px rgba(0, 0, 0, .05), 0 8px 28px rgba(0, 0, 0, .04);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
    }
    * { box-sizing: border-box; }
    html { min-width: 0; }
    body { margin: 0; min-width: 0; background: var(--bg); color: var(--ink); line-height: 1.5; }
    a { color: inherit; text-decoration: none; }
    button, input, select, textarea { font: inherit; }
    button, .button, .nav-item, .row-link, .icon-button { cursor: pointer; }
    :focus-visible { outline: 3px solid rgba(243, 128, 32, .32); outline-offset: 2px; }
    .sprite { position: absolute; }
    .icon { width: 20px; height: 20px; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; fill: none; flex: 0 0 auto; }
    .chevron { width: 18px; height: 18px; stroke: currentColor; stroke-width: 2; fill: none; margin-left: auto; color: var(--subtle); }
    .app { display: grid; grid-template-columns: 292px minmax(0, 1fr); min-height: 100dvh; }
    .sidebar { position: sticky; top: 0; align-self: start; display: flex; flex-direction: column; height: 100dvh; border-right: 1px solid var(--line); background: #fff; }
    .brand { display: flex; align-items: center; gap: 14px; min-height: 74px; padding: 0 22px; border-bottom: 1px solid var(--line-soft); font-weight: 760; letter-spacing: 0; }
    .cloud { position: relative; display: inline-block; width: 44px; height: 26px; flex: 0 0 auto; }
    .cloud::before { content: ""; position: absolute; left: 4px; bottom: 4px; width: 34px; height: 13px; border-radius: 16px; background: var(--orange); box-shadow: 9px 0 0 var(--orange); }
    .cloud::after { content: ""; position: absolute; left: 12px; bottom: 9px; width: 22px; height: 22px; border-radius: 999px; background: var(--orange); box-shadow: 14px 5px 0 -3px var(--orange); }
    .brand-text { min-width: 0; }
    .brand-text strong { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 17px; }
    .brand-text small { display: block; color: var(--muted); font-size: 12px; font-weight: 600; }
    .side-scroll { overflow: auto; padding: 14px 12px 18px; }
    .quick-search { display: flex; align-items: center; gap: 12px; min-height: 46px; margin: 0 0 12px; padding: 0 12px; border: 1px solid var(--line); border-radius: 12px; color: var(--subtle); background: #fff; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .02); }
    .quick-search kbd { margin-left: auto; color: var(--subtle); font-size: 13px; font-weight: 650; }
    .nav-group { display: grid; gap: 4px; margin: 18px 0 22px; }
    .nav-heading { padding: 0 12px 6px; color: #777; font-size: 13px; font-weight: 760; }
    .nav-item { display: flex; align-items: center; gap: 13px; min-height: 44px; padding: 0 13px; border-radius: 10px; color: #202020; font-size: 15px; font-weight: 720; transition: background .18s ease, color .18s ease; }
    .nav-item .icon { color: #8b8b8b; }
    .nav-item b { display: grid; place-items: center; min-width: 25px; height: 22px; margin-left: auto; padding: 0 7px; border-radius: 999px; background: #ef4444; color: #fff; font-size: 12px; }
    .nav-item:hover, .nav-item.active { background: #f1f1f1; }
    .nav-item.active .icon { color: #616161; }
    .side-footer { margin-top: 26px; padding-top: 14px; border-top: 1px solid var(--line); }
    .main { min-width: 0; }
    .topbar { display: flex; align-items: center; justify-content: flex-end; gap: 16px; min-height: 74px; padding: 0 30px; border-bottom: 1px solid var(--line-soft); background: #fff; }
    .topbar a, .topbar button { display: inline-flex; align-items: center; gap: 8px; min-height: 40px; border: 0; background: transparent; color: #3d3d3d; font-weight: 720; }
    .topbar .dot { width: 8px; height: 8px; border-radius: 999px; background: #ef4444; box-shadow: 0 0 0 4px #fee2e2; }
    .user-chip { display: inline-flex; align-items: center; gap: 10px; }
    .workspace { width: min(1360px, 100%); margin: 0 auto; padding: 36px 34px 42px; }
    .page-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 24px; }
    .page-title h1 { margin: 0; color: #151515; font-size: 29px; line-height: 1.25; letter-spacing: 0; }
    .page-title p { margin: 7px 0 0; color: var(--muted); font-size: 15px; }
    .actions { display: flex; align-items: center; justify-content: flex-end; gap: 10px; flex-wrap: wrap; }
    .button, .icon-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 42px; border: 1px solid var(--line); border-radius: 10px; background: #fff; color: #202020; font-weight: 760; box-shadow: 0 1px 1px rgba(0,0,0,.03); }
    .button { padding: 0 14px; }
    .button.primary { border-color: #202020; background: #202020; color: #fff; }
    .button.orange { border-color: var(--orange); background: var(--orange); color: #fff; }
    .button.danger { border-color: #fecaca; background: #fff; color: var(--red); }
    .icon-button { width: 42px; padding: 0; }
    .search-hero { display: flex; align-items: center; gap: 12px; min-height: 58px; margin: 0 auto 26px; padding: 0 17px; border: 1px solid var(--line); border-radius: 16px; background: #fff; box-shadow: 0 0 0 8px rgba(0, 0, 0, .018), inset 0 0 0 1px rgba(0,0,0,.02); color: var(--subtle); }
    .search-hero input { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--ink); background: transparent; font-size: 16px; }
    .search-hero kbd { display: inline-flex; align-items: center; justify-content: center; min-width: 28px; height: 28px; border: 1px solid var(--line); border-radius: 7px; color: #666; background: #fafafa; font-size: 13px; font-weight: 750; }
    .kpis { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; margin-bottom: 24px; }
    .panel, .card, .metric-card { min-width: 0; border: 1px solid var(--line-soft); border-radius: 12px; background: #fff; box-shadow: var(--shadow); }
    .metric-card { min-width: 0; padding: 18px; }
    .metric-card span { color: var(--muted); font-size: 13px; font-weight: 750; }
    .metric-card strong { display: block; margin: 7px 0 2px; font-size: 28px; line-height: 1.1; font-weight: 790; letter-spacing: 0; font-variant-numeric: tabular-nums; }
    .metric-card small { color: var(--green); font-size: 13px; font-weight: 730; }
    .section-grid { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 20px; align-items: start; }
    .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 58px; padding: 0 18px; border-bottom: 1px solid var(--line-soft); }
    .panel-head h2 { margin: 0; font-size: 17px; letter-spacing: 0; }
    .panel-head span { color: var(--muted); font-size: 13px; font-weight: 650; }
    .table-wrap { max-width: 100%; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; min-width: 760px; }
    .subscriptions-table { min-width: 680px; }
    th, td { padding: 16px 18px; border-bottom: 1px solid var(--line-soft); text-align: left; vertical-align: middle; }
    th { color: var(--muted); font-size: 13px; font-weight: 760; white-space: nowrap; }
    td { color: #2b2b2b; font-size: 14px; }
    tr:last-child td { border-bottom: 0; }
    tbody tr { transition: background .18s ease; }
    tbody tr:hover { background: #fbfbfb; }
    .entity { display: flex; align-items: center; gap: 12px; min-width: 190px; }
    .entity strong { display: block; color: #202020; font-size: 15px; }
    .entity small, .muted { color: var(--muted); font-size: 13px; }
    .avatar, .brand-mark { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 999px; color: #fff; font-weight: 790; flex: 0 0 auto; }
    .avatar.gray { background: #737373; }
    .avatar.blue { background: #2563eb; }
    .avatar.green { background: #059669; }
    .avatar.orange { background: var(--orange); }
    .brand-mark { background: var(--accent); }
    .badge { display: inline-flex; align-items: center; min-height: 26px; padding: 0 10px; border-radius: 999px; font-size: 12px; font-weight: 790; white-space: nowrap; }
    .badge.success { color: #047857; background: #dcfce7; }
    .badge.warning { color: #a16207; background: #fef3c7; }
    .badge.danger { color: #b91c1c; background: #fee2e2; }
    .badge.neutral { color: #575757; background: #f0f0f0; }
    .progress { display: flex; align-items: center; gap: 10px; min-width: 150px; }
    .progress .bar { width: 100%; height: 8px; border-radius: 999px; background: #ededed; overflow: hidden; }
    .progress .bar span { display: block; height: 100%; border-radius: inherit; background: #202020; }
    .progress strong { min-width: 45px; font-variant-numeric: tabular-nums; }
    .row-actions { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
    .sidebar-list { display: grid; gap: 12px; padding: 16px; }
    .list-item { display: grid; grid-template-columns: 36px minmax(0, 1fr) auto; gap: 12px; align-items: center; padding: 10px; border-radius: 10px; transition: background .18s ease; }
    .list-item:hover { background: #f7f7f7; }
    .list-item strong { display: block; font-size: 14px; }
    .list-item small { color: var(--muted); }
    .mini-icon { display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 10px; border: 1px solid var(--line-soft); color: #777; background: #fff; }
    .mini-icon .icon { width: 18px; height: 18px; }
    .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .card { padding: 18px; min-width: 0; }
    .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
    .card h3 { margin: 0; font-size: 18px; line-height: 1.25; letter-spacing: 0; }
    .card p { margin: 5px 0 0; color: var(--muted); font-size: 13px; }
    .detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 20px; align-items: start; }
    .facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 14px; }
    .fact { padding: 14px; border: 1px solid var(--line-soft); border-radius: 10px; background: #fff; }
    .fact span { color: var(--muted); font-size: 12px; font-weight: 720; }
    .fact strong { display: block; margin-top: 5px; font-size: 17px; font-variant-numeric: tabular-nums; }
    .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; padding: 18px; }
    .field { display: grid; gap: 7px; }
    .field.full { grid-column: 1 / -1; }
    label { color: #2a2a2a; font-size: 13px; font-weight: 760; }
    input, select, textarea { width: 100%; min-height: 44px; border: 1px solid var(--line); border-radius: 10px; padding: 0 12px; background: #fff; color: var(--ink); }
    textarea { min-height: 96px; padding: 12px; resize: vertical; }
    .calendar { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); border-top: 1px solid var(--line-soft); border-left: 1px solid var(--line-soft); }
    .day, .weekday { min-height: 112px; padding: 12px; border-right: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); background: #fff; }
    .weekday { min-height: auto; color: var(--muted); font-size: 12px; font-weight: 780; background: #fafafa; }
    .day b { display: block; font-size: 13px; }
    .event { display: block; margin-top: 8px; padding: 6px 8px; border-radius: 8px; background: #f5f5f5; color: #333; font-size: 12px; font-weight: 720; overflow-wrap: anywhere; }
    .bars { display: grid; gap: 12px; padding: 18px; }
    .bar-row { display: grid; grid-template-columns: 86px minmax(0, 1fr) 72px; gap: 12px; align-items: center; }
    .bar-track { height: 14px; border-radius: 999px; background: #f1f1f1; overflow: hidden; }
    .bar-track span { display: block; height: 100%; border-radius: inherit; background: #202020; }
    .timeline { display: grid; gap: 14px; padding: 18px; }
    .timeline-item { display: grid; grid-template-columns: 34px minmax(0, 1fr) auto; gap: 12px; align-items: start; }
    .timeline-dot { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 999px; border: 1px solid var(--line); color: #777; background: #fff; }
    .timeline-dot .icon { width: 16px; height: 16px; }
    .modal-backdrop { position: fixed; inset: 0; display: grid; place-items: center; padding: 24px; background: rgba(0, 0, 0, .26); z-index: 20; }
    .modal { width: min(440px, 100%); border-radius: 14px; background: #fff; box-shadow: 0 18px 80px rgba(0, 0, 0, .22); }
    .modal .panel-head { min-height: 62px; }
    .modal-body { padding: 18px; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 10px; padding: 0 18px 18px; }
    .empty { display: grid; place-items: center; min-height: 220px; padding: 24px; color: var(--muted); text-align: center; }
    .footer { margin-top: 28px; color: var(--subtle); font-size: 12px; }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
    }
    @media (max-width: 1180px) {
      .kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .section-grid, .detail-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 840px) {
      .app { grid-template-columns: 1fr; }
      .app, .main, .workspace { width: 100%; max-width: 100vw; overflow-x: hidden; }
      .sidebar { position: static; height: auto; }
      .brand { min-height: 66px; }
      .brand-text strong { font-size: 16px; }
      .side-scroll { min-width: 0; overflow: hidden; padding: 10px 12px 8px; }
      .quick-search { display: none; }
      nav { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; }
      .nav-group { display: flex; flex: 0 0 auto; gap: 6px; margin: 0; }
      .nav-heading, .side-footer { display: none; }
      .nav-item { min-width: max-content; padding: 0 12px; }
      .nav-item .chevron { display: none; }
      .topbar { justify-content: space-between; min-height: 56px; padding: 0 18px; }
      .workspace { padding: 24px 16px 32px; }
      .page-head { flex-direction: column; }
      .page-head .actions { width: 100%; justify-content: flex-start; }
      .page-head, .search-hero, .panel, .table-wrap { max-width: 100%; }
      .search-hero { margin-bottom: 18px; }
      .cards, .form-grid, .facts { grid-template-columns: 1fr; }
      .field.full { grid-column: auto; }
      .calendar { grid-template-columns: 1fr; border-left: 0; }
      .weekday { display: none; }
      .day { min-height: 86px; border-left: 1px solid var(--line-soft); }
    }
    @media (max-width: 520px) {
      .kpis { grid-template-columns: 1fr; }
      .nav-group { grid-template-columns: 1fr; }
      .topbar a span, .topbar button span { display: none; }
      .page-title h1 { font-size: 24px; }
      .page-head .button { width: 100%; }
      .row-actions { justify-content: flex-start; }
      .table-wrap { overflow: visible; }
      table, thead, tbody, tr, th, td { display: block; min-width: 0; }
      thead { display: none; }
      tbody tr { padding: 14px 16px; border-bottom: 1px solid var(--line-soft); }
      tbody tr:last-child { border-bottom: 0; }
      th, td { border-bottom: 0; padding: 8px 0; }
      td { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-width: 0; text-align: right; overflow-wrap: anywhere; }
      td::before { content: attr(data-label); flex: 0 0 auto; color: var(--muted); font-size: 13px; font-weight: 760; text-align: left; }
      td:first-child { display: block; text-align: left; }
      td:first-child::before { display: none; }
      td .entity { min-width: 0; }
      td .button { width: auto; }
    }
  </style>
</head>
<body>
  ${sprite()}
  <div class="app">
    <aside class="sidebar">
      <a class="brand" href="/" aria-label="返回账户主页">
        <span class="cloud" aria-hidden="true"></span>
        <span class="brand-text">
          <strong>${escapeHtml(env.APP_NAME)}</strong>
          <small>520.szx@126.com's Account</small>
        </span>
      </a>
      <div class="side-scroll">
        <div class="quick-search" role="search">${icon("search")}<span>快速搜索...</span><kbd>⌘K</kbd></div>
        <nav aria-label="主导航">
          <div class="nav-group">
            ${navLink(active, "subscriptions", "/subscriptions", "car", "订阅车位")}
            ${navLink(active, "members", "/members", "users", "成员管理")}
          </div>
          <div class="nav-group">
            <div class="nav-heading">Observe</div>
            ${navLink(active, "reminders", "/reminders", "bell", "到期提醒", String(summary.reminders))}
            ${navLink(active, "calendar", "/calendar", "calendar", "续费日历")}
            ${navLink(active, "finance", "/finance", "chart", "财务统计")}
          </div>
          <div class="nav-group">
            <div class="nav-heading">构建</div>
            ${navLink(active, "settings", "/settings", "settings", "设置")}
            <a class="nav-item" href="/api/summary">${icon("bot")}<span>API 数据</span>${icon("chevron", "chevron")}</a>
          </div>
        </nav>
        <div class="side-footer">
          <a class="nav-item" href="/settings">${icon("account")}<span>管理账户</span>${icon("chevron", "chevron")}</a>
        </div>
      </div>
    </aside>
    <div class="main">
      <header class="topbar">
        <span></span>
        <div class="actions">
          <button type="button" aria-label="Ask AI">${icon("bot")}<span>Ask AI</span></button>
          <a href="/reminders">${icon("bell")}<span>支持</span><i class="dot" aria-hidden="true"></i></a>
          <a class="user-chip" href="/settings">${avatar("管", "orange")}<span>管理员</span></a>
        </div>
      </header>
      <main class="workspace" id="content">
        <div class="page-head">
          <div class="page-title">
            <h1>${escapeHtml(title)}</h1>
            <p>${pageDescription(active)}</p>
          </div>
          <div class="actions">${actions}</div>
        </div>
        ${content}
        <div class="footer">Version ${escapeHtml(env.APP_VERSION)} · Powered by Cloudflare Workers · GitHub 一键部署已启用</div>
      </main>
    </div>
  </div>
</body>
</html>`;
}

function pageDescription(active: PageKey): string {
  const descriptions: Record<PageKey, string> = {
    subscriptions: "账户、车位、成员和续费状态集中管理。",
    members: "查看成员订阅关系、费用、到期状态和联系方式。",
    reminders: "管理续费提醒、未付款提醒和 Telegram 通知队列。",
    calendar: "按日期查看全部订阅续费节点。",
    finance: "收入、成本、利润和账期流水统计。",
    settings: "配置 Telegram、默认提醒规则和系统偏好。"
  };
  return descriptions[active];
}

function renderSearch(placeholder: string): string {
  return `
    <div class="search-hero" role="search">
      ${icon("search")}
      <input aria-label="${escapeHtml(placeholder)}" placeholder="${escapeHtml(placeholder)}" />
      <kbd>⌘</kbd><kbd>K</kbd>
    </div>
  `;
}

function renderKpis(): string {
  const summary = getSummary();
  const cards = [
    ["订阅账号", String(summary.subscriptionCount), "本期 +2"],
    ["车位使用", `${summary.used} / ${summary.seats}`, `空闲 ${summary.empty}`],
    ["本期收入", money(summary.income), "当前账期"],
    ["本期利润", money(summary.profit), `利润率 ${percent(summary.profitRate)}`],
    ["提醒队列", `${summary.reminders} 条`, "含未付款"]
  ];

  return `
    <section class="kpis" aria-label="关键指标">
      ${cards
        .map(
          ([label, value, note]) => `
        <article class="metric-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>`
        )
        .join("")}
    </section>
  `;
}

function renderSubscriptionsPage(env: Env): string {
  const actions = `
    <a class="button" href="/api/subscriptions">${icon("link")}接口</a>
    <a class="button primary" href="/subscriptions/new">${icon("plus")}添加订阅</a>
  `;

  const table = `
    <section class="panel">
      <div class="panel-head">
        <h2>订阅列表</h2>
        <span>${SUBSCRIPTIONS.length} 个账号</span>
      </div>
      <div class="table-wrap">
        <table class="subscriptions-table">
          <thead>
            <tr>
              <th>订阅</th>
              <th>主账号</th>
              <th>车位</th>
              <th>续费日</th>
              <th>收入 / 成本</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${SUBSCRIPTIONS.map(renderSubscriptionRow).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  const side = `
    <aside class="panel">
      <div class="panel-head">
        <h2>近期访问</h2>
        <button class="icon-button" aria-label="刷新">${icon("refresh")}</button>
      </div>
      <div class="sidebar-list">
        ${SUBSCRIPTIONS.slice(0, 4)
          .map(
            (item) => `
          <a class="list-item" href="/subscriptions/${item.id}">
            <span class="mini-icon">${icon("clock")}</span>
            <span><strong>${escapeHtml(item.platform)}</strong><small>${escapeHtml(item.renewalDate)}</small></span>
            ${icon("chevron", "chevron")}
          </a>`
          )
          .join("")}
      </div>
    </aside>
  `;

  return layout(env, "subscriptions", "订阅车位", `${renderSearch("搜索订阅平台 / 主账号 / 车位")} ${renderKpis()} <div class="section-grid">${table}${side}</div>`, actions);
}

function renderSubscriptionRow(item: Subscription): string {
  const income = item.members.reduce((sum, member) => sum + member.amount, 0);
  const used = item.members.length;

  return `
    <tr>
      <td data-label="订阅">
        <a class="entity row-link" href="/subscriptions/${item.id}">
          <span class="brand-mark" style="--accent:${item.accent}">${escapeHtml(item.platform.slice(0, 1))}</span>
          <span><strong>${escapeHtml(item.platform)}</strong><small>${escapeHtml(item.category)} · ${escapeHtml(item.cycle)}</small></span>
        </a>
      </td>
      <td data-label="主账号">${escapeHtml(item.account)}</td>
      <td data-label="车位">
        <div class="progress">
          <div class="bar" aria-hidden="true"><span style="width:${Math.round((used / item.capacity) * 100)}%"></span></div>
          <strong>${used}/${item.capacity}</strong>
        </div>
      </td>
      <td data-label="续费日"><strong>${escapeHtml(item.renewalDate)}</strong><br><span class="muted">${escapeHtml(item.seatNo)}</span></td>
      <td data-label="收入 / 成本"><strong>${money(income)}</strong><br><span class="muted">成本 ${money(item.cost)}</span></td>
      <td data-label="状态">${badge(item.status)}</td>
      <td data-label="操作">
        <div class="row-actions">
          <a class="button" href="/subscriptions/${item.id}">查看</a>
          <button class="icon-button" aria-label="更多操作">${icon("more")}</button>
        </div>
      </td>
    </tr>
  `;
}

function renderSubscriptionDetail(env: Env, subscription: Subscription): string {
  const income = subscription.members.reduce((sum, member) => sum + member.amount, 0);
  const profit = income - subscription.cost;
  const actions = `
    <a class="button" href="/subscriptions">${icon("chevron")}返回</a>
    <a class="button primary" href="/subscriptions/new">${icon("plus")}添加车位</a>
  `;

  const overview = `
    <section class="panel">
      <div class="panel-head">
        <h2>${escapeHtml(subscription.platform)}</h2>
        ${badge(subscription.status)}
      </div>
      <div class="card" style="border:0; box-shadow:none;">
        <div class="entity">
          <span class="brand-mark" style="--accent:${subscription.accent}; width:52px; height:52px;">${escapeHtml(subscription.platform.slice(0, 1))}</span>
          <span><strong>${escapeHtml(subscription.account)}</strong><small>${escapeHtml(subscription.category)} · ${escapeHtml(subscription.seatNo)}</small></span>
        </div>
        <div class="facts">
          <div class="fact"><span>续费日</span><strong>${escapeHtml(subscription.renewalDate)}</strong></div>
          <div class="fact"><span>席位</span><strong>${subscription.members.length} / ${subscription.capacity}</strong></div>
          <div class="fact"><span>利润</span><strong>${money(profit)}</strong></div>
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>车位成员</h2><span>${subscription.members.length} 人</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>成员</th><th>联系方式</th><th>应收</th><th>到期</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            ${subscription.members
              .map(
                (member) => `
              <tr>
                <td data-label="成员"><a class="entity" href="/members/${member.id}">${avatar(member.name, "blue")}<span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.phone)}</small></span></a></td>
                <td data-label="联系方式">${escapeHtml(member.email)}</td>
                <td data-label="应收"><strong>${money(member.amount)}</strong></td>
                <td data-label="到期">${escapeHtml(member.dueDate)}</td>
                <td data-label="状态">${badge(member.paid ? "已付款" : "未付款")}</td>
                <td data-label="操作"><a class="button danger" href="/members/${member.id}?modal=remove&subscription=${subscription.id}">移除</a></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  const side = `
    <aside class="panel">
      <div class="panel-head"><h2>财务摘要</h2><span>${escapeHtml(subscription.cycle)}</span></div>
      <div class="sidebar-list">
        <div class="list-item"><span class="mini-icon">${icon("credit")}</span><span><strong>${money(income)}</strong><small>成员应收</small></span></div>
        <div class="list-item"><span class="mini-icon">${icon("chart")}</span><span><strong>${money(subscription.cost)}</strong><small>订阅成本</small></span></div>
        <div class="list-item"><span class="mini-icon">${icon("bell")}</span><span><strong>${subscription.members.filter((member) => !member.paid).length} 条</strong><small>待处理提醒</small></span></div>
      </div>
    </aside>
  `;

  return layout(env, "subscriptions", subscription.platform, `<div class="detail-grid"><div style="display:grid; gap:20px;">${overview}</div>${side}</div>`, actions);
}

function renderNewSubscriptionPage(env: Env): string {
  const actions = `<a class="button" href="/subscriptions">${icon("chevron")}返回列表</a>`;
  const content = `
    <section class="panel">
      <div class="panel-head"><h2>新增订阅账号</h2><span>基础信息</span></div>
      <form class="form-grid">
        <div class="field"><label for="platform">订阅平台</label><input id="platform" value="Apple One" autocomplete="organization" /></div>
        <div class="field"><label for="category">分类</label><select id="category"><option>视频娱乐</option><option>AI 工具</option><option>音乐</option><option>云服务</option></select></div>
        <div class="field"><label for="account">主账号</label><input id="account" type="email" value="account@example.com" autocomplete="email" /></div>
        <div class="field"><label for="renewal">续费日期</label><input id="renewal" type="date" value="2027-08-25" /></div>
        <div class="field"><label for="capacity">车位数</label><input id="capacity" type="number" min="1" value="5" /></div>
        <div class="field"><label for="cost">订阅成本</label><input id="cost" type="number" min="0" value="129" /></div>
        <div class="field full"><label for="note">备注</label><textarea id="note">共享规则、登录限制、备用验证码接收方式。</textarea></div>
        <div class="field full"><button class="button primary" type="button">${icon("plus")}保存订阅</button></div>
      </form>
    </section>
  `;

  return layout(env, "subscriptions", "添加订阅", content, actions);
}

function renderMembersPage(env: Env): string {
  const members = getMembers();
  const actions = `<button class="button primary" type="button">${icon("plus")}添加成员</button>`;
  const content = `
    ${renderSearch("搜索成员姓名 / 邮箱 / 手机")}
    <section class="panel">
      <div class="panel-head">
        <h2>成员列表</h2>
        <span>共 ${members.length} 位成员</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>成员</th><th>邮箱</th><th>拥有订阅数</th><th>每月费用</th><th>下次续费</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            ${members
              .map(
                (member, index) => `
              <tr>
                <td data-label="成员"><a class="entity" href="/members/${member.id}">${avatar(member.name, index % 3 === 0 ? "orange" : index % 3 === 1 ? "blue" : "green")}<span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.phone)}</small></span></a></td>
                <td data-label="邮箱">${escapeHtml(member.email)}</td>
                <td data-label="拥有订阅数"><strong>${member.subscriptions.length}</strong><br><span class="muted">${member.subscriptions.map((item) => escapeHtml(item.platform)).join(" / ")}</span></td>
                <td data-label="每月费用"><strong>${money(member.monthlyFee)}</strong></td>
                <td data-label="下次续费"><strong>${escapeHtml(member.dueDate)}</strong></td>
                <td data-label="状态">${badge(member.status)}</td>
                <td data-label="操作"><a class="button" href="/members/${member.id}">操作</a></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  return layout(env, "members", "成员管理", content, actions);
}

function renderMemberDetail(env: Env, member: AppMember, url: URL): string {
  const targetSubscription = url.searchParams.get("subscription");
  const modal = url.searchParams.get("modal") === "remove" ? renderRemoveModal(member, targetSubscription) : "";
  const actions = `
    <a class="button" href="/members">${icon("chevron")}返回</a>
    <button class="button primary" type="button">${icon("plus")}绑定订阅</button>
  `;

  const content = `
    <div class="detail-grid">
      <div style="display:grid; gap:20px;">
        <section class="panel">
          <div class="panel-head"><h2>成员资料</h2>${badge(member.status)}</div>
          <div class="card" style="border:0; box-shadow:none;">
            <div class="entity">
              ${avatar(member.name, "orange")}
              <span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.phone)} · ${escapeHtml(member.email)}</small></span>
            </div>
            <div class="facts">
              <div class="fact"><span>绑定订阅</span><strong>${member.subscriptions.length}</strong></div>
              <div class="fact"><span>每月费用</span><strong>${money(member.monthlyFee)}</strong></div>
              <div class="fact"><span>下次续费</span><strong>${escapeHtml(member.dueDate)}</strong></div>
            </div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-head"><h2>订阅关系</h2><span>可移除或编辑</span></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>订阅</th><th>账号</th><th>金额</th><th>续费日</th><th>操作</th></tr></thead>
              <tbody>
                ${member.subscriptions
                  .map(
                    (item) => `
                <tr>
                  <td data-label="订阅"><a class="entity" href="/subscriptions/${item.id}"><span class="brand-mark" style="--accent:${item.accent}">${escapeHtml(item.platform.slice(0, 1))}</span><span><strong>${escapeHtml(item.platform)}</strong><small>${escapeHtml(item.seatNo)}</small></span></a></td>
                  <td data-label="账号">${escapeHtml(item.account)}</td>
                  <td data-label="金额">${money(item.members.find((seatMember) => seatMember.id === member.id)?.amount ?? 0)}</td>
                  <td data-label="续费日">${escapeHtml(item.renewalDate)}</td>
                  <td data-label="操作"><a class="button danger" href="/members/${member.id}?modal=remove&subscription=${item.id}">移除关系</a></td>
                </tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <aside class="panel">
        <div class="panel-head"><h2>联系方式</h2><span>通知渠道</span></div>
        <div class="sidebar-list">
          <div class="list-item"><span class="mini-icon">${icon("phone")}</span><span><strong>${escapeHtml(member.phone)}</strong><small>短信备用</small></span></div>
          <div class="list-item"><span class="mini-icon">${icon("mail")}</span><span><strong>${escapeHtml(member.email)}</strong><small>邮件通知</small></span></div>
          <div class="list-item"><span class="mini-icon">${icon("bell")}</span><span><strong>Telegram</strong><small>未绑定</small></span></div>
        </div>
      </aside>
    </div>
    ${modal}
  `;

  return layout(env, "members", member.name, content, actions);
}

function renderRemoveModal(member: AppMember, subscriptionId: string | null): string {
  const subscription = subscriptionId ? findSubscription(subscriptionId) : undefined;
  const subscriptionName = subscription?.platform ?? "该订阅";

  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="remove-title">
      <section class="modal">
        <div class="panel-head">
          <h2 id="remove-title">移除订阅关系</h2>
          <a class="icon-button" href="/members/${member.id}" aria-label="关闭">${icon("chevron")}</a>
        </div>
        <div class="modal-body">
          <p>确认将 <strong>${escapeHtml(member.name)}</strong> 从 <strong>${escapeHtml(subscriptionName)}</strong> 中移除？移除后该成员不会继续收到此订阅的续费提醒。</p>
        </div>
        <div class="modal-actions">
          <a class="button" href="/members/${member.id}">取消</a>
          <a class="button danger" href="/members/${member.id}">确认移除</a>
        </div>
      </section>
    </div>
  `;
}

function renderRemindersPage(env: Env): string {
  const summary = getSummary();
  const reminderItems = [
    ...summary.renewals.map((item) => ({ title: `${item.platform} 续费状态`, detail: item.renewalDate, status: item.status })),
    ...summary.unpaid.map((item) => ({ title: `${item.member} 未付款`, detail: `${item.platform} · ${item.dueDate}`, status: "待发送" }))
  ];
  const actions = `<button class="button primary" type="button">${icon("plus")}新增规则</button>`;
  const content = `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-head"><h2>提醒队列</h2><span>${reminderItems.length} 条待处理</span></div>
        <div class="timeline">
          ${reminderItems
            .map(
              (item) => `
          <div class="timeline-item">
            <span class="timeline-dot">${icon("bell")}</span>
            <span><strong>${escapeHtml(item.title)}</strong><br><span class="muted">${escapeHtml(item.detail)}</span></span>
            ${badge(item.status)}
          </div>`
            )
            .join("")}
        </div>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>提醒规则</h2><span>Telegram</span></div>
        <div class="sidebar-list">
          ${REMINDER_RULES.map(
            (rule) => `
          <div class="list-item">
            <span class="mini-icon">${icon(rule.enabled ? "bell" : "clock")}</span>
            <span><strong>${escapeHtml(rule.name)}</strong><small>${escapeHtml(rule.channel)} · ${escapeHtml(rule.target)}</small></span>
            ${badge(rule.enabled ? "正常" : "停用")}
          </div>`
          ).join("")}
        </div>
      </aside>
    </div>
  `;

  return layout(env, "reminders", "到期提醒", content, actions);
}

function renderCalendarPage(env: Env): string {
  const actions = `<button class="button" type="button">${icon("calendar")}过去 24 小时</button><button class="icon-button" aria-label="刷新">${icon("refresh")}</button>`;
  const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const events: Record<number, Subscription[]> = {
    5: [SUBSCRIPTIONS[1]],
    13: [SUBSCRIPTIONS[0]],
    20: [SUBSCRIPTIONS[3]],
    25: [SUBSCRIPTIONS[4]],
    30: [SUBSCRIPTIONS[2]]
  };
  const days = Array.from({ length: 35 }, (_, index) => index + 1);
  const content = `
    <section class="panel">
      <div class="panel-head"><h2>2027 年 8 月</h2><span>${SUBSCRIPTIONS.length} 个续费节点</span></div>
      <div class="calendar">
        ${weekdays.map((day) => `<div class="weekday">${day}</div>`).join("")}
        ${days
          .map(
            (day) => `
        <div class="day">
          <b>${day}</b>
          ${(events[day] ?? [])
            .map((item) => `<a class="event" href="/subscriptions/${item.id}">${escapeHtml(item.platform)} · ${money(item.cost)}</a>`)
            .join("")}
        </div>`
          )
          .join("")}
      </div>
    </section>
  `;

  return layout(env, "calendar", "续费日历", content, actions);
}

function renderFinancePage(env: Env): string {
  const summary = getSummary();
  const maxIncome = Math.max(...FINANCE_ROWS.map((row) => row.income));
  const actions = `<a class="button" href="/api/summary">${icon("link")}摘要 API</a>`;
  const content = `
    ${renderKpis()}
    <div class="section-grid">
      <section class="panel">
        <div class="panel-head"><h2>月度收入趋势</h2><span>近 4 个账期</span></div>
        <div class="bars">
          ${FINANCE_ROWS.map(
            (row) => `
          <div class="bar-row">
            <strong>${escapeHtml(row.month)}</strong>
            <div class="bar-track" aria-hidden="true"><span style="width:${Math.round((row.income / maxIncome) * 100)}%"></span></div>
            <span>${money(row.income)}</span>
          </div>`
          ).join("")}
        </div>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>本期结算</h2><span>${percent(summary.profitRate)}</span></div>
        <div class="sidebar-list">
          <div class="list-item"><span class="mini-icon">${icon("credit")}</span><span><strong>${money(summary.income)}</strong><small>总收入</small></span></div>
          <div class="list-item"><span class="mini-icon">${icon("chart")}</span><span><strong>${money(summary.cost)}</strong><small>总成本</small></span></div>
          <div class="list-item"><span class="mini-icon">${icon("shield")}</span><span><strong>${money(summary.profit)}</strong><small>净利润</small></span></div>
        </div>
      </aside>
    </div>
    <section class="panel" style="margin-top:20px;">
      <div class="panel-head"><h2>账期流水</h2><span>${FINANCE_ROWS.length} 条记录</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>月份</th><th>收入</th><th>成本</th><th>利润</th><th>续费笔数</th><th>状态</th></tr></thead>
          <tbody>
            ${FINANCE_ROWS.map(
              (row) =>
                `<tr><td data-label="月份">${escapeHtml(row.month)}</td><td data-label="收入">${money(row.income)}</td><td data-label="成本">${money(row.cost)}</td><td data-label="利润"><strong>${money(row.profit)}</strong></td><td data-label="续费笔数">${row.renewals}</td><td data-label="状态">${badge("正常")}</td></tr>`
            ).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  return layout(env, "finance", "财务统计", content, actions);
}

function renderSettingsPage(env: Env): string {
  const actions = `<button class="button primary" type="button">${icon("settings")}保存设置</button>`;
  const content = `
    <div class="detail-grid">
      <section class="panel">
        <div class="panel-head"><h2>Telegram 设置</h2><span>通知通道</span></div>
        <form class="form-grid">
          <div class="field"><label for="bot-token">Bot Token</label><input id="bot-token" type="password" value="123456:••••••••••••••" autocomplete="off" /></div>
          <div class="field"><label for="chat-id">Chat ID</label><input id="chat-id" value="-100520126" autocomplete="off" /></div>
          <div class="field"><label for="timezone">默认时区</label><select id="timezone"><option>Asia/Shanghai</option><option>UTC</option></select></div>
          <div class="field"><label for="send-time">发送时间</label><input id="send-time" type="time" value="09:00" /></div>
          <div class="field full"><label for="template">提醒模板</label><textarea id="template">别忘订阅：{{platform}} 将于 {{date}} 续费，应收 {{amount}}。</textarea></div>
        </form>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>系统偏好</h2><span>V8</span></div>
        <div class="sidebar-list">
          <div class="list-item"><span class="mini-icon">${icon("shield")}</span><span><strong>纯白控制台</strong><small>Cloudflare 风格 UI</small></span>${badge("正常")}</div>
          <div class="list-item"><span class="mini-icon">${icon("key")}</span><span><strong>API Mock</strong><small>后续可接 D1</small></span>${badge("正常")}</div>
          <div class="list-item"><span class="mini-icon">${icon("clock")}</span><span><strong>Cron Trigger</strong><small>每天 01:00 扫描</small></span>${badge("正常")}</div>
        </div>
      </aside>
    </div>
  `;

  return layout(env, "settings", "设置", content, actions);
}

function renderNotFound(env: Env): string {
  const content = `<section class="panel empty"><div><strong>页面不存在</strong><br><span>请从左侧导航重新进入。</span></div></section>`;
  return layout(env, "subscriptions", "未找到页面", content, `<a class="button primary" href="/subscriptions">返回首页</a>`);
}

function html(body: string, init?: ResponseInit): Response {
  return new Response(body, {
    ...init,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      ...init?.headers
    }
  });
}

function routePage(url: URL, env: Env): Response {
  const pathname = url.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/" || pathname === "/subscriptions") {
    return html(renderSubscriptionsPage(env));
  }

  if (pathname === "/subscriptions/new") {
    return html(renderNewSubscriptionPage(env));
  }

  const subscriptionMatch = pathname.match(/^\/subscriptions\/([^/]+)$/);
  if (subscriptionMatch) {
    const subscription = findSubscription(subscriptionMatch[1] ?? "");
    return subscription ? html(renderSubscriptionDetail(env, subscription)) : html(renderNotFound(env), { status: 404 });
  }

  if (pathname === "/members") {
    return html(renderMembersPage(env));
  }

  const memberMatch = pathname.match(/^\/members\/([^/]+)$/);
  if (memberMatch) {
    const member = findMember(memberMatch[1] ?? "");
    return member ? html(renderMemberDetail(env, member, url)) : html(renderNotFound(env), { status: 404 });
  }

  if (pathname === "/reminders") {
    return html(renderRemindersPage(env));
  }

  if (pathname === "/calendar") {
    return html(renderCalendarPage(env));
  }

  if (pathname === "/finance") {
    return html(renderFinancePage(env));
  }

  if (pathname === "/settings") {
    return html(renderSettingsPage(env));
  }

  return html(renderNotFound(env), { status: 404 });
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

    if (url.pathname === "/api/members") {
      return json(getMembers());
    }

    return routePage(url, env);
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
