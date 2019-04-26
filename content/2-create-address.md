## Create address

Address is a 32 bytes with checksum encoded into base58 sequence.

You can get address from public key or private key or seed.

#### Syntax
```function
address(publicKeyOrSeed, [chainId]) returns base58 encoded address.
```

#### Example
```typescript
import { address } from '@waves/crypto'

address('puzzle surface surprise lounge emotion museum nice solar fatal beach universe stuff assume door chaos')
```

```swift
import WavesCrypto

WavesCrypto().address("puzzle surface surprise lounge emotion museum nice solar fatal beach universe stuff assume door chaos")
```

```kotlin
import com.wavesplatform.crypto.*

address("puzzle surface surprise lounge emotion museum nice solar fatal beach universe stuff assume door chaos")
```

#### Output

```json
3P6rnQp6N9YXwHA1DJKyTxwt1EV1xLc2JUh
```


