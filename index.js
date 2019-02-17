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
  console.log(res)
  const contract = new web3.eth.Contract(
    ABI,
    contractAddress,
    {}
  )
  //console.log(contract)
  console.log(web3.eth.initiatedContracts[0].options)

  console.log(contract.mintWithTokenURI)
  // console.log(claimVerifier.AbstractContract.providersModuleFactory)

  // const options = {
  //   from:
  //   gasPrice:
  //   gas:
  //   data:
  // }
  // const ethBackpack = web3.eth.Contract(
  //   {},
  //   contractAddress,
  //   options
  // )
}

app().then(() => {process.exit()})
