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
      <symbol id="i-send" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></symbol>
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
  if (status === "正常" || status === "已发送" || status === "已付款" || status === "使用中") return "success";
  if (status === "即将到期" || status === "待发送" || status === "未付款") return "warning";
  if (status === "已过期" || status === "已停用" || status === "未处理" || status === "停用") return "danger";
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
      --shadow: 0 1px 2px rgba(0, 0, 0, .04), 0 5px 18px rgba(0, 0, 0, .035);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
    }
    * { box-sizing: border-box; }
    html { min-width: 0; }
    body { margin: 0; min-width: 0; background: var(--bg); color: var(--ink); font-size: 14px; line-height: 1.45; }
    a { color: inherit; text-decoration: none; }
    button, input, select, textarea { font: inherit; }
    button, .button, .nav-item, .row-link, .icon-button, .filter-pill, .tab, .settings-tabs a, .segment, .toggle { cursor: pointer; }
    :focus-visible { outline: 3px solid rgba(243, 128, 32, .32); outline-offset: 2px; }
    .sprite { position: absolute; }
    .icon { width: 18px; height: 18px; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; fill: none; flex: 0 0 auto; }
    .chevron { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; margin-left: auto; color: var(--subtle); }
    .app { display: grid; grid-template-columns: 260px minmax(0, 1fr); min-height: 100dvh; }
    .sidebar { position: sticky; top: 0; align-self: start; display: flex; flex-direction: column; height: 100dvh; border-right: 1px solid var(--line); background: #fff; }
    .brand { display: flex; align-items: center; gap: 12px; min-height: 64px; padding: 0 18px; border-bottom: 1px solid var(--line-soft); font-weight: 720; letter-spacing: 0; }
    .cloud { position: relative; display: inline-block; width: 38px; height: 23px; flex: 0 0 auto; }
    .cloud::before { content: ""; position: absolute; left: 3px; bottom: 3px; width: 29px; height: 11px; border-radius: 16px; background: var(--orange); box-shadow: 8px 0 0 var(--orange); }
    .cloud::after { content: ""; position: absolute; left: 10px; bottom: 7px; width: 19px; height: 19px; border-radius: 999px; background: var(--orange); box-shadow: 12px 5px 0 -3px var(--orange); }
    .brand-text { min-width: 0; }
    .brand-text strong { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 15px; }
    .brand-text small { display: block; color: var(--muted); font-size: 11px; font-weight: 600; }
    .side-scroll { overflow: auto; padding: 12px 10px 16px; }
    .quick-search { display: flex; align-items: center; gap: 10px; min-height: 40px; margin: 0 0 10px; padding: 0 11px; border: 1px solid var(--line); border-radius: 10px; color: var(--subtle); background: #fff; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .02); font-size: 13px; }
    .quick-search kbd { margin-left: auto; color: var(--subtle); font-size: 12px; font-weight: 650; }
    .nav-group { display: grid; gap: 3px; margin: 14px 0 18px; }
    .nav-heading { padding: 0 11px 5px; color: #777; font-size: 12px; font-weight: 720; }
    .nav-item { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 0 12px; border-radius: 8px; color: #202020; font-size: 14px; font-weight: 660; transition: background .18s ease, color .18s ease; }
    .nav-item .icon { color: #8b8b8b; }
    .nav-item b { display: grid; place-items: center; min-width: 22px; height: 20px; margin-left: auto; padding: 0 7px; border-radius: 999px; background: #ef4444; color: #fff; font-size: 11px; }
    .nav-item:hover, .nav-item.active { background: #f1f1f1; }
    .nav-item.active .icon { color: #616161; }
    .side-footer { margin-top: 20px; padding-top: 12px; border-top: 1px solid var(--line); }
    .main { min-width: 0; }
    .topbar { display: flex; align-items: center; justify-content: flex-end; gap: 12px; min-height: 64px; padding: 0 24px; border-bottom: 1px solid var(--line-soft); background: #fff; }
    .topbar a, .topbar button { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-width: 40px; min-height: 40px; border: 0; background: transparent; color: #3d3d3d; font-weight: 680; }
    .topbar .dot { width: 8px; height: 8px; border-radius: 999px; background: #ef4444; box-shadow: 0 0 0 4px #fee2e2; }
    .user-chip { display: inline-flex; align-items: center; gap: 10px; }
    .topbar .avatar { width: 34px; height: 34px; font-size: 13px; }
    .workspace { width: min(1280px, 100%); margin: 0 auto; padding: 28px 28px 36px; }
    .page-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
    .page-title h1 { margin: 0; color: #151515; font-size: 25px; line-height: 1.2; letter-spacing: 0; }
    .page-title p { margin: 6px 0 0; color: var(--muted); font-size: 14px; }
    .actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; }
    .button, .icon-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 40px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: #202020; font-weight: 700; box-shadow: 0 1px 1px rgba(0,0,0,.025); transition: border-color .18s ease, background .18s ease, color .18s ease, box-shadow .18s ease; }
    .button { padding: 0 12px; }
    .button:hover, .icon-button:hover, .filter-pill:hover { border-color: #cfcfcf; background: #fafafa; }
    .button.primary { border-color: #202020; background: #202020; color: #fff; }
    .button.primary:hover { border-color: #111; background: #111; }
    .button.orange { border-color: var(--orange); background: var(--orange); color: #fff; }
    .button.danger { border-color: #fecaca; background: #fff; color: var(--red); }
    .icon-button { width: 40px; min-width: 40px; flex: 0 0 40px; padding: 0; }
    .icon-button.previous .icon { transform: rotate(180deg); }
    .search-hero { display: flex; align-items: center; gap: 10px; min-height: 50px; margin: 0 auto 20px; padding: 0 14px; border: 1px solid var(--line); border-radius: 12px; background: #fff; box-shadow: 0 0 0 6px rgba(0, 0, 0, .014), inset 0 0 0 1px rgba(0,0,0,.02); color: var(--subtle); }
    .search-hero input { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--ink); background: transparent; font-size: 14px; }
    .search-hero kbd { display: inline-flex; align-items: center; justify-content: center; min-width: 24px; height: 24px; border: 1px solid var(--line); border-radius: 6px; color: #666; background: #fafafa; font-size: 12px; font-weight: 720; }
    .kpis { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; margin-bottom: 20px; }
    .kpis.compact { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .panel, .card, .metric-card { min-width: 0; border: 1px solid var(--line-soft); border-radius: 10px; background: #fff; box-shadow: var(--shadow); }
    .metric-card { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-width: 0; padding: 14px; }
    .metric-card span { color: var(--muted); font-size: 12px; font-weight: 700; }
    .metric-card strong { display: block; margin: 5px 0 1px; font-size: 24px; line-height: 1.08; font-weight: 760; letter-spacing: 0; font-variant-numeric: tabular-nums; }
    .metric-card small { color: var(--green); font-size: 12px; font-weight: 700; }
    .metric-icon { display: grid; place-items: center; width: 40px; height: 40px; border: 1px solid var(--line-soft); border-radius: 10px; flex: 0 0 auto; }
    .metric-icon .icon { width: 19px; height: 19px; }
    .tone-blue { color: #2563eb; background: #eff6ff; }
    .tone-green { color: #059669; background: #ecfdf5; }
    .tone-orange { color: #ea580c; background: #fff7ed; }
    .tone-red { color: #dc2626; background: #fef2f2; }
    .tone-purple { color: #7c3aed; background: #f5f3ff; }
    .tone-gray { color: #525252; background: #f5f5f5; }
    .section-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 16px; align-items: start; }
    .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 50px; padding: 0 14px; border-bottom: 1px solid var(--line-soft); }
    .panel-head h2 { margin: 0; font-size: 15px; letter-spacing: 0; }
    .panel-head span { color: var(--muted); font-size: 12px; font-weight: 650; }
    .table-wrap { max-width: 100%; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; min-width: 760px; }
    .subscriptions-table { min-width: 680px; }
    th, td { padding: 12px 14px; border-bottom: 1px solid var(--line-soft); text-align: left; vertical-align: middle; }
    th { color: var(--muted); font-size: 12px; font-weight: 720; white-space: nowrap; }
    td { color: #2b2b2b; font-size: 13px; }
    tr:last-child td { border-bottom: 0; }
    tbody tr { transition: background .18s ease; }
    tbody tr:hover { background: #fbfbfb; }
    .entity { display: flex; align-items: center; gap: 10px; min-width: 170px; }
    .entity strong { display: block; color: #202020; font-size: 14px; }
    .entity small, .muted { color: var(--muted); font-size: 12px; }
    .avatar, .brand-mark { display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 999px; color: #fff; font-weight: 740; flex: 0 0 auto; font-size: 13px; }
    .avatar.gray { background: #737373; }
    .avatar.blue { background: #2563eb; }
    .avatar.green { background: #059669; }
    .avatar.orange { background: var(--orange); }
    .brand-mark { background: var(--accent); }
    .badge { display: inline-flex; align-items: center; min-height: 22px; padding: 0 8px; border-radius: 999px; font-size: 11px; font-weight: 740; white-space: nowrap; }
    .badge.success { color: #047857; background: #dcfce7; }
    .badge.warning { color: #a16207; background: #fef3c7; }
    .badge.danger { color: #b91c1c; background: #fee2e2; }
    .badge.neutral { color: #575757; background: #f0f0f0; }
    .progress { display: flex; align-items: center; gap: 8px; min-width: 120px; }
    .progress .bar { width: 100%; height: 7px; border-radius: 999px; background: #ededed; overflow: hidden; }
    .progress .bar span { display: block; height: 100%; border-radius: inherit; background: #202020; }
    .progress strong { min-width: 45px; font-variant-numeric: tabular-nums; }
    .row-actions { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
    .filter-bar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: -2px 0 16px; }
    .filter-pill { display: inline-flex; align-items: center; gap: 7px; min-height: 38px; padding: 0 11px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: #3f3f3f; font-weight: 680; }
    .filter-pill .icon { width: 16px; height: 16px; color: #777; }
    .tabs { display: flex; align-items: center; gap: 16px; min-height: 46px; padding: 0 14px; border-bottom: 1px solid var(--line-soft); overflow-x: auto; }
    .tab { position: relative; display: inline-flex; align-items: center; min-height: 46px; color: var(--muted); font-weight: 720; white-space: nowrap; }
    .tab.active { color: #111; }
    .tab.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; border-radius: 999px; background: #202020; }
    .subscription-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 16px; }
    .subscription-card { min-width: 0; padding: 14px; border: 1px solid var(--line-soft); border-radius: 10px; background: #fff; box-shadow: var(--shadow); transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease; }
    .subscription-card:hover, .subscription-card:focus-within { border-color: #d4d4d4; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }
    .subscription-card .card-top { margin-bottom: 12px; }
    .seat-meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; margin: 12px 0; }
    .seat-meta span { color: var(--muted); font-size: 12px; font-weight: 720; }
    .seat-meta strong { display: block; margin-top: 2px; color: #202020; font-size: 13px; font-variant-numeric: tabular-nums; }
    .member-stack { display: flex; align-items: center; gap: 7px; min-height: 34px; margin: 12px 0; overflow: hidden; }
    .member-stack .avatar { width: 28px; height: 28px; font-size: 12px; box-shadow: 0 0 0 2px #fff; }
    .slot-empty { display: grid; place-items: center; width: 28px; height: 28px; border: 1px dashed #cfcfcf; border-radius: 999px; color: #777; background: #fff; font-weight: 760; }
    .finance-strip { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; padding: 10px; border-radius: 8px; background: #f7f7f7; }
    .finance-strip span { color: var(--muted); font-size: 12px; font-weight: 720; }
    .finance-strip strong { display: block; color: #202020; font-size: 13px; font-variant-numeric: tabular-nums; }
    .finance-strip strong.positive { color: var(--green); }
    .empty-card { display: grid; place-items: center; min-height: 228px; border: 1px dashed #d4d4d4; border-radius: 10px; background: #fff; color: var(--muted); text-align: center; }
    .empty-card .mini-icon { width: 48px; height: 48px; border-radius: 999px; margin: 0 auto 10px; }
    .sidebar-list { display: grid; gap: 8px; padding: 12px; }
    .list-item { display: grid; grid-template-columns: 32px minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 8px; border-radius: 8px; transition: background .18s ease; }
    .list-item:hover { background: #f7f7f7; }
    .list-item strong { display: block; font-size: 13px; }
    .list-item small { color: var(--muted); }
    .mini-icon { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--line-soft); color: #777; background: #fff; }
    .mini-icon .icon { width: 16px; height: 16px; }
    .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
    .card { padding: 14px; min-width: 0; }
    .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
    .card h3 { margin: 0; font-size: 16px; line-height: 1.25; letter-spacing: 0; }
    .card p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
    .detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 16px; align-items: start; }
    .profile-panel { padding: 18px; }
    .profile-top { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 16px; align-items: center; }
    .profile-photo { display: grid; place-items: center; width: 78px; height: 78px; border-radius: 999px; background: linear-gradient(135deg, #f97316, #2563eb); color: #fff; font-size: 28px; font-weight: 780; }
    .profile-copy h2 { margin: 0; font-size: 23px; letter-spacing: 0; }
    .profile-copy p { display: flex; align-items: center; gap: 7px; margin: 5px 0 0; color: var(--muted); }
    .status-line { display: grid; gap: 6px; justify-items: end; color: var(--muted); font-weight: 700; }
    .status-dot { display: inline-block; width: 9px; height: 9px; border-radius: 999px; background: #22c55e; box-shadow: 0 0 0 5px #dcfce7; }
    .facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 12px; }
    .fact { padding: 12px; border: 1px solid var(--line-soft); border-radius: 8px; background: #fff; }
    .fact span { color: var(--muted); font-size: 12px; font-weight: 720; }
    .fact strong { display: block; margin-top: 4px; font-size: 15px; font-variant-numeric: tabular-nums; }
    .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; padding: 14px; }
    .field { display: grid; gap: 6px; }
    .field.full { grid-column: 1 / -1; }
    label { color: #2a2a2a; font-size: 13px; font-weight: 760; }
    input, select, textarea { width: 100%; min-height: 40px; border: 1px solid var(--line); border-radius: 8px; padding: 0 11px; background: #fff; color: var(--ink); }
    textarea { min-height: 88px; padding: 10px 11px; resize: vertical; }
    .brand-picker { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .brand-option { display: grid; place-items: center; width: 50px; height: 50px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: #fff; font-weight: 780; }
    .brand-option.add { border-style: dashed; color: #555; background: #fff; }
    .segmented { display: flex; gap: 8px; flex-wrap: wrap; }
    .segment { display: inline-flex; align-items: center; justify-content: center; min-width: 66px; min-height: 40px; padding: 0 12px; border: 1px solid var(--line); border-radius: 8px; background: #fff; font-weight: 700; }
    .segment.active { border-color: #202020; box-shadow: 0 0 0 3px rgba(0,0,0,.06); }
    .rule-box { grid-column: 1 / -1; padding: 14px; border: 1px solid #bfdbfe; border-radius: 8px; background: #fff; }
    .rule-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 10px; }
    .rule-item { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 8px; align-items: center; padding: 10px; border: 1px solid var(--line-soft); border-radius: 8px; }
    .calendar { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); border-top: 1px solid var(--line-soft); border-left: 1px solid var(--line-soft); }
    .day, .weekday { min-height: 94px; padding: 10px; border-right: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); background: #fff; }
    .weekday { min-height: auto; color: var(--muted); font-size: 12px; font-weight: 780; background: #fafafa; }
    .day b { display: block; font-size: 13px; }
    .event { display: flex; align-items: center; min-height: 44px; margin-top: 8px; padding: 6px 8px; border-radius: 8px; background: #f5f5f5; color: #333; font-size: 12px; font-weight: 720; overflow-wrap: anywhere; }
    .bars { display: grid; gap: 10px; padding: 14px; }
    .bar-row { display: grid; grid-template-columns: 78px minmax(0, 1fr) 66px; gap: 10px; align-items: center; }
    .bar-track { height: 14px; border-radius: 999px; background: #f1f1f1; overflow: hidden; }
    .bar-track span { display: block; height: 100%; border-radius: inherit; background: #202020; }
    .timeline { display: grid; gap: 12px; padding: 14px; }
    .timeline-item { display: grid; grid-template-columns: 32px minmax(0, 1fr) auto; gap: 10px; align-items: start; }
    .timeline-dot { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 999px; border: 1px solid var(--line); color: #777; background: #fff; }
    .timeline-dot .icon { width: 16px; height: 16px; }
    .calendar-layout { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 16px; align-items: stretch; }
    .calendar-tools { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 14px; border-bottom: 1px solid var(--line-soft); }
    .calendar-title { font-size: 20px; font-weight: 760; }
    .event.green { color: #047857; background: #dcfce7; }
    .event.orange { color: #b45309; background: #ffedd5; }
    .event.red { color: #b91c1c; background: #fee2e2; }
    .legend { display: flex; justify-content: center; gap: 18px; flex-wrap: wrap; padding: 12px; color: var(--muted); font-size: 12px; font-weight: 680; }
    .legend i { display: inline-block; width: 9px; height: 9px; margin-right: 7px; border-radius: 999px; }
    .finance-grid { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 16px; align-items: stretch; margin-bottom: 16px; }
    .chart-card { padding: 14px; }
    .chart-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
    .chart-head h2 { margin: 0; font-size: 16px; }
    .line-chart { width: 100%; min-width: 0; height: 230px; }
    .line-chart text { fill: #737373; font-size: 12px; }
    .line-chart .grid-line { stroke: #e7e7e7; stroke-dasharray: 4 6; }
    .donut-wrap { display: grid; grid-template-columns: 152px minmax(0, 1fr); gap: 16px; align-items: center; padding: 14px; }
    .donut { position: relative; display: grid; place-items: center; width: min(152px, 100%); aspect-ratio: 1; border-radius: 999px; background: conic-gradient(#ef4444 0 45%, #22c55e 45% 70%, #2563eb 70% 85%, #f97316 85% 95%, #14b8a6 95% 100%); }
    .donut::after { content: ""; position: absolute; width: 78px; height: 78px; border-radius: 999px; background: #fff; box-shadow: inset 0 0 0 1px var(--line-soft); }
    .donut strong { position: relative; z-index: 1; font-size: 18px; }
    .breakdown { display: grid; gap: 10px; }
    .breakdown-row { display: grid; grid-template-columns: 12px minmax(0, 1fr); gap: 2px 10px; align-items: start; font-weight: 730; overflow-wrap: anywhere; }
    .breakdown-row i { width: 10px; height: 10px; border-radius: 999px; }
    .breakdown-row strong { grid-column: 2; color: #202020; font-size: 13px; font-variant-numeric: tabular-nums; }
    .settings-tabs { display: flex; gap: 22px; padding: 0 18px; border-bottom: 1px solid var(--line-soft); overflow-x: auto; }
    .settings-tabs a { min-height: 48px; display: inline-flex; align-items: center; color: var(--muted); font-weight: 720; white-space: nowrap; }
    .settings-tabs a.active { color: #111; box-shadow: inset 0 -2px #202020; }
    .telegram-head { display: grid; grid-template-columns: 50px minmax(0, 1fr); gap: 14px; align-items: center; padding: 18px 18px 6px; }
    .telegram-logo { display: grid; place-items: center; width: 50px; height: 50px; border-radius: 999px; color: #fff; background: #229ed9; }
    .telegram-logo .icon { width: 24px; height: 24px; }
    .setting-row { display: grid; grid-template-columns: 42px minmax(0, 1fr) 220px 58px; gap: 14px; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--line-soft); }
    .setting-row:last-child { border-bottom: 0; }
    .toggle { position: relative; display: inline-block; width: 52px; min-width: 52px; height: 44px; border: 0; border-radius: 999px; background: transparent; box-shadow: none; padding: 0; justify-self: end; }
    .toggle::before { content: ""; position: absolute; left: 0; top: 7px; width: 52px; height: 30px; border-radius: 999px; background: #2563eb; box-shadow: inset 0 0 0 1px rgba(0,0,0,.08); }
    .toggle::after { content: ""; position: absolute; top: 11px; right: 4px; width: 22px; height: 22px; border-radius: 999px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.22); }
    .info-note { display: flex; gap: 8px; align-items: flex-start; padding: 12px 14px; border-radius: 8px; background: #f5f7fb; color: #5f6b7a; font-size: 12px; }
    .modal-backdrop { position: fixed; inset: 0; display: grid; place-items: center; padding: 24px; background: rgba(0, 0, 0, .26); z-index: 20; }
    .modal { width: min(440px, 100%); border-radius: 14px; background: #fff; box-shadow: 0 18px 80px rgba(0, 0, 0, .22); }
    .modal .panel-head { min-height: 62px; }
    .modal-body { padding: 14px; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 8px; padding: 0 14px 14px; }
    .empty { display: grid; place-items: center; min-height: 180px; padding: 20px; color: var(--muted); text-align: center; }
    .footer { margin-top: 22px; color: var(--subtle); font-size: 12px; }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
    }
    @media (max-width: 1180px) {
      .kpis { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .cards, .subscription-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .section-grid, .detail-grid, .calendar-layout, .finance-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 840px) {
      .app { grid-template-columns: 1fr; }
      .app, .main, .workspace { width: 100%; max-width: 100vw; overflow-x: hidden; }
      .sidebar { position: static; height: auto; }
      .brand { min-height: 66px; }
      .brand-text strong { font-size: 16px; }
      .side-scroll { min-width: 0; overflow: hidden; padding: 10px 12px 8px; }
      .quick-search { display: none; }
      nav { display: flex; gap: 6px; flex-wrap: wrap; overflow: visible; padding-bottom: 4px; }
      .nav-group { display: flex; flex: 1 1 100%; flex-wrap: wrap; gap: 6px; margin: 0; }
      .nav-heading, .side-footer { display: none; }
      .nav-item { min-width: 0; min-height: 44px; flex: 1 1 calc(50% - 6px); padding: 0 12px; }
      .nav-item .chevron { display: none; }
      .topbar { justify-content: space-between; min-height: 56px; padding: 0 18px; }
      .topbar a, .topbar button { min-width: 44px; min-height: 44px; }
      .button, .icon-button, .filter-pill, input, select { min-height: 44px; }
      .icon-button { width: 44px; min-width: 44px; flex-basis: 44px; }
      .subscription-card .entity, td .entity { min-height: 44px; }
      .workspace { padding: 22px 16px 30px; }
      .page-head { flex-direction: column; margin-bottom: 18px; }
      .page-head .actions { width: 100%; justify-content: flex-start; }
      .page-head, .search-hero, .panel, .table-wrap { max-width: 100%; }
      .search-hero { margin-bottom: 18px; }
      .cards, .form-grid, .facts, .subscription-grid, .profile-top, .setting-row, .donut-wrap, .rule-list { grid-template-columns: 1fr; }
      .status-line { justify-items: start; }
      .toggle { justify-self: start; }
      .field.full { grid-column: auto; }
      .calendar { grid-template-columns: 1fr; border-left: 0; }
      .weekday { display: none; }
      .day { min-height: 86px; border-left: 1px solid var(--line-soft); }
      .event { min-height: 44px; }
    }
    @media (max-width: 520px) {
      .kpis { grid-template-columns: 1fr; }
      .nav-group { grid-template-columns: 1fr; }
      .topbar a span, .topbar button span { display: none; }
      .page-title h1 { font-size: 22px; }
      .page-head .button { width: 100%; }
      .settings-tabs { flex-wrap: wrap; gap: 0 16px; overflow: visible; padding: 0 18px; }
      .settings-tabs a { min-height: 50px; }
      .telegram-head { grid-template-columns: 1fr; }
      .profile-copy h2 { font-size: 22px; }
      .metric-card strong { font-size: 23px; }
      .row-actions { justify-content: flex-start; }
      .table-wrap { overflow: visible; }
      table, thead, tbody, tr, th, td { display: block; min-width: 0; }
      thead { display: none; }
      tbody tr { padding: 12px 14px; border-bottom: 1px solid var(--line-soft); }
      tbody tr:last-child { border-bottom: 0; }
      th, td { border-bottom: 0; padding: 7px 0; }
      td { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-width: 0; text-align: right; overflow-wrap: anywhere; }
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
    ["订阅账号", String(summary.subscriptionCount), "本期 +2", "car", "tone-blue"],
    ["总位置", String(summary.seats), `${summary.used} 个已使用`, "users", "tone-purple"],
    ["已使用", String(summary.used), `空闲 ${summary.empty}`, "shield", "tone-green"],
    ["本期收入", money(summary.income), "当前账期", "credit", "tone-orange"],
    ["本期利润", money(summary.profit), `利润率 ${percent(summary.profitRate)}`, "chart", "tone-green"],
    ["提醒队列", `${summary.reminders} 条`, "含未付款", "bell", "tone-red"]
  ];

  return `
    <section class="kpis" aria-label="关键指标">
      ${cards
        .map(
          ([label, value, note, iconName, tone]) => `
        <article class="metric-card">
          <div>
            <span>${label}</span>
            <strong>${value}</strong>
            <small>${note}</small>
          </div>
          <span class="metric-icon ${tone}">${icon(iconName)}</span>
        </article>`
        )
        .join("")}
    </section>
  `;
}

function subscriptionIncome(item: Subscription): number {
  return item.members.reduce((sum, member) => sum + member.amount, 0);
}

function subscriptionProfit(item: Subscription): number {
  return subscriptionIncome(item) - item.cost;
}

function toneForIndex(index: number): string {
  return ["orange", "blue", "green"][index % 3] ?? "gray";
}

function renderMemberStack(item: Subscription): string {
  const visibleMembers = item.members.slice(0, 5);
  const emptySlots = Math.max(0, Math.min(item.capacity - item.members.length, 3));

  return `
    <div class="member-stack" aria-label="${escapeHtml(item.platform)} 车位成员">
      ${visibleMembers.map((member, index) => avatar(member.name, toneForIndex(index))).join("")}
      ${Array.from({ length: emptySlots }, () => `<span class="slot-empty">+</span>`).join("")}
    </div>
  `;
}

function renderSubscriptionCard(item: Subscription): string {
  const income = subscriptionIncome(item);
  const profit = subscriptionProfit(item);
  const used = item.members.length;

  return `
    <article class="subscription-card">
      <div class="card-top">
        <a class="entity" href="/subscriptions/${item.id}">
          <span class="brand-mark" style="--accent:${item.accent}; width:40px; height:40px;">${escapeHtml(item.platform.slice(0, 1))}</span>
          <span><strong>${escapeHtml(item.platform)}</strong><small>${escapeHtml(item.seatNo)} · ${escapeHtml(item.category)}</small></span>
        </a>
        <button class="icon-button" aria-label="${escapeHtml(item.platform)} 更多操作">${icon("more")}</button>
      </div>
      <div class="seat-meta">
        <div><span>主账号</span><strong>${escapeHtml(item.account)}</strong></div>
        <div><span>续费日期</span><strong>${escapeHtml(item.renewalDate)}</strong></div>
        <div><span>成本</span><strong>${money(item.cost)} / ${escapeHtml(item.cycle)}</strong></div>
        <div><span>容量</span><strong>${used} / ${item.capacity}</strong></div>
      </div>
      <div class="progress" aria-label="车位使用 ${used} / ${item.capacity}">
        <div class="bar" aria-hidden="true"><span style="width:${Math.round((used / item.capacity) * 100)}%"></span></div>
        <strong>${used}/${item.capacity}</strong>
      </div>
      ${renderMemberStack(item)}
      <div class="finance-strip">
        <div><span>收入</span><strong>${money(income)}</strong></div>
        <div><span>成本</span><strong>${money(item.cost)}</strong></div>
        <div><span>利润</span><strong class="${profit >= 0 ? "positive" : ""}">${money(profit)}</strong></div>
      </div>
    </article>
  `;
}

function renderFilterBar(items: string[]): string {
  return `
    <div class="filter-bar" aria-label="筛选条件">
      ${items.map((item) => `<button class="filter-pill" type="button"><span>${escapeHtml(item)}</span>${icon("chevron")}</button>`).join("")}
      <button class="filter-pill" type="button">${icon("refresh")}重置</button>
    </div>
  `;
}

function renderSubscriptionsPage(env: Env): string {
  const actions = `
    <a class="button" href="/api/subscriptions">${icon("link")}接口</a>
    <a class="button primary" href="/subscriptions/new">${icon("plus")}添加订阅</a>
  `;

  const cards = `
    <section class="subscription-grid" aria-label="订阅车位卡片">
      ${SUBSCRIPTIONS.map(renderSubscriptionCard).join("")}
      <a class="empty-card" href="/subscriptions/new">
        <span>
          <span class="mini-icon">${icon("plus")}</span>
          <strong>添加订阅账号</strong><br>
          <small>管理更多共享车位</small>
        </span>
      </a>
    </section>
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

  return layout(
    env,
    "subscriptions",
    "订阅车位",
    `${renderSearch("搜索订阅平台 / 主账号 / 车位")} ${renderKpis()} ${renderFilterBar(["全部平台", "全部状态", "计费周期"])} ${cards} <div class="section-grid">${table}${side}</div>`,
    actions
  );
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
    <section class="panel profile-panel">
      <div class="profile-top">
        <span class="brand-mark" style="--accent:${subscription.accent}; width:66px; height:66px; font-size:24px;">${escapeHtml(subscription.platform.slice(0, 1))}</span>
        <div class="profile-copy">
          <h2>${escapeHtml(subscription.platform)} ${badge(subscription.status === "正常" ? "使用中" : subscription.status)}</h2>
          <p>${icon("mail")}${escapeHtml(subscription.account)}</p>
          <p>${escapeHtml(subscription.category)} · ${escapeHtml(subscription.seatNo)}</p>
        </div>
        <div class="status-line">
          <span>容量：<strong>${subscription.members.length} / ${subscription.capacity}</strong></span>
          <span>计费周期：${escapeHtml(subscription.cycle)}</span>
        </div>
      </div>
      <div class="facts">
        <div class="fact"><span>续费时间</span><strong>${escapeHtml(subscription.renewalDate)}</strong></div>
        <div class="fact"><span>成本</span><strong>${money(subscription.cost)}</strong></div>
        <div class="fact"><span>利润</span><strong>${money(profit)}</strong></div>
      </div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>位置管理</h2><a class="button primary" href="/members">${icon("plus")}添加车友</a></div>
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
        <div class="field"><label for="platform">平台名称 <span class="muted">*</span></label><input id="platform" placeholder="例如：Netflix" autocomplete="organization" /></div>
        <div class="field">
          <label>平台图标 <span class="muted">*</span></label>
          <div class="brand-picker">
            ${SUBSCRIPTIONS.map((item) => `<span class="brand-option" style="background:${item.accent}">${escapeHtml(item.platform.slice(0, 1))}</span>`).join("")}
            <span class="brand-option add">${icon("plus")}</span>
          </div>
        </div>
        <div class="field"><label for="account">主账号</label><input id="account" type="email" value="account@example.com" autocomplete="email" /></div>
        <div class="field">
          <label>容量配置 <span class="muted">*</span></label>
          <div class="segmented"><span class="segment active">5 个</span><span class="segment">6 个</span><span class="segment">7 个</span><span class="segment">自定义</span></div>
        </div>
        <div class="field"><label for="cost">会员费用</label><input id="cost" type="number" min="0" value="139" /></div>
        <div class="field"><label for="cycle">计费周期</label><select id="cycle"><option>月付</option><option>季付</option><option>年付</option></select></div>
        <div class="field"><label for="renewal">下次续费日期</label><input id="renewal" type="date" value="2027-08-25" /></div>
        <div class="field"><label for="category">分类</label><select id="category"><option>视频娱乐</option><option>AI 工具</option><option>音乐</option><option>云服务</option></select></div>
        <div class="field full"><label for="note">备注</label><textarea id="note">可记录套餐类型、购买渠道、登录限制和验证码接收方式。</textarea></div>
        <div class="rule-box">
          <strong>默认提醒规则</strong><span class="muted">（可在设置中修改）</span>
          <div class="rule-list">
            <div class="rule-item"><span class="metric-icon tone-blue">${icon("bell")}</span><span><strong>到期前 7 天</strong><br><span class="muted">发送首次提醒</span></span></div>
            <div class="rule-item"><span class="metric-icon tone-orange">${icon("bell")}</span><span><strong>到期前 3 天</strong><br><span class="muted">发送二次提醒</span></span></div>
            <div class="rule-item"><span class="metric-icon tone-red">${icon("bell")}</span><span><strong>到期当天</strong><br><span class="muted">发送当天提醒</span></span></div>
          </div>
        </div>
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
    ${renderFilterBar(["状态：全部", "拥有订阅数：全部", "下次续费：全部"])}
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
        <section class="panel profile-panel">
          <div class="profile-top">
            <div class="profile-photo">${escapeHtml(member.name.slice(0, 1))}</div>
            <div class="profile-copy">
              <h2>${escapeHtml(member.name)} ${badge("普通成员")}</h2>
              <p>${icon("mail")}${escapeHtml(member.email)}</p>
              <p>${icon("phone")}${escapeHtml(member.phone)}</p>
            </div>
            <div class="status-line">
              <span><i class="status-dot"></i> 状态：<strong>${escapeHtml(member.status)}</strong></span>
              <span>加入时间：2026-06-20</span>
            </div>
          </div>
          <div class="facts">
            <div class="fact"><span>拥有订阅</span><strong>${member.subscriptions.length} 个</strong></div>
            <div class="fact"><span>每月费用</span><strong>${money(member.monthlyFee)}</strong></div>
            <div class="fact"><span>下次续费</span><strong>${escapeHtml(member.dueDate)}</strong></div>
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
  const expiredCount = summary.renewals.filter((item) => item.status === "已过期").length;
  const activeRuleCount = REMINDER_RULES.filter((rule) => rule.enabled).length;
  const reminderItems = [
    ...summary.renewals.map((item) => ({
      title: item.platform,
      type: "主账号续费",
      detail: item.account,
      dueDate: item.renewalDate,
      amount: item.cost,
      seats: `${item.members.length} / ${item.capacity}`,
      status: item.status === "已过期" ? "未处理" : "待发送"
    })),
    ...summary.unpaid.map((item) => ({
      title: item.platform,
      type: "未付款提醒",
      detail: item.member,
      dueDate: item.dueDate,
      amount: 0,
      seats: "-",
      status: "未付款"
    }))
  ];
  const actions = `<button class="button primary" type="button">${icon("plus")}新增规则</button>`;
  const content = `
    <section class="kpis compact" aria-label="提醒指标">
      <article class="metric-card"><div><span>待处理提醒</span><strong>${reminderItems.length}</strong><small>含主账号和车友</small></div><span class="metric-icon tone-blue">${icon("bell")}</span></article>
      <article class="metric-card"><div><span>未付款提醒</span><strong>${summary.unpaid.length}</strong><small>需要跟进收款</small></div><span class="metric-icon tone-orange">${icon("credit")}</span></article>
      <article class="metric-card"><div><span>已过期账号</span><strong>${expiredCount}</strong><small>优先处理续费</small></div><span class="metric-icon tone-red">${icon("calendar")}</span></article>
      <article class="metric-card"><div><span>启用规则</span><strong>${activeRuleCount}</strong><small>Telegram 自动发送</small></div><span class="metric-icon tone-purple">${icon("refresh")}</span></article>
    </section>
    <div class="section-grid">
      <section class="panel">
        <div class="tabs">
          <a class="tab active" href="/reminders">全部提醒 (${reminderItems.length})</a>
          <a class="tab" href="/reminders">主账号 (2)</a>
          <a class="tab" href="/reminders">车友 (3)</a>
          <a class="tab" href="/reminders">未付款 (2)</a>
        </div>
        <div style="padding:14px 14px 0;">
          ${renderFilterBar(["全部平台", "全部类型", "全部状态", "到期时间"])}
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>订阅信息</th><th>提醒类型</th><th>到期日期</th><th>金额</th><th>座位使用</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              ${reminderItems
                .map(
                  (item) => `
                <tr>
                  <td data-label="订阅信息"><span class="entity">${icon("bell")}<span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span></span></td>
                  <td data-label="提醒类型"><strong>${escapeHtml(item.type)}</strong><br><span class="muted">自动提醒</span></td>
                  <td data-label="到期日期">${escapeHtml(item.dueDate)}</td>
                  <td data-label="金额">${item.amount > 0 ? `${money(item.amount)} / 期` : "-"}</td>
                  <td data-label="座位使用">${escapeHtml(item.seats)}</td>
                  <td data-label="状态">${badge(item.status)}</td>
                  <td data-label="操作"><div class="row-actions"><button class="button primary" type="button">处理</button><button class="button" type="button">延后</button></div></td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
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
  const actions = `<button class="button" type="button">${icon("calendar")}月视图</button><button class="icon-button" aria-label="刷新">${icon("refresh")}</button>`;
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
    <div class="calendar-layout">
      <section class="panel">
        <div class="calendar-tools">
          <button class="icon-button previous" aria-label="上个月">${icon("chevron")}</button>
          <div class="calendar-title">2027 年 8 月</div>
          <button class="button" type="button">今天</button>
        </div>
        <div class="calendar">
          ${weekdays.map((day) => `<div class="weekday">${day}</div>`).join("")}
          ${days
            .map(
              (day) => `
          <div class="day">
            <b>${day}</b>
            ${(events[day] ?? [])
              .map((item, index) => `<a class="event ${index % 3 === 0 ? "green" : index % 3 === 1 ? "orange" : "red"}" href="/subscriptions/${item.id}">${escapeHtml(item.platform)} · ${money(item.cost)}</a>`)
              .join("")}
          </div>`
            )
            .join("")}
        </div>
        <div class="legend"><span><i style="background:#22c55e"></i>主账号续费</span><span><i style="background:#f97316"></i>车友续费</span><span><i style="background:#ef4444"></i>未付款提醒</span></div>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>2027-08-13</h2><span>2 个事件</span></div>
        <div class="sidebar-list">
          <div class="list-item"><span class="mini-icon">${icon("credit")}</span><span><strong>Netflix 主账号续费</strong><small>01 号车位 · ${money(139)}</small></span>${icon("chevron", "chevron")}</div>
          <div class="list-item"><span class="mini-icon">${icon("bell")}</span><span><strong>钱七 未付款提醒</strong><small>自动提醒 · ${money(40)}</small></span>${icon("chevron", "chevron")}</div>
          <div class="info-note">${icon("link")}日历显示所有订阅的下次续费日期，点击日期可查看当天事件。</div>
        </div>
      </aside>
    </div>
  `;

  return layout(env, "calendar", "续费日历", content, actions);
}

function renderFinancePage(env: Env): string {
  const summary = getSummary();
  const actions = `<button class="button" type="button">${icon("calendar")}2027-04 ~ 2027-07</button><a class="button" href="/api/summary">${icon("link")}摘要 API</a>`;
  const breakdown = [
    ["Netflix", 45, money(210), "#ef4444"],
    ["Spotify", 25, money(120), "#22c55e"],
    ["YouTube Premium", 15, money(150), "#2563eb"],
    ["Disney+", 10, money(270), "#f97316"],
    ["ChatGPT Plus", 5, money(180), "#14b8a6"]
  ];
  const content = `
    ${renderKpis()}
    <div class="finance-grid">
      <section class="panel chart-card">
        <div class="chart-head">
          <h2>收入 / 成本 / 利润趋势</h2>
          <button class="filter-pill" type="button">按月 ${icon("chevron")}</button>
        </div>
        <svg class="line-chart" viewBox="0 0 640 280" role="img" aria-label="收入成本利润趋势图">
          <line class="grid-line" x1="54" y1="42" x2="610" y2="42"></line>
          <line class="grid-line" x1="54" y1="98" x2="610" y2="98"></line>
          <line class="grid-line" x1="54" y1="154" x2="610" y2="154"></line>
          <line class="grid-line" x1="54" y1="210" x2="610" y2="210"></line>
          <text x="18" y="46">1,000</text><text x="24" y="102">750</text><text x="24" y="158">500</text><text x="24" y="214">250</text>
          <polyline points="70,202 210,176 350,138 490,120 610,92" fill="none" stroke="#f97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
          <polyline points="70,222 210,205 350,188 490,168 610,156" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
          <polyline points="70,238 210,216 350,182 490,152 610,132" fill="none" stroke="#22c55e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
          <text x="70" y="260">4月</text><text x="205" y="260">5月</text><text x="346" y="260">6月</text><text x="486" y="260">7月</text><text x="590" y="260">本月</text>
        </svg>
        <div class="legend"><span><i style="background:#f97316"></i>收入</span><span><i style="background:#ef4444"></i>成本</span><span><i style="background:#22c55e"></i>利润</span></div>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>订阅收入占比</h2><span>${money(summary.income)}</span></div>
        <div class="donut-wrap">
          <div class="donut"><strong>${money(summary.income)}</strong></div>
          <div class="breakdown">
            ${breakdown
              .map(
                ([name, ratio, amount, color]) => `
              <div class="breakdown-row"><i style="background:${color}"></i><span>${escapeHtml(String(name))}</span><strong>${ratio}% · ${amount}</strong></div>`
              )
              .join("")}
          </div>
        </div>
      </aside>
    </div>
    <section class="panel" style="margin-top:16px;">
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
        <div class="settings-tabs">
          <a href="/settings">账号设置</a>
          <a href="/settings">通知设置</a>
          <a class="active" href="/settings">Telegram 设置</a>
          <a href="/settings">费用设置</a>
          <a href="/settings">数据备份</a>
        </div>
        <div class="telegram-head">
          <span class="telegram-logo">${icon("send")}</span>
          <div>
            <h2 style="margin:0 0 6px;">Telegram 通知设置</h2>
            <p class="muted" style="margin:0;">通过 Telegram Bot 接收订阅通知，并及时掌握订阅动态。</p>
          </div>
        </div>
        <form class="form-grid">
          <div class="field"><label for="bot-token">Bot Token</label><input id="bot-token" type="password" value="123456:••••••••••••••" autocomplete="off" /></div>
          <div class="field"><label for="chat-id">Chat ID</label><input id="chat-id" value="-100520126" autocomplete="off" /></div>
          <div class="field"><label for="timezone">默认时区</label><select id="timezone"><option>Asia/Shanghai</option><option>UTC</option></select></div>
          <div class="field"><label for="send-time">发送时间</label><input id="send-time" type="time" value="09:00" /></div>
          <div class="field full"><span class="badge success">已连接</span><span class="muted">上次测试时间：2026-07-25 16:30:45</span></div>
          <div class="field full"><button class="button" type="button">${icon("send")}发送测试消息</button></div>
        </form>
        <div style="padding:0 22px 22px;">
          ${[
            ["主账号续费提醒", "当主账号即将到期时，发送续费提醒通知", "提前 3 天", "refresh", "tone-blue"],
            ["车友续费提醒", "当车友账号即将到期时，发送续费提醒通知", "提前 3 天", "users", "tone-green"],
            ["未付款提醒", "当有未付款订单时，发送提醒通知", "提前 1 天", "credit", "tone-orange"],
            ["空位提醒", "当车位有空闲位置时，发送提醒通知", "立即提醒", "settings", "tone-purple"]
          ]
            .map(
              ([title, desc, time, iconName, tone]) => `
            <div class="setting-row">
              <span class="metric-icon ${tone}">${icon(iconName)}</span>
              <span><strong>${escapeHtml(title)}</strong><br><span class="muted">${escapeHtml(desc)}</span></span>
              <select aria-label="${escapeHtml(title)}提醒时间"><option>${escapeHtml(time)}</option></select>
              <button class="toggle" type="button" aria-label="${escapeHtml(title)}已启用"></button>
            </div>`
            )
            .join("")}
        </div>
      </section>
      <aside class="panel">
        <div class="panel-head"><h2>系统偏好</h2><span>V8.2</span></div>
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
