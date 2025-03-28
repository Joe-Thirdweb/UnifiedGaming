"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    setIsLoading(true)
    // Simulate connection delay
    setTimeout(() => {
      setIsLoading(false)
      onLogin()
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1A1A1A] border-[#3D3D3D]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription className="text-gray-400">
            Connect your wallet to access game perks and save your progress.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Button
            className="w-full flex items-center justify-between bg-[#2D2D2D] hover:bg-[#3D3D3D]"
            onClick={handleConnect}
            disabled={isLoading}
          >
            <span>MetaMask</span>
            {isLoading ? <span>Connecting...</span> : null}
          </Button>
          <Button
            className="w-full flex items-center justify-between bg-[#2D2D2D] hover:bg-[#3D3D3D]"
            onClick={handleConnect}
            disabled={isLoading}
          >
            <span>WalletConnect</span>
            {isLoading ? <span>Connecting...</span> : null}
          </Button>
          <Button
            className="w-full flex items-center justify-between bg-[#2D2D2D] hover:bg-[#3D3D3D]"
            onClick={handleConnect}
            disabled={isLoading}
          >
            <span>Coinbase Wallet</span>
            {isLoading ? <span>Connecting...</span> : null}
          </Button>
        </div>
        <div className="text-xs text-gray-500 text-center">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  )
}

