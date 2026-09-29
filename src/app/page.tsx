export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-bold">Livam Enterprises Ltd</h1>
            <p className="text-sm text-slate-400">
              Transport & Logistics Management System
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
            Admin Login
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-10">
          <p className="mb-2 text-blue-400">Welcome to Livam</p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Manage transport, logistics, customers and orders in one place.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A modern platform for managing transport requests, quotations,
            RFQs, customers, staff and logistics operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500">
              Request a Quote
            </button>

            <button className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800">
              View Services
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Customers" value="0" />
          <DashboardCard title="Active Orders" value="0" />
          <DashboardCard title="Pending Quotes" value="0" />
          <DashboardCard title="RFQs" value="0" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Feature
            title="Transport Services"
            description="Manage transport and logistics services for customers."
          />

          <Feature
            title="Online Orders"
            description="Receive and manage customer orders from one dashboard."
          />

          <Feature
            title="Quotes & RFQs"
            description="Create quotations and handle customer requests for quotation."
          />
        </div>
      </section>
    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
            }
