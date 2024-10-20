import React, { useState } from 'react';
import { Home, Book, Calendar, User, Settings, Wallet, Lock } from 'lucide-react';
import { DynamicWidget, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';

// Mock data
const journalEntries = [
  { id: 1, date: '2023-10-19', title: 'First Integration Day' },
  { id: 2, date: '2023-10-20', title: 'Exploring the Skeptic' },
  { id: 3, date: '2023-10-21', title: 'Emotional Reconnection' },
];

const Web3IntegrationApp = () => {
  const [activeTab, setActiveTab] = useState('home');

  const isWalletConnected = useIsLoggedIn();


  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen isWalletConnected={isWalletConnected} />;
      case 'journal':
        return <JournalScreen isWalletConnected={isWalletConnected} />;
      case 'plan':
        return <PlanScreen isWalletConnected={isWalletConnected} />;
      case 'profile':
        return <ProfileScreen isWalletConnected={isWalletConnected} />;
      default:
        return <HomeScreen isWalletConnected={isWalletConnected} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Integration</h1>
        <DynamicWidget />
        {/* {!isWalletConnected ? (
          <button onClick={connectWallet} className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
            <Wallet className="mr-2" size={16} />
            Connect Wallet
          </button>
        ) : (
          <span className="text-green-400 flex items-center">
            <Lock className="mr-2" size={16} />
            Wallet Connected
          </span>
        )} */}
      </header>
      <main className="flex-grow overflow-y-auto p-4 pt-6">
        {renderContent()}
      </main>
      <nav className="bg-gray-800 border-t border-gray-700">
        <div className="flex justify-around">
          <button onClick={() => setActiveTab('home')} className={`p-4 ${activeTab === 'home' ? 'text-purple-400' : 'text-gray-400'}`}>
            <Home />
          </button>
          <button onClick={() => setActiveTab('journal')} className={`p-4 ${activeTab === 'journal' ? 'text-purple-400' : 'text-gray-400'}`}>
            <Book />
          </button>
          <button onClick={() => setActiveTab('plan')} className={`p-4 ${activeTab === 'plan' ? 'text-purple-400' : 'text-gray-400'}`}>
            <Calendar />
          </button>
          <button onClick={() => setActiveTab('profile')} className={`p-4 ${activeTab === 'profile' ? 'text-purple-400' : 'text-gray-400'}`}>
            <User />
          </button>
        </div>
      </nav>
    </div>
  );
};

const HomeScreen = ({ isWalletConnected }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Welcome to Your Decentralized Integration Journey</h2>
    <div className="bg-gray-800 rounded-lg shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">Today's Focus: Grounding and Reflection</h3>
      <p>Start with a 10-minute body scan meditation to reconnect with your physical self.</p>
    </div>
    <div className="bg-gray-800 rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2">Decentralized Gratitude Check-in</h3>
      <p>What are three things you're grateful for from your experience?</p>
      <textarea className="w-full mt-2 p-2 border rounded bg-gray-700 text-white" rows="3" placeholder="Enter your thoughts here..."></textarea>
      {isWalletConnected ? (
        <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-full">Save to IPFS</button>
      ) : (
        <p className="mt-2 text-yellow-400">Connect wallet to save entries securely on IPFS</p>
      )}
    </div>
  </div>
);

const JournalScreen = ({ isWalletConnected }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6"> Integration Journal</h2>
    <div className="bg-gray-800 rounded-lg shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">New Entry</h3>
      <input type="text" className="w-full p-2 border rounded bg-gray-700 text-white mb-2" placeholder="Title" />
      <textarea className="w-full p-2 border rounded bg-gray-700 text-white" rows="4" placeholder="Write your thoughts here..."></textarea>
      {isWalletConnected ? (
        <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-full">Encrypt and Save </button>
      ) : (
        <p className="mt-2 text-yellow-400">Connect wallet to encrypt and save entries</p>
      )}
    </div>
    <div>
      <h3 className="font-semibold mb-2">Previous Entries (Stored on IPFS)</h3>
      {journalEntries.map(entry => (
        <div key={entry.id} className="bg-gray-800 rounded-lg shadow p-4 mb-2">
          <h4 className="font-semibold">{entry.title}</h4>
          <p className="text-sm text-gray-400">{entry.date}</p>
          <p className="text-xs text-purple-400 mt-1">IPFS Hash: Qm...</p>
        </div>
      ))}
    </div>
  </div>
);

const PlanScreen = ({ isWalletConnected }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">7-Day Integration Plan</h2>
    <div className="bg-gray-800 rounded-lg shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">Day 1: Grounding and Reflection</h3>
      <ul className="list-disc list-inside text-gray-300">
        <li>10-minute body scan meditation</li>
        <li>Journal about your overall experience</li>
        <li>Take a nature walk</li>
        <li>Create artwork representing your journey</li>
      </ul>
      {isWalletConnected && (
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full">Claim 10 MIND Tokens</button>
      )}
    </div>
    <div className="bg-gray-800 rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2">Day 2: Exploring the Skeptic</h3>
      <ul className="list-disc list-inside text-gray-300">
        <li>10-minute breathing meditation</li>
        <li>Journal: "What is my Skeptic trying to protect me from?"</li>
        <li>Practice grounding exercises</li>
        <li>Write a compassionate letter to your Skeptic part</li>
      </ul>
      {isWalletConnected && (
        <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-full" disabled>Locked (Complete Day 1 First)</button>
      )}
    </div>
  </div>
);

const ProfileScreen = ({ isWalletConnected }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Your Decentralized Profile</h2>
    <div className="bg-gray-800 rounded-lg shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">Integration Progress</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
      </div>
      <p className="mt-2 text-sm text-gray-400">45% of 7-day plan completed</p>
      {isWalletConnected && (
        <p className="mt-2 text-purple-400">MIND Tokens Earned: 50</p>
      )}
    </div>
    <div className="bg-gray-800 rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2">Decentralized Settings</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Data Encryption</span>
          <Settings className="text-gray-400" />
        </li>
        <li className="flex items-center justify-between">
          <span>IPFS Storage</span>
          <Settings className="text-gray-400" />
        </li>
        <li className="flex items-center justify-between">
          <span>Token Rewards</span>
          <Settings className="text-gray-400" />
        </li>
      </ul>
    </div>
  </div>
);

export default Web3IntegrationApp;

