//web3 logic all goes here 
// source of truth for everything web 3 and client related

import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import { createCampaign } from '../assets';


const StateContext = createContext();

export const StateContextProvidor = ({ children }) => {
  const { contract } = useContract('0x40205bBEf5Dc9C1B7f1A2262F1E285ecD3DFDE0f'); //from thirdweb dashboard
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, //owner
        form.title, //title
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image
      ])
      console.log('woo success, contract call success')
    } catch (error) {
      console.log('damn, contract call unsuccessful', error)
    }
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);