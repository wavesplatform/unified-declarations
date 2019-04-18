using Bytes = System.Collections.Generic.IEnumerable<byte>;
using PublicKey = System.String;
using PrivateKey = System.String;
using Seed = System.String;
using Address = System.String;
using ChainId = System.Int32;

public interface IKeyPair
{
  PublicKey PublicKey { get; }
  PrivateKey PrivateKey { get; }
}

public interface IWavesCrypto
{
  Bytes Blake2b(Bytes input);
  Bytes Keccak(Bytes input);
  Bytes Sha256(Bytes input);

  string Base58encode(Bytes input);
  Bytes Base58decode(string input);
  string Base64encode(Bytes input);
  Bytes Base64decode(string input);

  IKeyPair KeyPair(Seed seed);
  PublicKey PublicKey(Seed seed);
  PrivateKey PrivateKey(Seed seed);

  Address AddressFromPublicKey(PublicKey publicKey, ChainId? chainId = null);
  Address Address(Seed seed, ChainId? chainId = null);

  Seed RandomSeed();

  Bytes SignBytesWithPrivateKey(Bytes bytes, PrivateKey privateKey);
  Bytes SignBytes(Bytes bytes, Seed seed);

  bool VerifySignature(PublicKey publicKey, Bytes bytes, Bytes signature);
  bool VerifyPublicKey(PublicKey publicKey);
  bool VerifyAddress(Address address, ChainId? chainId, PublicKey publicKey);
}
