typealias Bytes = UInt8
typealias PublicKey = Bytes
typealias PrivateKey = Bytes
typealias Seed = String
typealias Address = String

protocol KeyPair {
  var publicKey: PublicKey { get }
  var privateKey: PublicKey { get }
}

struct Constants {
  static let PUBLIC_KEY_LENGTH = 32
  static let PRIVATE_KEY_LENGTH = 32
  static let SIGNATURE_LENGTH = 64
}

protocol WavesCrypto {
  func blake2b(input: Bytes) -> Bytes
  func keccak(input: Bytes) -> Bytes
  func sha256(input: Bytes) -> Bytes

  func base58encode(input: Bytes) -> String
  func base58decode(input: String) -> Bytes
  func base64encode(input: Bytes) -> String
  func base64decode(input: String) -> Bytes

  func keyPair(seed: Seed) -> KeyPair
  func publicKey(seed: Seed) -> PublicKey
  func privateKey(seed: Seed) -> PrivateKey
  func address(publicKey: PublicKey, chainId: String?) -> Address
  func address(seed: Seed, chainId: String?) -> Address
  func randomSeed() -> Seed

  func signBytes(bytes: Bytes, privateKey: PrivateKey) -> Bytes
  func signBytes(bytes: Bytes, seed: Seed) -> Bytes
  func hashBytes(bytes: Bytes) -> Bytes

  func verifySignature(publicKey: PublicKey, bytes: Bytes, signature: Bytes) -> Bool
  func verifyPublicKey(publicKey: PublicKey) -> Bool
  func verifyAddress(address: Address, chainId: String?, publicKey: PublicKey?) -> Bool
}
