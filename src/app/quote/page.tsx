export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Request a Quote
        </h1>

        <p className="mt-4 text-gray-600">
          Tell us what transport or logistics service you need and
          our team will get back to you.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-sm">
          <div>
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="font-medium">Service Required</label>
            <select className="mt-2 w-full rounded-lg border p-3">
              <option>Transport</option>
              <option>Logistics</option>
              <option>Cargo Delivery</option>
              <option>Custom Logistics</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Your Requirements</label>
            <textarea
              rows={5}
              placeholder="Describe your transport or logistics requirements..."
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white"
          >
            Request Quote
          </button>
        </form>
      </div>
    </main>
  );
            }
