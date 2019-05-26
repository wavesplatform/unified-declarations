
export const PUBLIC_KEY_LENGTH = 32
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export const MAIN_NET_CHAIN_ID = 87 //W
export const TEST_NET_CHAIN_ID = 84 //T

export interface ISeedWithNonce {
  seed: TSeed
  nonce: number
}

export type TBytes = Uint8Array
export type TBase58 = string
export type TKey = TBase58
export type TPublicKey = { publicKey: TKey }
export type TPrivateKey = { privateKey: TKey }
export type TAddress = TBase58
export type TSeed = string | TBytes | ISeedWithNonce
export type TKeyPair = TPublicKey & TPrivateKey
export type TChainId = string | number

export interface IWavesCrypto {
  seedWithNonce: (seed: TSeed, nonce: number) => ISeedWithNonce

  //Hashing 
  blake2b: (input: TBytes) => TBytes
  keccak: (input: TBytes) => TBytes
  sha256: (input: TBytes) => TBytes

  //Base encoding\decoding
  base58Encode: (input: TBytes) => string
  base58Decode: (input: string) => TBytes //throws
  base64Encode: (input: TBytes) => string
  base64Decode: (input: string) => TBytes //throws
  base16Encode: (input: TBytes) => string
  base16Decode: (input: string) => TBytes //throws

  //Keys, seeds and addresses
  keyPair: (seed: TSeed) => TKeyPair
  publicKey: (seed: TSeed | TPrivateKey) => TPublicKey
  privateKey: (seed: TSeed) => TPrivateKey
  address: (keysOrSeed: TSeed | TPrivateKey | TPublicKey, chainId?: TChainId) => TAddress

  //Random
  randomBytes: (size: number) => TBytes
  randomSeed: () => TSeed

  //Bytes hashing and signing
  signBytes: (bytes: TBytes, seedOrPrivateKey: TSeed | TPrivateKey) => TBytes

  //Verification
  verifySignature: (publicKey: TPublicKey, bytes: TBytes, signature: TBytes) => boolean
  verifyPublicKey: (publicKey: TPublicKey) => boolean
  verifyAddress: (address: TAddress, optional?: { chainId?: TChainId, publicKey?: TPublicKey }) => boolean

  //Messaging
  //sharedKey: (privateKeyFrom: TKey, publicKeyTo: TKey) => TKey
  //keyEncryptedKey: (sharedKey: TKey) => { KEK: TBytes, P: TBytes }
  //messageDecrypt: (sharedKey: TKey, encryptedMessage: TBase58) => string
  //messageEncrypt: (sharedKey: TKey, message: string) => TBase58

}
