"use client"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface PerksProps {
  isLoggedIn: boolean
  activePerks: {
    doubleCoin: boolean
    extraLife: boolean
    speedBoost: boolean
  }
  togglePerk: (perk: string) => void
  handleLogin: () => void
}

export default function Perks({ isLoggedIn, activePerks, togglePerk, handleLogin }: PerksProps) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Game Perks</h3>

      {!isLoggedIn ? (
        <div className="text-center py-8">
          <p className="text-gray-300 mb-4">Connect your wallet to access and activate game perks</p>
          <Button className="bg-[#3D8BFD] hover:bg-[#3D8BFD]/90" onClick={handleLogin}>
            Connect Wallet
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-gray-300 mb-4">
            Toggle perks to activate them in your game. Active perks will be applied the next time you play.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-[#3D3D3D] rounded-lg">
              <div>
                <h4 className="font-medium">Double Coins</h4>
                <p className="text-sm text-gray-400">Collect twice as many coins during your run</p>
              </div>
              <Switch checked={activePerks.doubleCoin} onCheckedChange={() => togglePerk("doubleCoin")} />
            </div>

            <div className="flex items-center justify-between p-4 border border-[#3D3D3D] rounded-lg">
              <div>
                <h4 className="font-medium">Extra Life</h4>
                <p className="text-sm text-gray-400">Start each run with an additional life</p>
              </div>
              <Switch checked={activePerks.extraLife} onCheckedChange={() => togglePerk("extraLife")} />
            </div>

            <div className="flex items-center justify-between p-4 border border-[#3D3D3D] rounded-lg">
              <div>
                <h4 className="font-medium">Speed Boost</h4>
                <p className="text-sm text-gray-400">Increase your movement speed by 15%</p>
              </div>
              <Switch checked={activePerks.speedBoost} onCheckedChange={() => togglePerk("speedBoost")} />
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-400">
              Note: Perks are tied to your wallet and may consume in-game currency or tokens.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

