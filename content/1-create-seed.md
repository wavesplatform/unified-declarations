## Create seed

Waves uses 39BIP-like standart. You can create seed phrase using default word dictionary with the *randomSeed()* function.

**Do not reveal your seed to anyone!**

#### Syntax
```function
randomSeed() returns mnemonic seed phrase.
```

#### Example
```typescript
import { randomSeed } from '@waves/crypto'

randomSeed()
```

```swift
import WavesCrypto

WavesCrypto().randomSeed()
```

```kotlin
import com.wavesplatform.crypto.*

randomSeed()
```

#### Output
```json
puzzle surface surprise lounge emotion museum nice solar fatal beach universe stuff assume door chaos
```
