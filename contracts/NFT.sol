// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    constructor() ERC721("NeKo", "NK") {}


    mapping(address => bool) private whiteLists;

    mapping(uint256 => MetaData) public metadataNft;
    mapping(address => bool) private banLists;

    uint256 public whitelistCounter = 0;
    uint256 public banlistCounter = 0;
    
    // event update nft
    event updateNFT(string name, uint price, string power);
    // event set whitelist
    event setWhiteListStatus(address user);
    // event remove user from white list
    event removeWhiteListStatus(address user);
    // event set ban list
    event setBanListStatus(address user);
    // event remove user from ban list
    event removeBanListStatus(address user);


    // defined NFT
    struct MetaData {
        string name;
        uint256 price;
        string power;
    }
    // add white list address
    function setWhiteList (address user) public onlyOwner {
        require(user != address(0), "Zero address");
        require(whiteLists[user] != true, "Address already whitelist member");
        whiteLists[user] = true;
        whitelistCounter += 1;
        
        emit setWhiteListStatus(user);
    }
    // remove from whitelist
    function removeWhiteList(address user) public onlyOwner {
        require(user != address(0), "Zero address");
        require(whitelistCounter > 0, "White list empty");

        delete whiteLists[user];

        whitelistCounter -= 1;
        emit removeWhiteListStatus(user);
    }
    //
    function wlCounter() public view returns(uint256){
        return whitelistCounter;
    }
    //
    function safeMint(address to, uint256 tokenId, string memory name, uint256 price, string memory power) public{
        require(to != address(0), "Zero address");
        require(whiteLists[to] == true, "Only whitelist can mint !");
        MetaData memory nft = MetaData(name, price, power);
        
        _safeMint(to, tokenId);
        
        metadataNft[tokenId] = nft;
    }
    //
    // update nft
    
    function updatenft( uint256 tokenId, string memory new_name, uint new_price, string memory new_power) public onlyOwner {
        
        require(_exists(tokenId), "Token Id non-exist");
        
        MetaData storage nft = metadataNft[tokenId];
    
        nft.name = new_name;
        nft.price = new_price;
        nft.power = new_power;
        
        emit updateNFT(new_name, new_price, new_power);
    }
    //
    function setBanList(address user) public onlyOwner {
        require(user != address(0), "Zero address");
        banLists[user] = true;
        banlistCounter += 1;
        emit setBanListStatus(user);
    }
    //
    function unBanList(address user) public onlyOwner {
        require(user != address(0), "Zero address");
        require(banlistCounter > 0, "ban list is empty");

        delete banLists[user];
        banlistCounter += 1;
        emit removeBanListStatus(user);
    }
     //
    //
    function _beforeTokenTransfer( address from, address to, uint256 tokenId) internal virtual override {
        
        require(!banLists[from] && !banLists[to], "Ban list can't transfer");
    }
}