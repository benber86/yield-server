module.exports = {
  v1VaultAbi: [
    {
      inputs: [
        { internalType: 'string', name: '_name', type: 'string' },
        { internalType: 'string', name: '_symbol', type: 'string' },
        { internalType: 'address', name: '_token0', type: 'address' },
        { internalType: 'address', name: '_token1', type: 'address' },
        { internalType: 'address', name: '_liquidityPool', type: 'address' },
        { internalType: 'address', name: '_lendingPool', type: 'address' },
        { internalType: 'address', name: '_params', type: 'address' },
        { internalType: 'address', name: '_router', type: 'address' },
        { internalType: 'uint24', name: '_routerFee', type: 'uint24' },
        { internalType: 'address', name: '_balancer', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'enum IOrangeVaultV1.ActionType',
          name: 'actionType',
          type: 'uint8',
        },
        { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'collateralAmount0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'debtAmount1', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'liquidityAmount0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'liquidityAmount1', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'accruedFees0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'accruedFees1', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'vaultAmount0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'vaultAmount1', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'totalAssets', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
      ],
      name: 'Action',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: 'uint256', name: 'burn0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'burn1', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'fee0', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'fee1', type: 'uint256' },
      ],
      name: 'BurnAndCollectFees',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'from', type: 'address' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'balancer',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_shares', type: 'uint256' }],
      name: 'convertToAssets',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_assets', type: 'uint256' }],
      name: 'convertToShares',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_shares', type: 'uint256' },
        { internalType: 'uint256', name: '_maxAssets', type: 'uint256' },
        { internalType: 'bytes32[]', name: '_merkleProof', type: 'bytes32[]' },
      ],
      name: 'deposit',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'deposits',
      outputs: [
        { internalType: 'uint256', name: 'assets', type: 'uint256' },
        { internalType: 'uint40', name: 'timestamp', type: 'uint40' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'enum IOrangeVaultV1.ActionType', name: '_actionType', type: 'uint8' },
      ],
      name: 'emitAction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'flashloanHash',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getUnderlyingBalances',
      outputs: [
        {
          components: [
            { internalType: 'uint256', name: 'liquidityAmount0', type: 'uint256' },
            { internalType: 'uint256', name: 'liquidityAmount1', type: 'uint256' },
            { internalType: 'uint256', name: 'accruedFees0', type: 'uint256' },
            { internalType: 'uint256', name: 'accruedFees1', type: 'uint256' },
            { internalType: 'uint256', name: 'vaultAmount0', type: 'uint256' },
            { internalType: 'uint256', name: 'vaultAmount1', type: 'uint256' },
          ],
          internalType: 'struct IOrangeVaultV1.UnderlyingAssets',
          name: 'underlyingAssets',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'hasPosition',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lendingPool',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'liquidityPool',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lowerTick',
      outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'params',
      outputs: [{ internalType: 'contract IOrangeParametersV1', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'int24', name: '', type: 'int24' },
        { internalType: 'int24', name: '', type: 'int24' },
        {
          components: [
            { internalType: 'uint256', name: 'collateralAmount0', type: 'uint256' },
            { internalType: 'uint256', name: 'debtAmount1', type: 'uint256' },
            { internalType: 'uint256', name: 'token0Balance', type: 'uint256' },
            { internalType: 'uint256', name: 'token1Balance', type: 'uint256' },
          ],
          internalType: 'struct IOrangeVaultV1.Positions',
          name: '',
          type: 'tuple',
        },
        { internalType: 'uint128', name: '', type: 'uint128' },
      ],
      name: 'rebalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IERC20[]', name: '_tokens', type: 'address[]' },
        { internalType: 'uint256[]', name: '_amounts', type: 'uint256[]' },
        { internalType: 'uint256[]', name: '', type: 'uint256[]' },
        { internalType: 'bytes', name: '_userData', type: 'bytes' },
      ],
      name: 'receiveFlashLoan',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_shares', type: 'uint256' },
        { internalType: 'uint256', name: '_minAssets', type: 'uint256' },
      ],
      name: 'redeem',
      outputs: [{ internalType: 'uint256', name: 'returnAssets_', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'router',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'routerFee',
      outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'int24', name: '', type: 'int24' }],
      name: 'stoploss',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token0',
      outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token1',
      outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalAssets',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalDeposits',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'upperTick',
      outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
      stateMutability: 'view',
      type: 'function',
    },
  ]
}