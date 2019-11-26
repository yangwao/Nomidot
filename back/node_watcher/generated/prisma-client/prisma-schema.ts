// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBlockNumber {
  count: Int!
}

type AggregateImOnline {
  count: Int!
}

type AggregateNominations {
  count: Int!
}

type AggregateRewards {
  count: Int!
}

type AggregateSessions {
  count: Int!
}

type AggregateSlashing {
  count: Int!
}

type AggregateStake {
  count: Int!
}

type AggregateTotalIssuance {
  count: Int!
}

type AggregateValidations {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type BlockNumber {
  id: Int!
  number: Int!
  authored_by: String!
  start_datetime: DateTime!
  hash: String!
}

type BlockNumberConnection {
  pageInfo: PageInfo!
  edges: [BlockNumberEdge]!
  aggregate: AggregateBlockNumber!
}

input BlockNumberCreateInput {
  id: Int
  number: Int!
  authored_by: String!
  start_datetime: DateTime!
  hash: String!
}

input BlockNumberCreateOneInput {
  create: BlockNumberCreateInput
  connect: BlockNumberWhereUniqueInput
}

type BlockNumberEdge {
  node: BlockNumber!
  cursor: String!
}

enum BlockNumberOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  authored_by_ASC
  authored_by_DESC
  start_datetime_ASC
  start_datetime_DESC
  hash_ASC
  hash_DESC
}

type BlockNumberPreviousValues {
  id: Int!
  number: Int!
  authored_by: String!
  start_datetime: DateTime!
  hash: String!
}

type BlockNumberSubscriptionPayload {
  mutation: MutationType!
  node: BlockNumber
  updatedFields: [String!]
  previousValues: BlockNumberPreviousValues
}

input BlockNumberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlockNumberWhereInput
  AND: [BlockNumberSubscriptionWhereInput!]
  OR: [BlockNumberSubscriptionWhereInput!]
  NOT: [BlockNumberSubscriptionWhereInput!]
}

input BlockNumberUpdateDataInput {
  number: Int
  authored_by: String
  start_datetime: DateTime
  hash: String
}

input BlockNumberUpdateInput {
  number: Int
  authored_by: String
  start_datetime: DateTime
  hash: String
}

input BlockNumberUpdateManyMutationInput {
  number: Int
  authored_by: String
  start_datetime: DateTime
  hash: String
}

input BlockNumberUpdateOneRequiredInput {
  create: BlockNumberCreateInput
  update: BlockNumberUpdateDataInput
  upsert: BlockNumberUpsertNestedInput
  connect: BlockNumberWhereUniqueInput
}

input BlockNumberUpsertNestedInput {
  update: BlockNumberUpdateDataInput!
  create: BlockNumberCreateInput!
}

input BlockNumberWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  authored_by: String
  authored_by_not: String
  authored_by_in: [String!]
  authored_by_not_in: [String!]
  authored_by_lt: String
  authored_by_lte: String
  authored_by_gt: String
  authored_by_gte: String
  authored_by_contains: String
  authored_by_not_contains: String
  authored_by_starts_with: String
  authored_by_not_starts_with: String
  authored_by_ends_with: String
  authored_by_not_ends_with: String
  start_datetime: DateTime
  start_datetime_not: DateTime
  start_datetime_in: [DateTime!]
  start_datetime_not_in: [DateTime!]
  start_datetime_lt: DateTime
  start_datetime_lte: DateTime
  start_datetime_gt: DateTime
  start_datetime_gte: DateTime
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  AND: [BlockNumberWhereInput!]
  OR: [BlockNumberWhereInput!]
  NOT: [BlockNumberWhereInput!]
}

input BlockNumberWhereUniqueInput {
  id: Int
  start_datetime: DateTime
  hash: String
}

scalar DateTime

type ImOnline {
  id: ID!
  block_number: BlockNumber!
  sender: String!
}

type ImOnlineConnection {
  pageInfo: PageInfo!
  edges: [ImOnlineEdge]!
  aggregate: AggregateImOnline!
}

input ImOnlineCreateInput {
  id: ID
  block_number: BlockNumberCreateOneInput!
  sender: String!
}

type ImOnlineEdge {
  node: ImOnline!
  cursor: String!
}

enum ImOnlineOrderByInput {
  id_ASC
  id_DESC
  sender_ASC
  sender_DESC
}

type ImOnlinePreviousValues {
  id: ID!
  sender: String!
}

type ImOnlineSubscriptionPayload {
  mutation: MutationType!
  node: ImOnline
  updatedFields: [String!]
  previousValues: ImOnlinePreviousValues
}

input ImOnlineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImOnlineWhereInput
  AND: [ImOnlineSubscriptionWhereInput!]
  OR: [ImOnlineSubscriptionWhereInput!]
  NOT: [ImOnlineSubscriptionWhereInput!]
}

input ImOnlineUpdateInput {
  block_number: BlockNumberUpdateOneRequiredInput
  sender: String
}

input ImOnlineUpdateManyMutationInput {
  sender: String
}

input ImOnlineWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  block_number: BlockNumberWhereInput
  sender: String
  sender_not: String
  sender_in: [String!]
  sender_not_in: [String!]
  sender_lt: String
  sender_lte: String
  sender_gt: String
  sender_gte: String
  sender_contains: String
  sender_not_contains: String
  sender_starts_with: String
  sender_not_starts_with: String
  sender_ends_with: String
  sender_not_ends_with: String
  AND: [ImOnlineWhereInput!]
  OR: [ImOnlineWhereInput!]
  NOT: [ImOnlineWhereInput!]
}

input ImOnlineWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBlockNumber(data: BlockNumberCreateInput!): BlockNumber!
  updateBlockNumber(data: BlockNumberUpdateInput!, where: BlockNumberWhereUniqueInput!): BlockNumber
  updateManyBlockNumbers(data: BlockNumberUpdateManyMutationInput!, where: BlockNumberWhereInput): BatchPayload!
  upsertBlockNumber(where: BlockNumberWhereUniqueInput!, create: BlockNumberCreateInput!, update: BlockNumberUpdateInput!): BlockNumber!
  deleteBlockNumber(where: BlockNumberWhereUniqueInput!): BlockNumber
  deleteManyBlockNumbers(where: BlockNumberWhereInput): BatchPayload!
  createImOnline(data: ImOnlineCreateInput!): ImOnline!
  updateImOnline(data: ImOnlineUpdateInput!, where: ImOnlineWhereUniqueInput!): ImOnline
  updateManyImOnlines(data: ImOnlineUpdateManyMutationInput!, where: ImOnlineWhereInput): BatchPayload!
  upsertImOnline(where: ImOnlineWhereUniqueInput!, create: ImOnlineCreateInput!, update: ImOnlineUpdateInput!): ImOnline!
  deleteImOnline(where: ImOnlineWhereUniqueInput!): ImOnline
  deleteManyImOnlines(where: ImOnlineWhereInput): BatchPayload!
  createNominations(data: NominationsCreateInput!): Nominations!
  updateNominations(data: NominationsUpdateInput!, where: NominationsWhereUniqueInput!): Nominations
  updateManyNominationses(data: NominationsUpdateManyMutationInput!, where: NominationsWhereInput): BatchPayload!
  upsertNominations(where: NominationsWhereUniqueInput!, create: NominationsCreateInput!, update: NominationsUpdateInput!): Nominations!
  deleteNominations(where: NominationsWhereUniqueInput!): Nominations
  deleteManyNominationses(where: NominationsWhereInput): BatchPayload!
  createRewards(data: RewardsCreateInput!): Rewards!
  updateRewards(data: RewardsUpdateInput!, where: RewardsWhereUniqueInput!): Rewards
  updateManyRewardses(data: RewardsUpdateManyMutationInput!, where: RewardsWhereInput): BatchPayload!
  upsertRewards(where: RewardsWhereUniqueInput!, create: RewardsCreateInput!, update: RewardsUpdateInput!): Rewards!
  deleteRewards(where: RewardsWhereUniqueInput!): Rewards
  deleteManyRewardses(where: RewardsWhereInput): BatchPayload!
  createSessions(data: SessionsCreateInput!): Sessions!
  updateSessions(data: SessionsUpdateInput!, where: SessionsWhereUniqueInput!): Sessions
  upsertSessions(where: SessionsWhereUniqueInput!, create: SessionsCreateInput!, update: SessionsUpdateInput!): Sessions!
  deleteSessions(where: SessionsWhereUniqueInput!): Sessions
  deleteManySessionses(where: SessionsWhereInput): BatchPayload!
  createSlashing(data: SlashingCreateInput!): Slashing!
  updateSlashing(data: SlashingUpdateInput!, where: SlashingWhereUniqueInput!): Slashing
  updateManySlashings(data: SlashingUpdateManyMutationInput!, where: SlashingWhereInput): BatchPayload!
  upsertSlashing(where: SlashingWhereUniqueInput!, create: SlashingCreateInput!, update: SlashingUpdateInput!): Slashing!
  deleteSlashing(where: SlashingWhereUniqueInput!): Slashing
  deleteManySlashings(where: SlashingWhereInput): BatchPayload!
  createStake(data: StakeCreateInput!): Stake!
  updateStake(data: StakeUpdateInput!, where: StakeWhereUniqueInput!): Stake
  updateManyStakes(data: StakeUpdateManyMutationInput!, where: StakeWhereInput): BatchPayload!
  upsertStake(where: StakeWhereUniqueInput!, create: StakeCreateInput!, update: StakeUpdateInput!): Stake!
  deleteStake(where: StakeWhereUniqueInput!): Stake
  deleteManyStakes(where: StakeWhereInput): BatchPayload!
  createTotalIssuance(data: TotalIssuanceCreateInput!): TotalIssuance!
  updateTotalIssuance(data: TotalIssuanceUpdateInput!, where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  updateManyTotalIssuances(data: TotalIssuanceUpdateManyMutationInput!, where: TotalIssuanceWhereInput): BatchPayload!
  upsertTotalIssuance(where: TotalIssuanceWhereUniqueInput!, create: TotalIssuanceCreateInput!, update: TotalIssuanceUpdateInput!): TotalIssuance!
  deleteTotalIssuance(where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  deleteManyTotalIssuances(where: TotalIssuanceWhereInput): BatchPayload!
  createValidations(data: ValidationsCreateInput!): Validations!
  updateValidations(data: ValidationsUpdateInput!, where: ValidationsWhereUniqueInput!): Validations
  updateManyValidationses(data: ValidationsUpdateManyMutationInput!, where: ValidationsWhereInput): BatchPayload!
  upsertValidations(where: ValidationsWhereUniqueInput!, create: ValidationsCreateInput!, update: ValidationsUpdateInput!): Validations!
  deleteValidations(where: ValidationsWhereUniqueInput!): Validations
  deleteManyValidationses(where: ValidationsWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Nominations {
  id: ID!
  validator_controller: String!
  validator_stash: String!
  nominator_controller: String!
  nominator_stash: String!
  session: Sessions!
  bonded: Int!
}

type NominationsConnection {
  pageInfo: PageInfo!
  edges: [NominationsEdge]!
  aggregate: AggregateNominations!
}

input NominationsCreateInput {
  id: ID
  validator_controller: String!
  validator_stash: String!
  nominator_controller: String!
  nominator_stash: String!
  session: SessionsCreateOneInput!
  bonded: Int!
}

type NominationsEdge {
  node: Nominations!
  cursor: String!
}

enum NominationsOrderByInput {
  id_ASC
  id_DESC
  validator_controller_ASC
  validator_controller_DESC
  validator_stash_ASC
  validator_stash_DESC
  nominator_controller_ASC
  nominator_controller_DESC
  nominator_stash_ASC
  nominator_stash_DESC
  bonded_ASC
  bonded_DESC
}

type NominationsPreviousValues {
  id: ID!
  validator_controller: String!
  validator_stash: String!
  nominator_controller: String!
  nominator_stash: String!
  bonded: Int!
}

type NominationsSubscriptionPayload {
  mutation: MutationType!
  node: Nominations
  updatedFields: [String!]
  previousValues: NominationsPreviousValues
}

input NominationsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NominationsWhereInput
  AND: [NominationsSubscriptionWhereInput!]
  OR: [NominationsSubscriptionWhereInput!]
  NOT: [NominationsSubscriptionWhereInput!]
}

input NominationsUpdateInput {
  validator_controller: String
  validator_stash: String
  nominator_controller: String
  nominator_stash: String
  session: SessionsUpdateOneRequiredInput
  bonded: Int
}

input NominationsUpdateManyMutationInput {
  validator_controller: String
  validator_stash: String
  nominator_controller: String
  nominator_stash: String
  bonded: Int
}

input NominationsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  validator_controller: String
  validator_controller_not: String
  validator_controller_in: [String!]
  validator_controller_not_in: [String!]
  validator_controller_lt: String
  validator_controller_lte: String
  validator_controller_gt: String
  validator_controller_gte: String
  validator_controller_contains: String
  validator_controller_not_contains: String
  validator_controller_starts_with: String
  validator_controller_not_starts_with: String
  validator_controller_ends_with: String
  validator_controller_not_ends_with: String
  validator_stash: String
  validator_stash_not: String
  validator_stash_in: [String!]
  validator_stash_not_in: [String!]
  validator_stash_lt: String
  validator_stash_lte: String
  validator_stash_gt: String
  validator_stash_gte: String
  validator_stash_contains: String
  validator_stash_not_contains: String
  validator_stash_starts_with: String
  validator_stash_not_starts_with: String
  validator_stash_ends_with: String
  validator_stash_not_ends_with: String
  nominator_controller: String
  nominator_controller_not: String
  nominator_controller_in: [String!]
  nominator_controller_not_in: [String!]
  nominator_controller_lt: String
  nominator_controller_lte: String
  nominator_controller_gt: String
  nominator_controller_gte: String
  nominator_controller_contains: String
  nominator_controller_not_contains: String
  nominator_controller_starts_with: String
  nominator_controller_not_starts_with: String
  nominator_controller_ends_with: String
  nominator_controller_not_ends_with: String
  nominator_stash: String
  nominator_stash_not: String
  nominator_stash_in: [String!]
  nominator_stash_not_in: [String!]
  nominator_stash_lt: String
  nominator_stash_lte: String
  nominator_stash_gt: String
  nominator_stash_gte: String
  nominator_stash_contains: String
  nominator_stash_not_contains: String
  nominator_stash_starts_with: String
  nominator_stash_not_starts_with: String
  nominator_stash_ends_with: String
  nominator_stash_not_ends_with: String
  session: SessionsWhereInput
  bonded: Int
  bonded_not: Int
  bonded_in: [Int!]
  bonded_not_in: [Int!]
  bonded_lt: Int
  bonded_lte: Int
  bonded_gt: Int
  bonded_gte: Int
  AND: [NominationsWhereInput!]
  OR: [NominationsWhereInput!]
  NOT: [NominationsWhereInput!]
}

input NominationsWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  blockNumber(where: BlockNumberWhereUniqueInput!): BlockNumber
  blockNumbers(where: BlockNumberWhereInput, orderBy: BlockNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlockNumber]!
  blockNumbersConnection(where: BlockNumberWhereInput, orderBy: BlockNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlockNumberConnection!
  imOnline(where: ImOnlineWhereUniqueInput!): ImOnline
  imOnlines(where: ImOnlineWhereInput, orderBy: ImOnlineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ImOnline]!
  imOnlinesConnection(where: ImOnlineWhereInput, orderBy: ImOnlineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImOnlineConnection!
  nominations(where: NominationsWhereUniqueInput!): Nominations
  nominationses(where: NominationsWhereInput, orderBy: NominationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nominations]!
  nominationsesConnection(where: NominationsWhereInput, orderBy: NominationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NominationsConnection!
  rewards(where: RewardsWhereUniqueInput!): Rewards
  rewardses(where: RewardsWhereInput, orderBy: RewardsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rewards]!
  rewardsesConnection(where: RewardsWhereInput, orderBy: RewardsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RewardsConnection!
  sessions(where: SessionsWhereUniqueInput!): Sessions
  sessionses(where: SessionsWhereInput, orderBy: SessionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sessions]!
  sessionsesConnection(where: SessionsWhereInput, orderBy: SessionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SessionsConnection!
  slashing(where: SlashingWhereUniqueInput!): Slashing
  slashings(where: SlashingWhereInput, orderBy: SlashingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Slashing]!
  slashingsConnection(where: SlashingWhereInput, orderBy: SlashingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SlashingConnection!
  stake(where: StakeWhereUniqueInput!): Stake
  stakes(where: StakeWhereInput, orderBy: StakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stake]!
  stakesConnection(where: StakeWhereInput, orderBy: StakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StakeConnection!
  totalIssuance(where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  totalIssuances(where: TotalIssuanceWhereInput, orderBy: TotalIssuanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TotalIssuance]!
  totalIssuancesConnection(where: TotalIssuanceWhereInput, orderBy: TotalIssuanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TotalIssuanceConnection!
  validations(where: ValidationsWhereUniqueInput!): Validations
  validationses(where: ValidationsWhereInput, orderBy: ValidationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validations]!
  validationsesConnection(where: ValidationsWhereInput, orderBy: ValidationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ValidationsConnection!
  node(id: ID!): Node
}

type Rewards {
  id: ID!
  datetime: DateTime!
  amount: Int!
  authored_block: BlockNumber!
  recipients: [String!]!
}

type RewardsConnection {
  pageInfo: PageInfo!
  edges: [RewardsEdge]!
  aggregate: AggregateRewards!
}

input RewardsCreateInput {
  id: ID
  datetime: DateTime!
  amount: Int!
  authored_block: BlockNumberCreateOneInput!
  recipients: RewardsCreaterecipientsInput
}

input RewardsCreaterecipientsInput {
  set: [String!]
}

type RewardsEdge {
  node: Rewards!
  cursor: String!
}

enum RewardsOrderByInput {
  id_ASC
  id_DESC
  datetime_ASC
  datetime_DESC
  amount_ASC
  amount_DESC
}

type RewardsPreviousValues {
  id: ID!
  datetime: DateTime!
  amount: Int!
  recipients: [String!]!
}

type RewardsSubscriptionPayload {
  mutation: MutationType!
  node: Rewards
  updatedFields: [String!]
  previousValues: RewardsPreviousValues
}

input RewardsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RewardsWhereInput
  AND: [RewardsSubscriptionWhereInput!]
  OR: [RewardsSubscriptionWhereInput!]
  NOT: [RewardsSubscriptionWhereInput!]
}

input RewardsUpdateInput {
  datetime: DateTime
  amount: Int
  authored_block: BlockNumberUpdateOneRequiredInput
  recipients: RewardsUpdaterecipientsInput
}

input RewardsUpdateManyMutationInput {
  datetime: DateTime
  amount: Int
  recipients: RewardsUpdaterecipientsInput
}

input RewardsUpdaterecipientsInput {
  set: [String!]
}

input RewardsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  datetime: DateTime
  datetime_not: DateTime
  datetime_in: [DateTime!]
  datetime_not_in: [DateTime!]
  datetime_lt: DateTime
  datetime_lte: DateTime
  datetime_gt: DateTime
  datetime_gte: DateTime
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  authored_block: BlockNumberWhereInput
  AND: [RewardsWhereInput!]
  OR: [RewardsWhereInput!]
  NOT: [RewardsWhereInput!]
}

input RewardsWhereUniqueInput {
  id: ID
}

type Sessions {
  id: ID!
  start: BlockNumber!
  end: BlockNumber!
}

type SessionsConnection {
  pageInfo: PageInfo!
  edges: [SessionsEdge]!
  aggregate: AggregateSessions!
}

input SessionsCreateInput {
  id: ID
  start: BlockNumberCreateOneInput!
  end: BlockNumberCreateOneInput!
}

input SessionsCreateOneInput {
  create: SessionsCreateInput
  connect: SessionsWhereUniqueInput
}

type SessionsEdge {
  node: Sessions!
  cursor: String!
}

enum SessionsOrderByInput {
  id_ASC
  id_DESC
}

type SessionsPreviousValues {
  id: ID!
}

type SessionsSubscriptionPayload {
  mutation: MutationType!
  node: Sessions
  updatedFields: [String!]
  previousValues: SessionsPreviousValues
}

input SessionsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SessionsWhereInput
  AND: [SessionsSubscriptionWhereInput!]
  OR: [SessionsSubscriptionWhereInput!]
  NOT: [SessionsSubscriptionWhereInput!]
}

input SessionsUpdateDataInput {
  start: BlockNumberUpdateOneRequiredInput
  end: BlockNumberUpdateOneRequiredInput
}

input SessionsUpdateInput {
  start: BlockNumberUpdateOneRequiredInput
  end: BlockNumberUpdateOneRequiredInput
}

input SessionsUpdateOneRequiredInput {
  create: SessionsCreateInput
  update: SessionsUpdateDataInput
  upsert: SessionsUpsertNestedInput
  connect: SessionsWhereUniqueInput
}

input SessionsUpsertNestedInput {
  update: SessionsUpdateDataInput!
  create: SessionsCreateInput!
}

input SessionsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: BlockNumberWhereInput
  end: BlockNumberWhereInput
  AND: [SessionsWhereInput!]
  OR: [SessionsWhereInput!]
  NOT: [SessionsWhereInput!]
}

input SessionsWhereUniqueInput {
  id: ID
}

type Slashing {
  id: ID!
  block_number: BlockNumber!
  datetime: DateTime!
  reason: String!
  amount: Int!
}

type SlashingConnection {
  pageInfo: PageInfo!
  edges: [SlashingEdge]!
  aggregate: AggregateSlashing!
}

input SlashingCreateInput {
  id: ID
  block_number: BlockNumberCreateOneInput!
  datetime: DateTime!
  reason: String!
  amount: Int!
}

type SlashingEdge {
  node: Slashing!
  cursor: String!
}

enum SlashingOrderByInput {
  id_ASC
  id_DESC
  datetime_ASC
  datetime_DESC
  reason_ASC
  reason_DESC
  amount_ASC
  amount_DESC
}

type SlashingPreviousValues {
  id: ID!
  datetime: DateTime!
  reason: String!
  amount: Int!
}

type SlashingSubscriptionPayload {
  mutation: MutationType!
  node: Slashing
  updatedFields: [String!]
  previousValues: SlashingPreviousValues
}

input SlashingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SlashingWhereInput
  AND: [SlashingSubscriptionWhereInput!]
  OR: [SlashingSubscriptionWhereInput!]
  NOT: [SlashingSubscriptionWhereInput!]
}

input SlashingUpdateInput {
  block_number: BlockNumberUpdateOneRequiredInput
  datetime: DateTime
  reason: String
  amount: Int
}

input SlashingUpdateManyMutationInput {
  datetime: DateTime
  reason: String
  amount: Int
}

input SlashingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  block_number: BlockNumberWhereInput
  datetime: DateTime
  datetime_not: DateTime
  datetime_in: [DateTime!]
  datetime_not_in: [DateTime!]
  datetime_lt: DateTime
  datetime_lte: DateTime
  datetime_gt: DateTime
  datetime_gte: DateTime
  reason: String
  reason_not: String
  reason_in: [String!]
  reason_not_in: [String!]
  reason_lt: String
  reason_lte: String
  reason_gt: String
  reason_gte: String
  reason_contains: String
  reason_not_contains: String
  reason_starts_with: String
  reason_not_starts_with: String
  reason_ends_with: String
  reason_not_ends_with: String
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  AND: [SlashingWhereInput!]
  OR: [SlashingWhereInput!]
  NOT: [SlashingWhereInput!]
}

input SlashingWhereUniqueInput {
  id: ID
}

type Stake {
  id: ID!
  block_number: BlockNumber!
  total_stake: Int!
}

type StakeConnection {
  pageInfo: PageInfo!
  edges: [StakeEdge]!
  aggregate: AggregateStake!
}

input StakeCreateInput {
  id: ID
  block_number: BlockNumberCreateOneInput!
  total_stake: Int!
}

type StakeEdge {
  node: Stake!
  cursor: String!
}

enum StakeOrderByInput {
  id_ASC
  id_DESC
  total_stake_ASC
  total_stake_DESC
}

type StakePreviousValues {
  id: ID!
  total_stake: Int!
}

type StakeSubscriptionPayload {
  mutation: MutationType!
  node: Stake
  updatedFields: [String!]
  previousValues: StakePreviousValues
}

input StakeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StakeWhereInput
  AND: [StakeSubscriptionWhereInput!]
  OR: [StakeSubscriptionWhereInput!]
  NOT: [StakeSubscriptionWhereInput!]
}

input StakeUpdateInput {
  block_number: BlockNumberUpdateOneRequiredInput
  total_stake: Int
}

input StakeUpdateManyMutationInput {
  total_stake: Int
}

input StakeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  block_number: BlockNumberWhereInput
  total_stake: Int
  total_stake_not: Int
  total_stake_in: [Int!]
  total_stake_not_in: [Int!]
  total_stake_lt: Int
  total_stake_lte: Int
  total_stake_gt: Int
  total_stake_gte: Int
  AND: [StakeWhereInput!]
  OR: [StakeWhereInput!]
  NOT: [StakeWhereInput!]
}

input StakeWhereUniqueInput {
  id: ID
}

type Subscription {
  blockNumber(where: BlockNumberSubscriptionWhereInput): BlockNumberSubscriptionPayload
  imOnline(where: ImOnlineSubscriptionWhereInput): ImOnlineSubscriptionPayload
  nominations(where: NominationsSubscriptionWhereInput): NominationsSubscriptionPayload
  rewards(where: RewardsSubscriptionWhereInput): RewardsSubscriptionPayload
  sessions(where: SessionsSubscriptionWhereInput): SessionsSubscriptionPayload
  slashing(where: SlashingSubscriptionWhereInput): SlashingSubscriptionPayload
  stake(where: StakeSubscriptionWhereInput): StakeSubscriptionPayload
  totalIssuance(where: TotalIssuanceSubscriptionWhereInput): TotalIssuanceSubscriptionPayload
  validations(where: ValidationsSubscriptionWhereInput): ValidationsSubscriptionPayload
}

type TotalIssuance {
  id: ID!
  amount: Int!
}

type TotalIssuanceConnection {
  pageInfo: PageInfo!
  edges: [TotalIssuanceEdge]!
  aggregate: AggregateTotalIssuance!
}

input TotalIssuanceCreateInput {
  id: ID
  amount: Int!
}

type TotalIssuanceEdge {
  node: TotalIssuance!
  cursor: String!
}

enum TotalIssuanceOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
}

type TotalIssuancePreviousValues {
  id: ID!
  amount: Int!
}

type TotalIssuanceSubscriptionPayload {
  mutation: MutationType!
  node: TotalIssuance
  updatedFields: [String!]
  previousValues: TotalIssuancePreviousValues
}

input TotalIssuanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TotalIssuanceWhereInput
  AND: [TotalIssuanceSubscriptionWhereInput!]
  OR: [TotalIssuanceSubscriptionWhereInput!]
  NOT: [TotalIssuanceSubscriptionWhereInput!]
}

input TotalIssuanceUpdateInput {
  amount: Int
}

input TotalIssuanceUpdateManyMutationInput {
  amount: Int
}

input TotalIssuanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  AND: [TotalIssuanceWhereInput!]
  OR: [TotalIssuanceWhereInput!]
  NOT: [TotalIssuanceWhereInput!]
}

input TotalIssuanceWhereUniqueInput {
  id: ID
}

type Validations {
  id: ID!
  start: BlockNumber!
  validator_controller: String!
  validator_stash: String!
  validator_preferences: Int!
}

type ValidationsConnection {
  pageInfo: PageInfo!
  edges: [ValidationsEdge]!
  aggregate: AggregateValidations!
}

input ValidationsCreateInput {
  id: ID
  start: BlockNumberCreateOneInput!
  validator_controller: String!
  validator_stash: String!
  validator_preferences: Int!
}

type ValidationsEdge {
  node: Validations!
  cursor: String!
}

enum ValidationsOrderByInput {
  id_ASC
  id_DESC
  validator_controller_ASC
  validator_controller_DESC
  validator_stash_ASC
  validator_stash_DESC
  validator_preferences_ASC
  validator_preferences_DESC
}

type ValidationsPreviousValues {
  id: ID!
  validator_controller: String!
  validator_stash: String!
  validator_preferences: Int!
}

type ValidationsSubscriptionPayload {
  mutation: MutationType!
  node: Validations
  updatedFields: [String!]
  previousValues: ValidationsPreviousValues
}

input ValidationsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ValidationsWhereInput
  AND: [ValidationsSubscriptionWhereInput!]
  OR: [ValidationsSubscriptionWhereInput!]
  NOT: [ValidationsSubscriptionWhereInput!]
}

input ValidationsUpdateInput {
  start: BlockNumberUpdateOneRequiredInput
  validator_controller: String
  validator_stash: String
  validator_preferences: Int
}

input ValidationsUpdateManyMutationInput {
  validator_controller: String
  validator_stash: String
  validator_preferences: Int
}

input ValidationsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: BlockNumberWhereInput
  validator_controller: String
  validator_controller_not: String
  validator_controller_in: [String!]
  validator_controller_not_in: [String!]
  validator_controller_lt: String
  validator_controller_lte: String
  validator_controller_gt: String
  validator_controller_gte: String
  validator_controller_contains: String
  validator_controller_not_contains: String
  validator_controller_starts_with: String
  validator_controller_not_starts_with: String
  validator_controller_ends_with: String
  validator_controller_not_ends_with: String
  validator_stash: String
  validator_stash_not: String
  validator_stash_in: [String!]
  validator_stash_not_in: [String!]
  validator_stash_lt: String
  validator_stash_lte: String
  validator_stash_gt: String
  validator_stash_gte: String
  validator_stash_contains: String
  validator_stash_not_contains: String
  validator_stash_starts_with: String
  validator_stash_not_starts_with: String
  validator_stash_ends_with: String
  validator_stash_not_ends_with: String
  validator_preferences: Int
  validator_preferences_not: Int
  validator_preferences_in: [Int!]
  validator_preferences_not_in: [Int!]
  validator_preferences_lt: Int
  validator_preferences_lte: Int
  validator_preferences_gt: Int
  validator_preferences_gte: Int
  AND: [ValidationsWhereInput!]
  OR: [ValidationsWhereInput!]
  NOT: [ValidationsWhereInput!]
}

input ValidationsWhereUniqueInput {
  id: ID
}
`