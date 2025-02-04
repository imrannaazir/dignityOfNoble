import { HashLink } from "react-router-hash-link";

export default function ServicePricingHead() {
  return (
    <thead className="bg-base-100">
      <tr className="">
        <th className="w-1/2">
          <HashLink
            to="/pricing/#contact-for-pricing"
            className=" btn btn-primary"
          >
            Get Started Now
          </HashLink>
        </th>
        <th>
          <div className="bg-cyan-500 text-white flex flex-col justify-center items-center p-4">
            <p className="text-lg">Basic</p>
            <h3 className="text-2xl">$ 2000</h3>
            <p>USD/user/month</p>
          </div>
        </th>
        <th>
          <div className="bg-yellow-500 text-white flex flex-col justify-center items-center p-4">
            <p className="text-lg">Premium</p>
            <h3 className="text-2xl">$ 4000</h3>
            <p>USD/user/month</p>
          </div>
        </th>
        <th>
          <div className="bg-orange-500 text-white flex flex-col justify-center items-center p-4">
            <p className="text-lg">Elite</p>
            <h3 className="text-2xl">$ 5000</h3>
            <p>USD/user/month</p>
          </div>
        </th>
      </tr>
    </thead>
  );
}
