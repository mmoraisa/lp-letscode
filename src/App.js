import WelcomeImages from './components/WelcomeImages';
import WelcomeInfo from './components/WelcomeInfo';
import { WelcomeContainer } from './styles'

const App = () => (
  <WelcomeContainer>
    <WelcomeInfo />
    <WelcomeImages />
  </WelcomeContainer>
);

export default App;
