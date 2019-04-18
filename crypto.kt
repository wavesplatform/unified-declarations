typealias Bytes = ByteArray
typealias PublicKey = String
typealias PrivateKey = String
typealias Seed = String
typealias Address = String

const val PUBLIC_KEY_LENGTH = 32
const val PRIVATE_KEY_LENGTH = 32
const val SIGNATURE_LENGTH = 64

interface KeyPair {
    val publicKey: PublicKey
    val privateKey: PrivateKey
}

interface WavesCrypto {
    fun blake2b(input: Bytes): Bytes
    fun keccak(input: Bytes): Bytes
    fun sha256(input: Bytes): Bytes

    fun base58encode(input: Bytes): String
    fun base58decode(input: String): Bytes
    fun base64encode(input: Bytes): String
    fun base64decode(input: String): Bytes

    fun keyPair(seed: Seed): KeyPair
    fun publicKey(seed: Seed): PublicKey
    fun privateKey(seed: Seed): PrivateKey
    
    fun address(publicKey: PublicKey, chainId: String? = null): Address
    fun address(seed: Seed, chainId: String? = null): Address

    fun randomSeed(): Seed

    fun signBytes(bytes: Bytes, privateKey: PrivateKey): Bytes
    fun signBytes(bytes: Bytes, seed: Seed): Bytes

    fun verifySignature(publicKey: PublicKey, bytes: Bytes, signature: Bytes): Boolean
    fun verifyPublicKey(publicKey: PublicKey): Boolean
    fun verifyAddress(address: Address, chainId: String? = null, publicKey: PublicKey? = null): Boolean

}

