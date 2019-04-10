

export declare type Bytes = Uint8Array
export declare type PublicKey = Bytes
export declare type PrivateKey = Bytes
export declare type Seed = string
export declare type Address = string
export declare type KeyPair = { public: PublicKey, private: PrivateKey }

export declare const PUBLIC_KEY_LENGTH = 32
export declare const PRIVATE_KEY_LENGTH = 32
export declare const SIGNATURE_LENGTH = 64

//Hashing 
export declare const blake2b: (input: Bytes) => Bytes
export declare const keccak: (input: Bytes) => Bytes
export declare const sha256: (input: Bytes) => Bytes

//Base encoding\decoding
export declare const base58encode: (input: Bytes) => string
export declare const base58decode: (input: string) => Bytes
export declare const base64encode: (input: Bytes) => string
export declare const base64decode: (input: string) => Bytes

//Keys and addresses
export declare const keyPair: (seed: Seed) => KeyPair
export declare const publicKey: (seed: Seed) => PublicKey
export declare const privateKey: (seed: Seed) => PrivateKey
export declare const address: (publicKeyOrSeed: PublicKey | Seed, chainId?: string) => Address
export declare const randomSeed: () => Seed

//Bytes hashing and signing
export declare const signBytes: (bytes: Bytes, seed: Seed) => Bytes
export declare const hashBytes: (bytes: Bytes) => Bytes

//Verification
export declare const verifySignature: (publicKey: PublicKey, bytes: Bytes, signature: Bytes) => boolean
export declare const verifyPublicKey: (publicKey: PublicKey) => boolean
export declare const verifyAddress: (address: Address, chainId?: string, publicKey?: PublicKey) => boolean

