import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { Modal } from '../Modal/Modal'
import { getAlbums } from '../../redux/selectors'
import { fetchUsersAlbums } from '../../redux/operations'

import styled from 'styled-components'

export const Albums = () => {
  let { userId } = useParams()
  const dispatch = useDispatch()
  const albums = useSelector(getAlbums)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const goBack = () => navigate(-1)

  useEffect(() => {
    dispatch(fetchUsersAlbums(userId))
    setLoading(true)
    return () => {
      dispatch(fetchUsersAlbums())
    }
  }, [userId])

  return (
    <Modal>
      <Button variant="contained" onClick={goBack}>
        Close
      </Button>

      {loading ? (
        <StyledList>
          {albums.map(({ id, title }) => (
            <li key={id}>
              <p>{title}</p>
            </li>
          ))}
        </StyledList>
      ) : (
        <StyledList>
          <p>Loading...</p>
        </StyledList>
      )}
    </Modal>
  )
}

/* --------------------------------- Styled --------------------------------- */

const StyledList = styled.ol`
  text-align: start;

  li {
    margin-bottom: 10px;
  }
`
