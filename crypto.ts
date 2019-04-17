export type Bytes = Uint8Array
export type PublicKey = Bytes
export type PrivateKey = Bytes
export type Seed = string
export type Address = string
export type KeyPair = { public: PublicKey, private: PrivateKey }

export const PUBLIC_KEY_LENGTH = 32
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export interface WavesCrypto {
  //Hashing 
  blake2b: (input: Bytes) => Bytes
  keccak: (input: Bytes) => Bytes
  sha256: (input: Bytes) => Bytes

  //Base encoding\decoding
  base58encode: (input: Bytes) => string
  base58decode: (input: string) => Bytes
  base64encode: (input: Bytes) => string
  base64decode: (input: string) => Bytes

  //Keys, seeds and addresses
  keyPair: (seed: Seed) => KeyPair
  publicKey: (seed: Seed) => PublicKey
  privateKey: (seed: Seed) => PrivateKey
  address: (publicKeyOrSeed: PublicKey | Seed, chainId?: string) => Address
  randomSeed: () => Seed

  //Bytes hashing and signing
  signBytes: (bytes: Bytes, seed: Seed) => Bytes
  hashBytes: (bytes: Bytes) => Bytes

  //Verification
  verifySignature: (publicKey: PublicKey, bytes: Bytes, signature: Bytes) => boolean
  verifyPublicKey: (publicKey: PublicKey) => boolean
  verifyAddress: (address: Address, chainId?: string, publicKey?: PublicKey) => boolean

}