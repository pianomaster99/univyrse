export const ENERGY_PACKS = {
  energy_1: {
    energyAmount: 1,
    priceId: process.env.STRIPE_PRICE_ENERGY_1!,
  },
  energy_10: {
    energyAmount: 10,
    priceId: process.env.STRIPE_PRICE_ENERGY_10!,
  },
} as const;

export type EnergyPackId = keyof typeof ENERGY_PACKS;