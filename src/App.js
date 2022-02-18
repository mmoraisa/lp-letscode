import Product from './components/Product';
import Section from './components/Section';
import WelcomeImages from './components/WelcomeImages';
import WelcomeInfo from './components/WelcomeInfo';
import { LIGHT_GRAY, WHITE } from './defaults/Colors';
import { WelcomeContainer } from './styles'

const services = [
  {
    id: 1,
    name: 'website-development',
    label: 'Desenvolvimento de websites',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente necessitatibus itaque animi doloribus, culpa modi repudiandae at quo. Atque iure dolorem quidem, voluptatum explicabo commodi modi rem consectetur eos!'
  },
  {
    id: 2,
    name: 'systems-maintenance',
    label: 'Manutenção de sistemas',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime iusto recusandae aspernatur hic ipsa provident dolore asperiores in voluptate culpa, nihil excepturi quas alias ipsum eum, deleniti aut unde.'
  }
]

const App = () => (
  <>
    <WelcomeContainer>
      <WelcomeInfo />
      <WelcomeImages />
    </WelcomeContainer>
    <Section
      title="Serviços oferecidos"
      styles={{ color: WHITE }}
      bodyStyles={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '30px',
        rowGap: '30px',
      }}>
        {
          services
            .map(service => 
                <Product key={service.id} service={service} />
              )
        }
    </Section>
    <Section
      title="Sobre mim"
      styles={{
        backgroundColor: LIGHT_GRAY
      }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla error vel necessitatibus, expedita esse autem, dolor excepturi delectus facere voluptatum totam eaque quae. Unde, eveniet fuga. Dolore, consequuntur incidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta. Laudantium, error praesentium dolores eveniet nulla facilis numquam, sed dolorem porro, tempore hic aperiam sunt assumenda odit. Delectus, molestias distinctio.
      
      </p>
    </Section>
  </>
);

export default App;
