import Image from "next/image";
import Link from "next/link";
import commonLang from "@/lang/common.json";
import { useRouter } from "next/router";

{
  /* <Link href="https://qx.app/stats">
<span className="font-semibold text-red-600 underline">
  volume.
</span>
</Link> */
}

export default function ProposalGitcoin() {
  const { locale } = useRouter();

  return (
    <div className="relative overflow-hidden rounded-lg bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Introducing
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Hyperdrive NFT Exchange
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            With the shutting down of Quix (and thereby Stratos), thousands of
            NFT Creators will be left without a marketplace that they can call
            home. Hyperdrive is a completely open source NFT marketplace - the
            first of its kind. Its goal is to create a self-sustaining
            marketplace focused on the artists and engineers that bring life to
            their favorite chains.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          {/* <figure>
            <Image
              className="w-full rounded-lg"
              src=""
              alt=""
              width={873}
              height={873}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              <Link href="https://gov.optimism.io/t/draft-gf-phase-1-proposal-optichads-nft-project/3430">
                <span className="font-semibold text-red-600 underline">
                  Full Unadulterated Proposal Link Here, bro
                </span>
              </Link>
            </figcaption>
          </figure> */}
          <h2>Background</h2>
          <p>
            When we got together as a new team focused on one goal we started
            seeing more and more opportunities for a better user experience. We
            started with the idea that this should be a marketplace that is as
            every bit as diverse as it is separate, with commingled communities.
            Our team is comprised of experts in their fields and we have already
            challenged each other on core concepts but one thing we came to a
            consensus with early on was that this would be an L2-focused product
            because we firmly believe in EVM L2&apos;s as the sane alternative
            to high gas fees, and because of how engaged their communities are.
            Even through this bear market, the OptiChads and some other NFT
            projects have continued to show promising volume and rising floor
            prices while DeFi plummets.
          </p>
          <p>
            Dicaso, the creator of OptiChads, the first NFT project on Optimism
            to receive funding through OP Governance, is leading the Product
            Team on Hyperdrive to ensure economic incentives are aligned with
            its user base. DistractionBoy is a co-founder of Optimistic Bunnies
            and OptiChads, and is a Senior Software Engineer (specializing in
            User Interfaces) with over 8 years in enterprise-level applications
            and 13 years of experience as a freelancer for hire in photography,
            design for print, and web design.
          </p>

          <blockquote>
            <p>
              Even through this bear market, the OptiChads and some other NFT
              projects have continued to show promising volume and rising floor
              prices while DeFi plummets.
            </p>
          </blockquote>
        </div>
      </div>

      <div className="relative mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Vision
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A Creator-Focused Approach
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            Imagine you are walking to work in a village in India and you turn
            right around a street corner, like you always do, and you start
            walking down a local street vendor marketplace alley. One vendor has
            the sweetest dates and the sunniest disposition. Every time she sees
            you glance in her direction she smiles and the light from her yellow
            canopy reflects delicately off of her golden brown skin. Another
            one, much further down the alley, keeps shoving her fish in the face
            of passers-by yelling, &lsquo;FRESH FISH!&rsquo;. There&apos;s a
            vendor with who makes fresh breakfast sandwiches every morning and
            is always fun to talk to but his booth has no frills and the
            sandwiches are his only product. One vendor in particular always
            catches your eye because they sell tickets to that thing you really
            want to do one day when you have enough time and you keep checking
            the prices to see if they ever drop to a reasonable price. You could
            have passed the whole marketplace and taken the next turn. But you
            enjoy the activity and real people literally reaching their hands
            out for your conversation, and your business.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            The go-to L2 marketplace should replicate that feeling. Some NFT
            Creators like to draw images by hand, and release new collections
            slowly, others like to generate with AI and pump them out one after
            another. They all have little, different niches within the NFT
            space.
          </p>
          <p>
            Some Creators have multiple collections of a similar theme, while
            other Creators have a unique look for every collection. Over time
            these creators can have quests, giveaways, upcoming promotional
            material for new collections, and more. What Quix and OpenSea did
            very well was load collections of NFT&apos;s quickly, and they have
            their own ways of highlighting different collections, but we think
            the focus should be on the Creators and their own little shop on the
            street rather than just the individual collections. Also, we want
            them to be able to customize their &quo;shop&quo; as they see fit.
            It should look how they want it to look, and be their primary
            marketing tool. By the time we are done, they should not need to
            launch a secondary website of their own to highlight their
            strengths.
          </p>
          <p>
            Finally, each Creator should be able to offer promotions and
            customized discounts or incentives as they see fit without
            interference from the marketplace. Imagine being able to take
            advantage of increased discounts based on how many pieces of a
            single collection you own, or how many pieces of multiple
            collections you own from the same vendor.
          </p>

          <blockquote>
            <p>
              ...each Creator should be able to offer promotions and customized
              discounts or incentives as they see fit without interference from
              the marketplace
            </p>
          </blockquote>
        </div>
      </div>

      <div className="relative mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Self Sustaining
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              We Don&apos;t Care About Filling Our Pockets
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            The thing that ensures this remains a self-sustaining marketplace is
            that it continually meets the demands of the ever-changing ecosystem
            and that it is built by its users.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            Though the goal of Hyperdrive is to receive contributions from the
            community for its most core features, we are estimating our server
            costs to mimic those of Quix and Stratos. Therefore, at least in the
            first half of the year, we are expecting to spend around $1000 per
            month in server costs, $100 per month for Pináta (at least in the
            beginning), and $100 per year in domain costs.
          </p>
          <p>
            In addition, it would be nice to offer small monetary incentives for
            contributions. We could see attaching bounties to new features and
            bugfixes that the community desperately wants. The bounty amount
            could vary by issue difficulty and value added. Adding a language
            translation to a particular page could have a 5 $OP bounty attached
            to it while implementing customizable member rewards (Creator
            marketplace discounts) across the site might pay out 200 or 300 $OP.
          </p>
          <p>
            We are trying to incentivize the spirit of pioneering without
            locking the product down to a small group of people&apos;s thoughts
            and feelings or trying to force profitability.
          </p>
        </div>
      </div>

      <div className="relative mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Tech Specs
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Features
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            Much of the codebase will be copied from the Quix open-sourced code,
            at least in the beginning. However, we intend to expand on some
            features of the UI to get the best user experience.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            First, we intend to cater to our users and have multi-lingual
            support, provided by native speakers from each region. Second, we
            will highlight new drops from trusted Creators, while remaining
            impartial towards one collection or another and give them equal time
            in the spotlight. Another thing we firmly believe in is to fine-tune
            experiences throughout the site - something that is often lacking in
            common web3 enabled sites. Hyperdrive is hyper-focused on speed.
            Using modern caching and pre-fectching capabilities, we will
            continue to improve the architecture on an as-needed basis so you
            never have to wait for simple interactions. Lastly, we want to make
            the user experience seemless between Optimism interactions and
            Arbitrum interactions.
          </p>

          <h2>Coming Soon To A Marketplace Near You</h2>
          <ul>
            <li>Lightning Fast</li>
            <li>Multi-Lingual Support</li>
            <li>Bulk Transactions</li>
            <li>Customizable Creator Profiles</li>
            <li>Modern and Responsive UI</li>
            <li>Evolving Architecture</li>
            <li>Layer 2 Chain Agnostic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
