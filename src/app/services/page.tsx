export default function ServicesPage() {
  const services = [
    {
      title: "Transport Services",
      description:
        "Reliable transportation solutions for businesses and individuals.",
    },
    {
      title: "Logistics Management",
      description:
        "Efficient planning and coordination of goods movement and deliveries.",
    },
    {
      title: "Cargo & Delivery",
      description:
        "Flexible cargo transportation and delivery solutions based on your needs.",
    },
    {
      title: "Custom Logistics",
      description:
        "Tailored transport and logistics solutions for different business requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Services
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          LIVAM Enterprises Ltd provides transport and logistics
          solutions designed to make movement of goods easier and more
          efficient.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {service.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
    }
