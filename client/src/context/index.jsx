//web3 logic all goes here 
// source of truth for everything web 3 and client related

import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite, useDisconnect } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import { createCampaign } from '../assets';


const StateContext = createContext();

export const StateContextProvidor = ({ children }) => {
  const { contract } = useContract('0x40205bBEf5Dc9C1B7f1A2262F1E285ecD3DFDE0f'); //from thirdweb dashboard
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

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

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      projectID: i
    }))
    return parsedCampaigns;
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address)
    return filteredCampaigns
  };

  const donate = async (pId, amount) => {
    const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });
    return data;
  }

  const getDonations = async (pID) => {
    const donations = await contract.call('getDonators', pID);
    const numOfDonations = donations[0].length;
    const parsedDonations = [];

    for (let i = 0; i < numOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }
    return parsedDonations
  }



  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        disconnect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);