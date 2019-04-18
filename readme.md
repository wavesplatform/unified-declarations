# unified-declarations

This is a draft declarations for Waves crypto layer.

By design there will be 4 layers of abstraction upon library initiative:
* Types
  * Interface like type declarations for Transactions\Blocks
* Crypto
  * Crypto primitives 
* Tx\Binary\Json
  * The way to convert transactions back and forth to BINARY or JSON formats node uses
* API
  * Wrapper around standard node apis

For now we are trying to unify crypto primitives that Waves uses across all popular tech stacks.
