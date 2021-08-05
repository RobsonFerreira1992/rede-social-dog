import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Erro from '../Helper/Erro'

const LoginPasswordLost = () => {

  const email = useForm();
  const {data, loading, error,request} = useFetch();

  

  async function handleSubmit(event){
    event.preventDefault()
    if(login.validate()){
      const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')})
      const {json} =  await request(url,options)
    }

  }
  return (
    <section>
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (<p style={{color: '#4c1'}}>{data}</p>):
       (
        <form onSubmit={handleSubmit}>
          <Input labe="Email / Usuário" type="text" name="email" {...email}/>
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
        </form>
      )}
    
      <Erro error={error} />
    </section>
  )
}

export default LoginPasswordLost
