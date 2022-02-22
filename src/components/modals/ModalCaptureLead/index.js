import { useContext } from 'react'
import Modal from '../Modal'
import ModalsContext from '../../../contexts/ModalsContext'

const ModalCaptureLead = () => {

  const { captureLead } = useContext(ModalsContext)

  return (
    <Modal
      visible={captureLead.visible}
      close={captureLead.close}
      title="Registrar interesse">
        <div>Conteúdo</div>
      </Modal>
  )
}

export default ModalCaptureLead
