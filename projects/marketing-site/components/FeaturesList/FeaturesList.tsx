import { CheckIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'next-i18next'

const FeaturesList = () => {
  const { t } = useTranslation()

  const vision_feature = t("marketing:vision_feature", { returnObjects: true });

  return (
    <div className="dark:bg-black bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight dark:text-gray-100 text-gray-700 sm:text-4xl">
            {t("marketing:vision_page.0.feature_title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 dark:text-gray-300 text-gray-600">
          {t("marketing:vision_page.0.feature_desc")}
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {vision_feature.map((feature:any) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute mt-1 h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-semibold leading-8 dark:text-gray-100 text-gray-700">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 dark:text-gray-300 text-gray-600">
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
