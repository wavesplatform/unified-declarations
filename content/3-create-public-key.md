## Create public key

Public key is a 32 bytes with checksum encoded into base58 sequence.

You can get public key from seed.

#### Syntax
```function
publicKey(seed) returns base58-encoded public key.
```

#### Example
```typescript
import { publicKey } from '@waves/crypto'

publicKey(secretSeed)
```

```swift
import WavesCrypto

WavesCrypto().publicKey(secretSeed)
```

```kotlin
import com.wavesplatform.crypto.*

publicKey(secretSeed)
```

#### Output
```json
3P6rnQp6N9YXwHA1DJKyTxwt1EV1xLc2JUh
```

