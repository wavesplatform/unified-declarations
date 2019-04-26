export type TBytes = Uint8Array
export type TPublicKey = string
export type TPrivateKey = string
export type TSeed = string | TBytes
export type TAddress = string
export type TKeyPair = { public: TPublicKey, private: TPrivateKey }
export type TChainId = string | number

export const PUBLIC_KEY_LENGTH = 32
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export const MAIN_NET_CHAIN_ID = 87
export const TEST_NET_CHAIN_ID = 84

export interface IWavesCrypto {
  //Hashing 
  blake2b: (input: TBytes) => TBytes
  keccak: (input: TBytes) => TBytes
  sha256: (input: TBytes) => TBytes

  //Base encoding\decoding
  base58encode: (input: TBytes) => string
  base58decode: (input: string) => TBytes | null
  base64encode: (input: TBytes) => string
  base64decode: (input: string) => TBytes | null

  //Keys, seeds and addresses
  keyPair: (seed: TSeed) => TKeyPair
  publicKey: (seed: TSeed) => TPublicKey
  privateKey: (seed: TSeed) => TPrivateKey
  address: (publicKeyOrSeed: TPublicKey | TSeed, chainId?: TChainId) => TAddress
  randomSeed: () => TSeed

  //Bytes hashing and signing
  signBytes: (bytes: TBytes, seed: TSeed) => TBytes

  //Verification
  verifySignature: (publicKey: TPublicKey, bytes: TBytes, signature: TBytes) => boolean
  verifyPublicKey: (publicKey: TPublicKey) => boolean
  verifyAddress: (address: TAddress, optional?: { chainId?: TChainId, publicKey?: TPublicKey }) => boolean

  //Messaging
  encrypt: (privateKey: TPrivateKey, publicKey: TPublicKey, message: string) => string
  decrypt: (privateKey: TPrivateKey, publicKey: TPublicKey, encryptedMessage: string) => string

}


console.log('T'.charCodeAt(0))