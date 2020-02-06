initSidebarItems({"struct":[["ACCUMULATOR_PLACEHOLDER_HASH","Placeholder hash of `Accumulator`."],["AccessPathHasher","The hasher used to compute the hash of an AccessPath object."],["AccountAddressHasher","The hasher used to compute the hash of an AccountAddress object."],["AccountStateBlobHasher","The hasher used to compute the hash of the blob content of an account."],["BlockHasher","The hasher used to compute the hash (block_id) of a Block object."],["ContractEventHasher","The hasher used to compute the hash of a ContractEvent object."],["DiscoveryMsgHasher","The hasher used to compute the hash of a DiscoveryMsg object."],["EventAccumulatorHasher","The hasher used to compute the hash of an internal node in the event accumulator."],["GENESIS_BLOCK_ID","Genesis block id is used as a parent of the very first block executed by the executor."],["HashValue","Output value of our hash function. Intentionally opaque for safety and modularity."],["HashValueBitIterator","An iterator over `HashValue` that generates one bit for each iteration."],["LedgerInfoHasher","The hasher used to compute the hash of a LedgerInfo object."],["PRE_GENESIS_BLOCK_ID","Block id reserved as the id of parent block of the genesis block."],["RawTransactionHasher","The hasher used to compute the hash of a RawTransaction object."],["SPARSE_MERKLE_PLACEHOLDER_HASH","Placeholder hash of `SparseMerkleTree`."],["SparseMerkleInternalHasher","The hasher used to compute the hash of an internal node in the Sparse Merkle Tree."],["SparseMerkleLeafHasher","The hasher used to compute the hash of a leaf node in the Sparse Merkle Tree."],["TestOnlyHasher","The hasher used only for testing. It doesn't have a salt."],["TimeoutHasher","The hasher used to compute the hash of a TimeoutProposal"],["TransactionAccumulatorHasher","The hasher used to compute the hash of an internal node in the transaction accumulator."],["TransactionHasher","The hasher used to complete the hash of a Transaction object."],["TransactionInfoHasher","The hasher used to compute the hash of a TransactionInfo object."],["VoteDataHasher","The hasher used to compute the hash of a VoteData object."]],"trait":[["CryptoHash","A type that implements `CryptoHash` can be hashed by a cryptographic hash function and produce a `HashValue`. Each type needs to have its own `Hasher` type."],["CryptoHasher","A trait for generating hash from arbitrary stream of bytes."],["TestOnlyHash","Provides a test_only_hash() method that can be used in tests on types that implement `serde::Serialize`."]]});