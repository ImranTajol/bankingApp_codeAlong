import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.action';

const Home = async () => {
    const loggedIn = await getLoggedInUser();

  return (
    <section className='home'> 
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.name || 'Guest'}
            subtext = "Access and manage your account and transaction efficiently"
            />

            <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance={1250.35}
            />
        </header>
        RECENT TRANSACTION

    </div>

    <div>
      <RightSideBar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 154.23}, {currentBalance: 188.23}]}
      />
    </div>
    
    </section>
  )
}

export default Home