enum WavesCryptoConstants {

    PUBLIC_KEY_LENGTH((byte) 32),
    PRIVATE_KEY_LENGTH((byte) 32),
    SIGNATURE_LENGTH((byte) 64);

    WavesCryptoConstants(byte size) {
    }
}

enum WavesChainId {
    MAINNET((byte) 87),
    TESTNET((byte) 84);

    WavesChainId(byte chainId) {
    }


}

interface Address {
}

interface PublicKey {
}

interface PrivateKey {
}


interface KeyPair {
    PublicKey publicKey();

    PrivateKey privateKey();
}

interface ByteString {
}

interface WavesCrypto {
    ByteString blake2b(ByteString input);

    ByteString keccak(ByteString input);

    ByteString sha256(ByteString input);

    String base58encode(ByteString input);

    ByteString base58decode(String input);

    String base64encode(ByteString input);

    ByteString base64decode(String input);

    KeyPair keyPair(String seed);

    PublicKey publicKey(String seed);

    PrivateKey privateKey(String seed);

    Address address(PublicKey publicKey, WavesChainId chainId);

    Address address(String seed, WavesChainId chainId);

    String randomSeed();

    ByteString signBytes(ByteString bytes, PrivateKey privateKey);

    ByteString signBytes(ByteString bytes, String seed);

    Boolean verifySignature(PublicKey publicKey, ByteString byteString, ByteString signature);

    Boolean verifyPublicKey(PublicKey publicKey);

    Boolean verifyAddress(Address address, WavesChainId chainId, PublicKey publicKey);

}

