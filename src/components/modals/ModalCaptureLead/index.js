import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import Modal from '../Modal'
import s from './styles'
import { LIGHT_GRAY } from 'defaults/Colors'
import Input from 'components/Input'
import ModalsContext from 'contexts/ModalsContext'
import Button from 'components/Button'
import CaptureLeadApi from 'integrations/CaptureLeadApi'

const ModalCaptureLead = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { captureLead } = useContext(ModalsContext)

  const handleEvent = action => evt => action(evt.target.value)

  const onSubmit = evt => {
    evt.preventDefault()

    const userData = {
      name,
      email,
      phone,
      interest: captureLead.interest
    }
    
    CaptureLeadApi.captureLead(userData)

    Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado!',
      text: 'Obrigado por se cadastrar. Responderemos o mais breve possível.',
      showConfirmButton: false,
      timer: 4500
    })

    captureLead.close()
    return false
  }

  return (
    <Modal
      visible={captureLead.visible}
      close={captureLead.close}
      title="Registrar interesse">
        <s.Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            onChange={handleEvent(setName)}
            required />
          <Input
            type="email"
            placeholder="Email"
            onChange={handleEvent(setEmail)}
            required />
          <Input
            type="tel"
            placeholder="Telefone"
            onChange={handleEvent(setPhone)}
            required />
          <Button
            type="submit"
            styles={{
              marginTop: '10px',
              backgroundColor: LIGHT_GRAY
            }}
            >Registrar</Button>
        </s.Form>
      </Modal>
  )
}

export default ModalCaptureLead
