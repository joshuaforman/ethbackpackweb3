const Web3 = require('web3')
const Eth = require('web3-eth')
//const { contractAddress, ABI } = require('./tronContractConfig')
const { contractAddress, ABI } = require('./ethBackpackContractConfig')
const tokenToQuery = 5


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
    from:'0xa42ed1Ac8FB4E9Bc4fc14E1AdcEA608E1EbA874C',
    gasPrice:'500000',
    gas:6000,
  }
  // console.log(contractAddress)
  const contract = new web3.eth.Contract(
    ABI,
    contractAddress
    //,options
  )
  let test

  test = await contract.methods
      .balanceOf('0xa42ed1Ac8FB4E9Bc4fc14E1AdcEA608E1EbA874C')
      .call()
  console.log('balanceOf 0xa42ed1Ac8FB4E9Bc4fc14E1AdcEA608E1EbA874C',test)

  test = await contract.methods
      .balanceOf('0x41FF2c09C4fAE81267Bd4feA1814Bac711C19004')
      .call()
  console.log('balanceOf 0x41FF2c09C4fAE81267Bd4feA1814Bac711C19004',test)

  test = await contract.methods
      .ownerOf(tokenToQuery)
      .call()
  console.log('ownerOf call',test)

  test = await contract.methods
    .tokenURI(tokenToQuery)
    .call()
  console.log('tokenURI call',test)

  test = await contract.methods
    .mintWithTokenURI('0x41FF2c09C4fAE81267Bd4feA1814Bac711C19004',6,'superRad!')
  console.log('after mint', test)

  test = await contract.methods
      .ownerOf(6)
      .call()
  console.log('ownerOf call',test)

  test = await contract.methods
    .tokenURI(6)
    .call()
  console.log('tokenURI call',test)


}
app().then(() => {process.exit()})
