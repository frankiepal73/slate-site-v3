import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const packages = {
  "Standard Assistant": {
    name: "Standard Assistant",
    price: "269",
    subscription: "79"
  },
  "Advanced Assistant": {
    name: "Advanced Assistant",
    price: "314",
    subscription: "149"
  },
  "Premium Package": {
    name: "Premium Package",
    price: "449",
    subscription: "249"
  }
};

interface PackageDetails {
  name: string;
  price: string;
  subscription: string;
}

function isValidPackage(key: string): key is keyof typeof packages {
  return key in packages;
}

const ProductDisplay = ({ packageDetails }: { packageDetails: PackageDetails }) => (
  <section className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 w-full mb-8">
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
      <div className="relative">
        <h3 className="text-2xl font-semibold text-white mb-4">{packageDetails.name}</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ${packageDetails.price}
            </span>
            <span className="text-white/70">setup & configuration</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ${packageDetails.subscription}
            </span>
            <span className="text-white/70">/month</span>
          </div>
        </div>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST" className="w-full">
      <input type="hidden" name="package" value={packageDetails.name} />
      <button 
        type="submit"
        className="w-full py-4 px-8 rounded-xl font-medium text-center transition-all bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
      >
        Checkout
      </button>
    </form>
  </section>
);

const Message: React.FC<{ message: string }> = ({ message }) => (
  <section className="flex items-center justify-center min-h-[50vh]">
    <div className="text-center">
      <p className="text-xl text-white/70">{message}</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-8 py-4 mt-8 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
      >
        Back to Home
      </Link>
    </div>
  </section>
);

export function OrderPreview() {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState<PackageDetails | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const packageName = query.get("package");
    
    if (packageName && isValidPackage(packageName)) {
      setSelectedPackage(packages[packageName]);
    }

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, [location]);

  if (message) {
    return <div className="pt-32"><Message message={message} /></div>;
  }

  if (!selectedPackage) {
    return <div className="pt-32"><Message message="Invalid package selected. Please try again." /></div>;
  }

  return <div className="pt-32"><ProductDisplay packageDetails={selectedPackage} /></div>;
} 