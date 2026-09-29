export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          About LIVAM Enterprises Ltd
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          LIVAM Enterprises Ltd is a transport and logistics business
          focused on providing reliable solutions for the movement of
          goods and supporting customers with efficient logistics
          services.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Reliability</h2>
            <p className="mt-2 text-gray-600">
              We aim to provide dependable transport and logistics
              solutions.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Efficiency</h2>
            <p className="mt-2 text-gray-600">
              We focus on efficient coordination of customer
              requirements and deliveries.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Customer Focus</h2>
            <p className="mt-2 text-gray-600">
              We work to understand each customer's transport needs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
      }
