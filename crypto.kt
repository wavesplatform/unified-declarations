typealias Bytes = ByteArray
typealias PublicKey = String
typealias PrivateKey = String
typealias Seed = String
typealias Address = String

const val PUBLIC_KEY_LENGTH = 32
const val PRIVATE_KEY_LENGTH = 32
const val SIGNATURE_LENGTH = 64

const val MAIN_NET_CHAIN_ID = 87
const val TEST_NET_CHAIN_ID = 84

interface KeyPair {
    val publicKey: PublicKey
    val privateKey: PrivateKey
}

interface SeedWithNonce {
  val seed: Seed
  val nonce: Int
}

interface WavesCrypto {

    fun seedWithNonce(seed: Seed, nonce: Int): SeedWithNonce

    fun blake2b(input: Bytes): Bytes
    fun keccak(input: Bytes): Bytes
    fun sha256(input: Bytes): Bytes

    @Throws(ParseException::class)
    fun base58Decode(input: String): Bytes
    fun base58Encode(input: Bytes): String

    @Throws(ParseException::class)
    fun base64Decode(input: String): Bytes
    fun base64Encode(input: Bytes): String

    @Throws(ParseException::class)
    fun base16Decode(input: String): Bytes
    fun base16Encode(input: Bytes): String

    fun keyPair(seed: Seed): KeyPair
    fun keyPair(seed: SeedWithNonce): KeyPair
    fun publicKey(seed: Seed): PublicKey
    fun publicKey(seed: SeedWithNonce): PublicKey
    fun privateKey(seed: Seed): PrivateKey
    fun privateKey(seed: SeedWithNonce): PrivateKey
    
    fun address(publicKey: PublicKey, chainId: String? = null): Address
    fun address(seed: SeedWithNonce, chainId: String? = null): Address
    fun address(seed: Seed, chainId: String? = null): Address

    fun randomSeed(): Seed
    fun randomBytes(size: Int): Bytes

    fun signBytes(bytes: Bytes, privateKey: PrivateKey): Bytes
    fun signBytes(bytes: Bytes, seed: Seed): Bytes

    fun verifySignature(publicKey: PublicKey, bytes: Bytes, signature: Bytes): Boolean
    fun verifyPublicKey(publicKey: PublicKey): Boolean
    fun verifyAddress(address: Address, chainId: String? = null, publicKey: PublicKey? = null): Boolean

}
