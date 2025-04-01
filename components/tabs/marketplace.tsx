import { Button } from "@/components/ui/button";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { PayEmbed, useActiveAccount } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc1155";

export default function Marketplace() {
  const client = createThirdwebClient({
    clientId: "d1f529f9f313ea2bc2a6e92f70e37482",
  });
  const account = useActiveAccount();

  const contract = getContract({
    chain: defineChain(2021),
    client,
    address: "0x21fd13275BD27a86f814828dba3Ad2A53ecBA15d",
  });

  const metadataImage = [`/2x.jpg`, `/3x multiplier.jpg`, `/5x multiplier.jpg`];
  const metadataName = ["x2", "x3", "x4"];

  return (
    <div className="table-container">
      <table className="responsive-table">
        <tbody>
          <tr>
            {[0, 1, 2].map((tokenId) => (
              <td key={tokenId} className="table-cell">
                <div className="pay-embed-wrapper">
                <PayEmbed
                  client={client}
                  payOptions={{
                    mode: "transaction",
                    transaction: claimTo({
                      contract: contract,
                      quantity: BigInt(1),
                      tokenId: BigInt(tokenId),
                      to: account!.address,
                    }),
                    metadata: {
                      name: `Multiply Your points!\n${metadataName[tokenId]}`,
                      image: metadataImage[tokenId],
                    },
                  }}
                />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Responsive styles */}
      <style jsx>{`
        .table-container {
          width: 100%;
          padding: 16px;
          display: flex;

        }

        .responsive-table {
          width: 100%;
          border-collapse: collapse;
          display:flex;
          margin:0 auto;
        }

        .table-cell {
          border: 1px solid #ddd;
          padding: 20px;
          text-align: center;
          vertical-align: middle;
        }

        .pay-embed-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 600px) {
          .responsive-table {
            display: block;
            justify-content:center;
            margin: 0 auto; /* Center table horizontally */
          }

          .responsive-table tr {
            display: flex;
            flex-direction: column;
          }

          .table-cell {
            width: 100%;
            margin-bottom: 16px;
            padding: 15px;
          }

          /* Ensure PayEmbed doesn't overflow */
          .pay-embed-wrapper {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
