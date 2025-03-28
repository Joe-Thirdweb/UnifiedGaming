export default function Leaderboard() {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Global Leaderboard</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#3D8BFD] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <span>Player123</span>
          </div>
          <span className="font-bold">12,345</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#3D8BFD]/80 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <span>CryptoFlyer</span>
          </div>
          <span className="font-bold">10,982</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#3D8BFD]/60 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <span>BlockchainPilot</span>
          </div>
          <span className="font-bold">9,876</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#2D2D2D] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <span>NFTRunner</span>
          </div>
          <span className="font-bold">8,765</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#2D2D2D] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              5
            </div>
            <span>Web3Gamer</span>
          </div>
          <span className="font-bold">7,654</span>
        </div>
      </div>
    </div>
  )
}

