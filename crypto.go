package wavesplatform

// Bytes is a type alias for the slice of bytes.
type Bytes []byte

// PublicKey is a string representation of a public key bytes in form of BASE58 string.
type PublicKey string

// PrivateKey is a string representation of a private key in form of BASE58 string.
type PrivateKey string

// Seed is a BIP39 seed phrase.
type Seed string

// Address is a string representation of Waves address in form of BASE58 string.
type Address string

// KeyPair is an interface to a structure that holds corresponding private and public keys.
type KeyPair interface {
	PublicKey() string
	PrivateKey() string
}

// WavesChainID is a byte to represent blockchain identification.
type WavesChainID byte

// Known chain IDs
const (
	MainNet WavesChainID = 'W'
	TestNet WavesChainID = 'T'
)

// The lengths of basic crypto primitives.
const (
	PublicKeyLength  = 32
	PrivateKyeLength = 32
	SignatureLength  = 64
)

// WavesCrypto is a collection of functions to work with Waves basic types and crypto primitives used by Waves.
type WavesCrypto interface {
	Blake2b(input Bytes) Bytes // Blake2b produces the BLAKE2b-256 digest of the given `input`.
	Keccak(input Bytes) Bytes  // Keccak creates a new legacy Keccak-256 hash digest of the `input`.
	Sha256(input Bytes) Bytes  // Sha256 returns a new SHA256 checksum calculated from the `input`.

	Base58Encode(input Bytes) string // Base58Encode encodes the `input` into a BASE58 string.
	Base58Decode(input string) Bytes // Base58Decode decodes the `input` string to bytes.
	Base64Encode(input Bytes) string // Base64Encode returns a BASE64 string representation of the `input` bytes.
	Base64Decode(input string) Bytes // Base64Decode decodes the `input` BASE64 string to bytes.

	KeyPair(seed Seed) KeyPair       // KeyPair returns a pair of keys produced from the `seed`.
	PublicKey(seed Seed) PublicKey   // PublicKey returns a public key generated from the `seed`.
	PrivateKey(seed Seed) PrivateKey // PrivateKey generates a private key from the given `seed`.

	Address(publicKey PublicKey, chainID WavesChainID) Address // Address generates new Waves address from the `publicKey` and `chainID`.
	AddressFromSeed(seed Seed, chainID WavesChainID) Address   // AddressFromSeed returns a new Waves address produced from the `seed` and `chainID`.

	RandomSeed() Seed // RandomSeed return a new randomly generated BIP39 seed phrase.

	SignBytes(bytes Bytes, privateKey PrivateKey) Bytes // SignBytes produces a signature for the `bytes` by `privateKey`.
	SignBytesBySeed(bytes Bytes, seed Seed) Bytes       // SignBytesBySeed returns a signature for the `bytes` by a private keys generated from the `seed`.~``

	VerifySignature(publicKey PublicKey, bytes, signature Bytes) bool              // VerifySignature returns true if `signature` is a valid signature of `bytes` by `publicKey`.
	VerifyPublicKey(publicKey PublicKey) bool                                      // VerifyPublicKey returns true if `publicKey` is a valid public key.
	VerifyAddress(address Address, chainID WavesChainID, publicKey PublicKey) bool // VerifyAddress returns true if `address` is a valid Waves address for the given `chainId` and 	`publicKey`.
}
