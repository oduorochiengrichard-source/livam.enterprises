export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact LIVAM Enterprises Ltd
        </h1>

        <p className="mt-4 text-gray-600">
          Get in touch with us for transport and logistics services,
          quotations, and enquiries.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-xl bg-gray-100 p-5">
            <h2 className="font-semibold">Phone</h2>
            <p className="mt-2 text-gray-600">
              Contact us for transport and logistics enquiries.
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-5">
            <h2 className="font-semibold">Online Enquiry</h2>
            <p className="mt-2 text-gray-600">
              Send your requirements and request a quotation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
          }
