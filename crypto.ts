
export const PUBLIC_KEY_LENGTH = 32
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export const MAIN_NET_CHAIN_ID = 87 //W
export const TEST_NET_CHAIN_ID = 84 //T

/* Type aliases used to increase flexibility and be able
   to extend these types later on. Also type aliases allows
   names to be more self explanatory like in BASE58 case. */

export type TBytes = Uint8Array

export type TBase64 = string
export type TBase58 = string
export type TBase16 = string //Same as HEX

export type TChainId = string | number

export interface IAddress {
  address: TBytes
  toString(): TBase58
  fromPublicKey: (chainId: TChainId, publicKey: IPublicKey) => IKeyPair
  isValid: () => boolean
}
export interface IPublicKey {
  publicKey: TBytes
  toString(): TBase58
  address: IAddress
  isValid: () => boolean
  verify: (bytes: TBytes | TBase58, signature: TBytes | TBase58) => boolean
}
export interface IPrivateKey {
  privateKey: TBytes
  toString(): TBase58
  publicKey(): () => IPublicKey
  isValid: () => boolean
  signBytes<T extends TBytes | TBase58>: (bytes: T) => T
}
export interface IKeyPair {
  privateKey: IPrivateKey
  publicKey: IPublicKey
  fromSeed: (seed: string, nonce: number) => IKeyPair
  randomSeedPhrase: () => string
}

/* Waves Crypto is a collection of essential cryptography and hashing
   algorithms used by Waves, protocol entities and binary structures. */

export interface IWavesCrypto {
  //Hashing 
  blake2b: (input: TBytes) => TBytes
  keccak: (input: TBytes) => TBytes
  sha256: (input: TBytes) => TBytes

  //Base encoding\decoding
  base64Encode: (input: TBytes) => TBase64
  base64Decode: (input: TBase64) => TBytes //throws (invalid input)
  base58Encode: (input: TBytes) => TBase58
  base58Decode: (input: TBase58) => TBytes //throws (invalid input)
  base16Encode: (input: TBytes) => TBase16
  base16Decode: (input: TBase16) => TBytes //throws (invalid input)

  //Random
  randomBytes: (size: number) => TBytes
  randomSeedPhrase: () => string

  //Bytes hashing and signing
  signBytes<T extends TBytes | TBase58>: (bytes: T, privateKey: T) => T

  //Verification
  verifySignature<T extends TBytes | TBase58>: (bytes: T, signature: T, publicKey: T) => boolean
  verifyPublicKey<T extends TBytes | TBase58>: (publicKey: T) => boolean
  verifyAddress<T extends TBytes | TBase58>: (address: T, chainId: TChainId, publicKey: T) => boolean

  //TODO Messaging
  //sharedKey<T extends TBytes | TBase58>: (privateKeyFrom: T, publicKeyTo: T) => T
  //messageDecrypt<T extends TBytes | TBase58>: (sharedKey: T, encryptedMessage: T) => T
  //messageEncrypt<T extends TBytes | TBase58>: (sharedKey: T, message: T) => T

}
