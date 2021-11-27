# nft-web3js
Example interactive with NFT Collection with Web3js

# postman interact
  - Mint NFT
    - Host: `localhost:5000/sc-deploy/mint`
    - Method: POST
    - body:
    ```json
        {
          "to": "0xae28a59505c6c03F29A9399801773787f6B4fF83",
          "from": "0xA97a9f1210450cD49A5D1983C8701AbF30dbbDBc",
          "metadata": {
              "tokenId": 0,
              "name": "test",
              "price": 10,
              "power": "Hello power"
          }
        }
    ```
    - Response example
    ```json
      {
        "message": "success mint nft",
        "body": {
            "transactionHash": "0x220841abee662d911adf7f8d43bc749016097a86142a8bb841c9ea99922f1da6",
            "transactionIndex": 0,
            "blockHash": "0xeee72f9b57856599ff24d579d8ae3bc00ce2db2334c3bea57b4ff2ecbfb0d7fd",
            "blockNumber": 133,
            "from": "0xa97a9f1210450cd49a5d1983c8701abf30dbbdbc",
            "to": "0x5a711def3284e98776f0755ed339c20fc203f036",
            "gasUsed": 136669,
            "cumulativeGasUsed": 136669,
            "contractAddress": null,
            "status": true,
            "logsBloom": "0x00000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000800000000000000000008000000000000000000000000000000100000000000000000020000000000000000000800000000000004000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000008000000000000",
            "events": {
                "Transfer": {
                    "logIndex": 0,
                    "transactionIndex": 0,
                    "transactionHash": "0x220841abee662d911adf7f8d43bc749016097a86142a8bb841c9ea99922f1da6",
                    "blockHash": "0xeee72f9b57856599ff24d579d8ae3bc00ce2db2334c3bea57b4ff2ecbfb0d7fd",
                    "blockNumber": 133,
                    "address": "0x5A711DEf3284E98776F0755eD339C20FC203f036",
                    "type": "mined",
                    "id": "log_3b2463dd",
                    "returnValues": {
                        "0": "0x0000000000000000000000000000000000000000",
                        "1": "0xae28a59505c6c03F29A9399801773787f6B4fF83",
                        "2": "0",
                        "from": "0x0000000000000000000000000000000000000000",
                        "to": "0xae28a59505c6c03F29A9399801773787f6B4fF83",
                        "tokenId": "0"
                    },
                    "event": "Transfer",
                    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "raw": {
                        "data": "0x",
                        "topics": [
                            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "0x0000000000000000000000000000000000000000000000000000000000000000",
                            "0x000000000000000000000000ae28a59505c6c03f29a9399801773787f6b4ff83",
                            "0x0000000000000000000000000000000000000000000000000000000000000000"
                        ]
                    }
                }
            }
        }
    }
    ```
- Related features: Set whitelist, remove whitelist, set ban list, remove ban list,...
# TODO
- [ ] Add event interactive
- [ ] Some features about analyze SC with event
- [ ] Another version with Ether.js
- [ ] Some NFT image save on IPFS
