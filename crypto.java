class Constants {
    static final int PUBLIC_KEY_LENGTH = 32;
    static final int PRIVATE_KEY_LENGTH = 32;
    static final int SIGNATURE_LENGTH = 64;

    static final byte MAIN_NET_CHAIN_ID = (byte) 87;
    static final byte TEST_NET_CHAIN_ID = (byte) 84;
}

enum ChainId {
    MAINNET((byte) 87),
    TESTNET((byte) 84);

    ChainId(byte chainId) {
    }
}

//TODO INTERFACES -> CLASSES (but compare with another langs implementations)
//TODO Rename ...Or... args

interface ISeedWithNonce {
    Bytes seed();
    int nonce();
}

/* Type aliases used to increase flexibility and be able
   to extend these types later on. Also type aliases allows
   names to be more self explanatory like in BASE58 case. */

//TODO Bytes Uint8Array

//TODO Base64 = string
//TODO Base58 = string
//TODO Base16 = string

//TODO ChainId = string | number

//TODO Address = Base58
interface IAddress {
}

//TODO Key = Base58 ???

//TODO PublicKey = Key
interface IPublicKey {
}

//TODO PrivateKey = Key
interface IPrivateKey {
}

interface IKeyPair {
    IPublicKey publicKey();
    IPrivateKey privateKey();
}

//TODO Seed = string | Bytes | SeedWithNonce

interface IWavesCrypto {
    ISeedWithNonce seedWithNonce(IBytes seed, int nonce);

    IBytes blake2b(IBytes input);
    IBytes keccak(IBytes input);
    IBytes sha256(IBytes input);

    IBase64 base64encode(IBytes input);
    IBytes base64decode(IBase64 input); //TODO throws (invalid input)
    IBase58 base58encode(IBytes input);
    IBytes base58decode(IBase58 input); //TODO throws (invalid input)
    IBase16 base16encode(IBytes input);
    IBytes base16decode(IBase16 input); //TODO throws (invalid input)

    IKeyPair keyPair(IBytes seed);
    IPublicKey publicKey(IBytes seed);
    IPublicKey publicKey(IPrivateKey privateKey);
    IPrivateKey privateKey(String seed);
    Address address(IPublicKey publicKey, ChainId chainId); //TODO Seed | PrivateKey | PublicKey seedOrKeys, ChainId chainId

    Bytes randomBytes(int size);
    Seed randomSeed();

    Bytes signBytes(Bytes bytes, Seed seed);
    Bytes signBytes(Bytes bytes, PrivateKey privateKey);

    boolean verifySignature(Bytes Bytes, Bytes signature, PublicKey publicKey);
    boolean verifyPublicKey(PublicKey publicKey);
    boolean verifyAddress(Address address, ChainId chainId, PublicKey publicKey); //TODO optional?: { chainId?: TChainId, publicKey?: TPublicKey }
}

