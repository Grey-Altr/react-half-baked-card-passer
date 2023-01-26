import { createContext, useContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  // in here we can define any state variables we want to use
  const [deck, setDeck] = useState(initialCards);

  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };
