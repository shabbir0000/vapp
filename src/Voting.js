import React from 'react';
import { Table, Button } from 'react-bootstrap'
import { ethers } from 'ethers';
import './App.css';
import { useEffect } from 'react';



// window.onload = function () {
//   Connection();
// }


  // contract intence by ether.js
  const Connection = async () => {

    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "chairperson",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "deligate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "voter",
            "type": "address"
          }
        ],
        "name": "givenrighttovote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "proposels",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votecount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposal",
            "type": "uint256"
          }
        ],
        "name": "votee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "deligate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winnername",
        "outputs": [
          {
            "internalType": "string",
            "name": "winnername_",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winningproposal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winningproposal_",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract("0xE9Dd9C1a6A04E295c4697d1757659B0c5f3F682b", abi, provider);
    var proposal0 = contract.proposels(0);

    // connect front hand with contract address
    proposal0.then(function (result) {
    document.getElementById("pname0").innerHTML = result[0];
    document.getElementById("vcount0").innerHTML = result[1];

    });

    var proposal1 = contract.proposels(1);
    proposal1.then(function (result) {
      document.getElementById("pname1").innerHTML = result[0];
      document.getElementById("vcount1").innerHTML = result[1];

    });

    var proposal2 = contract.proposels(2);
    proposal2.then(function (result) {
      document.getElementById("pname2").innerHTML = result[0];
      document.getElementById("vcount2").innerHTML = result[1];

    });
  }
  const vote1 = () => {
    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "chairperson",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "deligate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "voter",
            "type": "address"
          }
        ],
        "name": "givenrighttovote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "proposels",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votecount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposal",
            "type": "uint256"
          }
        ],
        "name": "votee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "deligate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winnername",
        "outputs": [
          {
            "internalType": "string",
            "name": "winnername_",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winningproposal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winningproposal_",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]

    const provider = new ethers.providers.Web3Provider(window.ethereum);
       // document.getElementById("metamask").innerHTML = 'ali ' ;
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract("0xE9Dd9C1a6A04E295c4697d1757659B0c5f3F682b", abi, signer);
    var proposelval = document.getElementById("select1").value;
    var castvote = contract.votee(proposelval);
    castvote.then(function (transection) {
     // document.getElementById("meta").innerHTML = transection; 
      // useEffect(() => {
      //   Connection();
      // },);
      var delayInMilliseconds = 12000; //1 second

      setTimeout(function() {
        window.location.reload(true);
        //your code to be executed after 1 second
       }, delayInMilliseconds);
      
    });
    
  }
 
  const givenrighttovote = () => {
    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "chairperson",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "deligate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "voter",
            "type": "address"
          }
        ],
        "name": "givenrighttovote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "proposels",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votecount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposal",
            "type": "uint256"
          }
        ],
        "name": "votee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "deligate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winnername",
        "outputs": [
          {
            "internalType": "string",
            "name": "winnername_",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winningproposal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winningproposal_",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]

    const provider = new ethers.providers.Web3Provider(window.ethereum);
       // document.getElementById("metamask").innerHTML = 'ali ' ;
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract("0xE9Dd9C1a6A04E295c4697d1757659B0c5f3F682b", abi, signer);
    var proposelval1 = document.getElementById("givenright").value;
    var castvote = contract.givenrighttovote(proposelval1);
    castvote.then(function (transection1) {
     // document.getElementById("metamask").innerHTML = transection1;
     var delayInMilliseconds = 10000; //1 second
      
     setTimeout(function() {
       window.location.reload(true);
       //your code to be executed after 1 second
      }, delayInMilliseconds);
    });
    
  }
  const winnername = () => {
    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "chairperson",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "deligate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "voter",
            "type": "address"
          }
        ],
        "name": "givenrighttovote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "proposels",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votecount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposal",
            "type": "uint256"
          }
        ],
        "name": "votee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "deligate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winnername",
        "outputs": [
          {
            "internalType": "string",
            "name": "winnername_",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winningproposal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winningproposal_",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]

    const provider = new ethers.providers.Web3Provider(window.ethereum);    
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract("0xE9Dd9C1a6A04E295c4697d1757659B0c5f3F682b", abi, signer);
    var castvote = contract.winnername();
    castvote.then(function (transection2) {
      document.getElementById("winner").innerHTML = transection2;
    });
    
  }
  


  function Voting() {
    useEffect(() => {
      Connection();
    },);
    return (
   <>
      <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
           Voting DAPP <br /> D-Centerlized
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
     </div>
     </div>
     </div>

      
      <div id='metamask'>
        <div id='meta'></div>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>#</th>
              <th>Proposel Name</th>
              <th>Vote Count</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td id='pname0'></td>
              <td id='vcount0'></td>

            </tr>
            <tr>
              <td>2</td>
              <td id='pname1'></td>
              <td id='vcount1'></td>

            </tr>
            <tr>
              <td>3</td>
              <td id='pname2'></td>
              <td id='vcount2'></td>

            </tr>
          </tbody>
        </Table>




        <select id='select1' className="form-select" aria-label="Default select example" >
          <option >Open this select menu</option>
          <option value="0">ALI</option>
          <option value="1">EHSAN</option>
          <option value="2">HASSAN</option>
        </select>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <Button onClick={vote1} >GIVE VOTE</Button>
        <br/>
        <br/>
        <input id='givenright'></input>
        <br/>
        <br/>
        <Button onClick={givenrighttovote} >GIVEN RIGHT TO VOTE</Button>
        <br/>
        <br/>
        <Button onClick={winnername} >WINNER NAME</Button>
        </center>
        <center>
        <br/>
        <h3 id='winner' className="text-3xl sm:text-5xl text-white text-gradient py-1 text-center"></h3>
        </center>
      </div>
      </>
    );

  }

  export default Voting;