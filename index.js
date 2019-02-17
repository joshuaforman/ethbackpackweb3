const Web3 = require('web3')
const Eth = require('web3-eth')
//const { contractAddress, ABI } = require('./tronContractConfig')
const { contractAddress, ABI } = require('./ethBackpackContractConfig')


const app = async () => {

  // const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/4d2d6e061aba4c268300596d28fc69a8"));
  // const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io')
  // const web3 = new Web3(provider)
  //const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'))
  //let res = await web3.net.listening()
  //console.log(web3.isConnected())
  res = await web3.eth.getAccounts()
  const options = {
    from:'0xd779edd6BAcB6e9692B4dB581aAd5c6c2F0C3984',
    gasPrice:'500000',
    gas:6000,
    data:'blah'
  }
  // console.log(contractAddress)
  const contract = new web3.eth.Contract(
    ABI,
    contractAddress,
    options
    // {}
  )

  let test = await contract.methods
      //.balanceOf('0xd779edd6BAcB6e9692B4dB581aAd5c6c2F0C3984')
      .ownerOf(3)
      .call()

//await test
 console.log('here',test)

}
app().then(() => {process.exit()})
