import {
  ArrowUpRight,
  BadgeDollarSign,
  Bell,
  CreditCard,
  Download,
  LayoutDashboard,
  Search,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const metrics = [
  {
    label: 'Monthly revenue',
    value: '$82,540',
    change: '+12.4%',
    trend: 'up',
    icon: BadgeDollarSign,
  },
  {
    label: 'Active subscribers',
    value: '24,312',
    change: '+8.1%',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Payment success',
    value: '98.7%',
    change: '+1.3%',
    trend: 'up',
    icon: CreditCard,
  },
  {
    label: 'Automation runs',
    value: '1,482',
    change: '-3.2%',
    trend: 'down',
    icon: Zap,
  },
];

const plans = [
  { name: 'Starter', price: '$19', users: '1,480', retention: '91%', status: 'Healthy' },
  { name: 'Growth', price: '$49', users: '8,742', retention: '94%', status: 'Scaling' },
  { name: 'Enterprise', price: '$99', users: '3,210', retention: '97%', status: 'Priority' },
];

const activities = [
  { title: 'Enterprise renewal', amount: '$8,400', time: '2 hours ago', tone: 'positive' },
  { title: 'Churn alert', amount: '12 accounts', time: '4 hours ago', tone: 'warning' },
  { title: 'Billing sync', amount: 'Completed', time: 'Today', tone: 'neutral' },
];

const revenueBars = [34, 62, 58, 76, 96, 88, 70, 98, 84, 92, 66, 78];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Subscription Suite</p>
              <h1 className="mt-1 text-2xl font-semibold text-white">Operations dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-300">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                aria-label="Search metrics"
                className="w-32 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <button className="rounded-2xl border border-slate-700 bg-slate-800 p-2.5 text-slate-200 transition hover:border-slate-500 hover:text-white" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-2xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400">
              Export report
            </button>
          </div>
        </header>

        <main className="space-y-6">
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map(({ label, value, change, trend, icon: Icon }) => (
              <article key={label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-slate-950/20">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-slate-800 p-2.5 text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                      trend === 'up'
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : 'bg-rose-500/10 text-rose-300'
                    }`}
                  >
                    <ArrowUpRight className={`h-3.5 w-3.5 ${trend === 'down' ? 'rotate-180' : ''}`} />
                    {change}
                  </span>
                </div>
                <p className="mt-5 text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Revenue overview</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">$230.8K</h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 hover:border-slate-500">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>

              <div className="flex h-52 items-end gap-3">
                {revenueBars.map((height, index) => (
                  <div key={index} className="flex-1" aria-label={`Month ${index + 1} revenue`}>
                    <div
                      className={`w-full rounded-t-2xl ${
                        index === 7 || index === 9 ? 'bg-indigo-500' : 'bg-gradient-to-t from-indigo-600 to-cyan-400'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-6 text-xs text-slate-400">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                  <span key={month} className="text-center">{month}</span>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Performance snapshot</p>
              <div className="mt-5 space-y-4">
                {activities.map((activity) => (
                  <div key={activity.title} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        activity.tone === 'positive'
                          ? 'bg-emerald-400'
                          : activity.tone === 'warning'
                            ? 'bg-amber-400'
                            : 'bg-sky-400'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white">{activity.title}</p>
                      <div className="mt-1 flex items-center justify-between gap-3 text-xs text-slate-400">
                        <span>{activity.amount}</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Plan performance</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Subscription mix</h3>
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700">
                <TrendingUp className="h-4 w-4 text-indigo-300" />
                View all plans
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
                <thead className="bg-slate-950/80 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Monthly</th>
                    <th className="px-4 py-3 font-medium">Users</th>
                    <th className="px-4 py-3 font-medium">Retention</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900">
                  {plans.map((plan) => (
                    <tr key={plan.name} className="hover:bg-slate-950/60">
                      <td className="px-4 py-3 font-medium text-white">{plan.name}</td>
                      <td className="px-4 py-3 text-slate-300">{plan.price}</td>
                      <td className="px-4 py-3 text-slate-300">{plan.users}</td>
                      <td className="px-4 py-3 text-slate-300">{plan.retention}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                          {plan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
