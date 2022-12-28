import Image from "next/image";
import commonLang from "@/lang/common.json";
import { useRouter } from 'next/router';
import daru_vo from "@/images/daru_vo.jpg"

const people = [
  {
    name: "Jason Factor",
    role: "anhfactor",
    imageUrl: "https://avatars.githubusercontent.com/u/13186215?v=4",
  },
  {
    name: "Daru Vo",
    role: "Designer",
    imageUrl: daru_vo,
  },
];

export default function Contributors() {
  const { locale } = useRouter();

  return (
    <div className="dark:bg-gray-900 bg-gray-50 rounded-lg">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white text-black">
              {commonLang.team_page.filter(j => j.locale === locale)[0]["contributor_title"]} 
            </h2>
            <p className="text-xl dark:text-gray-300 text-gray-800">
              {commonLang.team_page.filter(j => j.locale === locale)[0]["contributor_desc"]} 
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm ">
                      <h3>{person.name}</h3>
                      <p className="dark-text-indigo-400 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
