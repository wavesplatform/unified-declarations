
## Create private key

Private key is a 32 bytes with checksum encoded into base58 sequence.

You can get private key from seed.

#### Syntax
```function
privateKey(seed) returns base58-encoded private key.
```

#### Example
```typescript
import { privateKey } from '@waves/crypto'

privateKey(secretSeed)
```

```swift
import WavesCrypto

WavesCrypto().privateKey(secretSeed)
```

```kotlin
import com.wavesplatform.crypto.*

privateKey(secretSeed)
```

#### Output

```json
3P6rnQp6N9YXwHA1DJKyTxwt1EV1xLc2JUh
```
