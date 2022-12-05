import { CheckIcon } from "@heroicons/react/24/outline";
const features = [
  {
    name: "Hyperspeed",
    description:
      "By using the latest tech and positioning our servers around the world, Hyperdive will load fast and run smooth.",
  },
  {
    name: "Creator Focused",
    description:
      "Customizeable NFT Creator pages that bring a storefront to life and combine collections and off-chain activity.",
  },
  {
    name: "Bot Protection",
    description:
      "We want your marketplace to grow organically and help ensure we are always open for business.",
  },
  {
    name: "Expert Team",
    description:
      "We come from well known projects on L2's and have official backgrounds in engineering and finance.",
  },
  {
    name: "Open Source",
    description:
      "Transparency is so key to crypto and you deserve to know when you buy with us, what you see is what you get.",
  },
  {
    name: "Community Maintained",
    description:
      "Want to add a feature or integrate an api to help improve the Marketplace? Hack around and find out, fren!",
  },
  {
    name: "Multilingual",
    description:
      "You should be able to experience the Marketplace as you would in your own town.",
  },
  {
    name: "Social Media",
    description:
      "With a focus on decentralized social media solutions, we intend to increase retention on Creator pages.",
  },
];

const FeaturesList: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            All-in-one platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            We&apos;ve reinvisioned a marketplace for the people from the ground
            up and found that these were the things on the top of your list.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute mt-1 h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-semibold leading-8 text-gray-100">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-gray-300">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesList;
