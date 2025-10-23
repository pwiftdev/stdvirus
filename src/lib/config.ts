// $STD Token Configuration
export const TOKEN_CONFIG = {
  name: "Solana Transmitted Degeneracy",
  symbol: "STD",
  description: "A memecoin project made to spread like wildfire upon those who dont take care. Its a mock of sexually transmitted diseases.",
  contractAddress: "5M3n5AjS3snHCBsQk6fLcfXnFTAYxFLQbfYvKhFopump", // Test contract address
  network: "Solana",
  platform: "PumpFun",
  website: "https://std-token.com",
  social: {
    twitter: "https://twitter.com/std_token",
    telegram: "https://t.me/std_token"
  }
} as const;

export const CONTRACT_ADDRESS = TOKEN_CONFIG.contractAddress;
