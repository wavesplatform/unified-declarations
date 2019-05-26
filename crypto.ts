
export const PUBLIC_KEY_LENGTH = 32
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export const MAIN_NET_CHAIN_ID = 87 //W
export const TEST_NET_CHAIN_ID = 84 //T

export interface ISeedWithNonce {
  seed: TSeed
  nonce: number
}

/* Type aliases used to increase flexibility and be able
   to extend these types later on. Also type aliases allows
   names to be more self explanatory like in BASE58 case. */

export type TBytes = Uint8Array

export type TBase64 = string
export type TBase58 = string
export type TBase16 = string //Same as HEX

export type TChainId = string | number

//TAddress is a BASE58 string representation of Waves address.
export type TAddress = TBase58

//TKey is a BASE58 string representation of a key in general.
export type TKey = TBase58

//TPublicKey is a BASE58 string representation of a public key.
export type TPublicKey = { publicKey: TKey }

//TPrivateKey is a BASE58 string representation of a private key.
export type TPrivateKey = { privateKey: TKey }

export type TKeyPair = TPublicKey & TPrivateKey

//TSeed is a union of types that could represent a Waves seed.
export type TSeed = string | TBytes | ISeedWithNonce

/* Consider that every method should handle TSeed
   seamlessly so in case of absence of type union operator
   overloads should be implemented for each possible TSeed type */



/* Waves Crypto is a collection of essential cryptography and hashing
   algorithms used by Waves, protocol entities and binary structures. */

export interface IWavesCrypto {
  seedWithNonce: (seed: TSeed, nonce: number) => ISeedWithNonce

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

  //Keys, seeds and addresses
  keyPair: (seed: TSeed) => TKeyPair
  publicKey: (seed: TSeed | TPrivateKey) => TPublicKey
  privateKey: (seed: TSeed) => TPrivateKey
  address: (seedOrKeys: TSeed | TPrivateKey | TPublicKey, chainId?: TChainId) => TAddress

  //Random
  randomBytes: (size: number) => TBytes
  randomSeed: () => TSeed

  //Bytes hashing and signing
  signBytes: (bytes: TBytes, seedOrPrivateKey: TSeed | TPrivateKey) => TBytes

  //Verification
  verifySignature: (bytes: TBytes, signature: TBytes, publicKey: TPublicKey) => boolean
  verifyPublicKey: (publicKey: TPublicKey) => boolean
  verifyAddress: (address: TAddress, optional?: { chainId?: TChainId, publicKey?: TPublicKey }) => boolean

  //TODO Messaging
  //sharedKey: (privateKeyFrom: TKey, publicKeyTo: TKey) => TKey
  //messageDecrypt: (sharedKey: TKey, encryptedMessage: TBase58) => string
  //messageEncrypt: (sharedKey: TKey, message: string) => TBase58

}
