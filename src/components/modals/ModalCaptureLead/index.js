import { useState } from 'react'
import s from './styles'

const ModalCaptureLead = () => {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <s.Modal visible={modalVisible}>Modal</s.Modal>
      <s.Overlay visible={modalVisible} />
      <button onClick={() => setModalVisible(true)}>Mostra modal</button>
    </>
  )
}

export default ModalCaptureLead
