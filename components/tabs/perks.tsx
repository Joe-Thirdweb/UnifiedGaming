"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

import { createThirdwebClient, defineChain, getContract, NFT } from "thirdweb";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  ConnectButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { ecosystemWallet } from "thirdweb/wallets";

export default function Perks() {
  const address = useActiveAccount();
  const chain = defineChain(2021);
  const wallets = [ecosystemWallet("ecosystem.thirdweb-games")];

  const client = createThirdwebClient({
    clientId: "d1f529f9f313ea2bc2a6e92f70e37482",
  });
  const contract = getContract({
    client,
    address: "0xF27BfFd2f018Eff31796822487EEF6515c3c054D",
    chain: defineChain(2021),
  });

  const [badges, setbadges] = useState<
    (NFT & {
      quantityOwned: bigint;
    })[]
  >();

  useEffect(() => {
    if (address) {
      const nftLoad = async () => {
        const nfts = await getOwnedNFTs({
          contract,
          start: 0,
          count: 100,
          address: address!.address,
        });
        setbadges(nfts);
        console.log(nfts);
      };
      nftLoad();
    }
  }, []);

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Your Rewards</h3>
      {address ? (
        <div className="badge-list">
          {badges &&
            badges.map((badge, index) => (
              <div
                key={index}
                className="badge-item flex flex-col items-center p-4"
              >
                {/* MediaRenderer for displaying badge */}
                <MediaRenderer client={client} src={badge.metadata.image} />
                {/* Additional badge information */}
                <p className="text-white mt-2">{badge.metadata.name}</p>
                <p className="text-gray-400">
                  Quantity Owned: {badge.quantityOwned.toString()}
                </p>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <ConnectButton
            client={client}
            chain={chain}
            wallets={wallets}
            connectButton={{
              label: "Sign in",
            }}
          />
        </div>
      )}
    </div>
  );
}
