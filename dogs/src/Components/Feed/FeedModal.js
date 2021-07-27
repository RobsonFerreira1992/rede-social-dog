import React from 'react'
import { PHOTO_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import Loading from '../Helper/Loading'
import styles from './FeedModal.module.css'
import PhotoContent from '../Photo/PhotoContent'
const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(()=>{
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo,request])

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalPhoto(null)

    
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Erro error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal
