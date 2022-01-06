import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
// async arow function  
const startPayment = async ({ setError, setTxs, ether, addr }) => {

  // try and catch
  try {
    //condition if metamask is not installed
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    // if it install then
    // window.ethereum.send is for when ued send some ether the fall will be called
    await window.ethereum.send("eth_requestAccounts");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    // signer.sendtransaction is the function in which we send transtion it take two arg one is adress ans send is value of ether
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

// for submit button
export default function Sendtrans() {
  // states
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  //arrow async funtion
  const handleSubmit = async (e) => {
    //for avoid re render  
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    // start payment function it take 4 argument because we initiliaze it 4 argumet i start
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };
  const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (


    <>
       
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Send Crypto <br /> across the world
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
            </p>
          </div>
        </div>
      </div>

      {/* //form  */}
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Send ETH payment
            </h1>

            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  name="addr"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient Address"
                />
              </div>
              <div className="my-3">
                <input
                  name="ether"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Amount in ETH"
                />
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
              type="submit"
              className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            >
              Pay now
            </button>
            <ErrorMessage message={error} />
            <TxList txs={txs} />
          </footer>
        </div>
      </form>

      {/* footer */}
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl hover:bg-[#2546bd] ${companyCommonStyles}`}>
                Reliability
              </div>
              <div className={`hover:bg-[#2546bd] ${companyCommonStyles}`}>Security</div>
              <div className={`sm:rounded-tr-2xl hover:bg-[#2546bd] ${companyCommonStyles}`}>
                Ethereum
              </div>
              <div className={`sm:rounded-bl-2xl hover:bg-[#2546bd] ${companyCommonStyles}`}>
                Web 3.0
              </div>
              <div className={`hover:bg-[#2546bd] ${companyCommonStyles}`}>Low Fees</div>
              <div className={`rounded-br-2xl hover:bg-[#2546bd] ${companyCommonStyles}`}>
                Blockchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}