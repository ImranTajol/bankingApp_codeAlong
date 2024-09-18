import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';

const Home = () => {
    const loggedIn = {firstName: "Imran", lastName: "Tajol", email: "imrantajol@gmail.com"}
  return (
    <section className='home'> 
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
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