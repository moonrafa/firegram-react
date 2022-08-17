import { useState, useEffect } from 'react'
import { storage } from '../firebase/config'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  /*every time file dependence changes */
  useEffect =
    (() => {
      //references
      const storageRef = storage.ref(file.name)
      storageRef.put(file).on(
        'stage_changed',
        snap => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
          setProgress(percentage)
        },
        err => {
          setError(err)
        },
        async () => {
          const url = await storageRef.getDownloadURL()
          setUrl(url)
        }
      )
    },
    [file])
  return { progress, url, error }
}
export default useStorage