import { useContext } from 'react'
import ModalsContext from '../../../contexts/ModalsContext'
import s from './styles'

const ModalCaptureLead = () => {

  const { captureLead } = useContext(ModalsContext)

  return (
    <>
      <s.Modal visible={captureLead.visible}>
        <button onClick={captureLead.close}>Fechar</button>
        Modal
      </s.Modal>
      <s.Overlay visible={captureLead.visible} onClick={captureLead.close}/>
    </>
  )
}

export default ModalCaptureLead
