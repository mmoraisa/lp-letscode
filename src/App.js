import Section from './components/Section';
import WelcomeImages from './components/WelcomeImages';
import WelcomeInfo from './components/WelcomeInfo';
import { WelcomeContainer } from './styles'

const App = () => (
  <>
    <WelcomeContainer>
      <WelcomeInfo />
      <WelcomeImages />
    </WelcomeContainer>
    <Section title="Texto do título 1">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla error vel necessitatibus, expedita esse autem, dolor excepturi delectus facere voluptatum totam eaque quae. Unde, eveniet fuga. Dolore, consequuntur incidunt.
      </p>
    </Section>
    <Section
      title="Texto do título 1"
      styles={{
        color: 'red'
      }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla error vel necessitatibus, expedita esse autem, dolor excepturi delectus facere voluptatum totam eaque quae. Unde, eveniet fuga. Dolore, consequuntur incidunt.
      </p>
    </Section>
    <Section title="Texto do título 1">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla error vel necessitatibus, expedita esse autem, dolor excepturi delectus facere voluptatum totam eaque quae. Unde, eveniet fuga. Dolore, consequuntur incidunt.
      </p>
    </Section>
  </>
);

export default App;
