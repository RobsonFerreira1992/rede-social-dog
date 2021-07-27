import React from 'react'
import { COMMENT_POST } from '../../api'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <textarea id="comment" name="comment" placeholder="comente..." value={comment} onChange={({target})=> setComment(target.value)}/>
      <button>
        <Enviar/>
      </button>
      <Erro error={error}/>
    </form>
  )
}

export default PhotoCommentsForm
