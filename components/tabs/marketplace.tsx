import { Button } from "@/components/ui/button"

export default function Marketplace() {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Item Marketplace</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-[#3D3D3D] rounded-lg overflow-hidden">
          <div className="aspect-square bg-[#2D2D2D] flex items-center justify-center">
            <div className="w-20 h-20 bg-[#3D8BFD] rounded-full"></div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-1">Speed Booster</h4>
            <p className="text-sm text-gray-400 mb-3">Permanent 10% speed increase</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.05 ETH</span>
              <Button size="sm" className="bg-[#3D8BFD] hover:bg-[#3D8BFD]/90">
                Buy
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-[#3D3D3D] rounded-lg overflow-hidden">
          <div className="aspect-square bg-[#2D2D2D] flex items-center justify-center">
            <div className="w-20 h-20 bg-[#8B3DFD] rounded-full"></div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-1">Shield Generator</h4>
            <p className="text-sm text-gray-400 mb-3">Absorbs one hit per run</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.03 ETH</span>
              <Button size="sm" className="bg-[#3D8BFD] hover:bg-[#3D8BFD]/90">
                Buy
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-[#3D3D3D] rounded-lg overflow-hidden">
          <div className="aspect-square bg-[#2D2D2D] flex items-center justify-center">
            <div className="w-20 h-20 bg-[#FD3D8B] rounded-full"></div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-1">Coin Magnet</h4>
            <p className="text-sm text-gray-400 mb-3">Attracts coins from a distance</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.02 ETH</span>
              <Button size="sm" className="bg-[#3D8BFD] hover:bg-[#3D8BFD]/90">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

