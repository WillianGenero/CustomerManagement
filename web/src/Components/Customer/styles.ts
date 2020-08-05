import { ArrowUp, ArrowDown, Edit, Trash } from '../../styles/Icons'
import styled, { css } from 'styled-components'

export const Item = styled.li`
  padding: 10px 20px;
  border-radius: 20px;

  background: var(--secondary);
  position: relative;

  font-size: 17px;
`

export const Label = styled.div`
  padding: 5px;
  color: var(--textMain);
`

export const AddressButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);

  transition: 0.5s;

  :hover {
    opacity: 0.5;
  }
`

export const DeleteButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  transition: 0.5s;

  &:hover {
    opacity: 0.4;
  }
`

export const EditButton = styled.button`
  position: absolute;
  right: 48px;
  top: 12px;

  transition: 0.5s;

  &:hover {
    opacity: 0.4;
  }
`

const iconCSS = css`
  height: 25px;
  width: 25px;

  color: var(--text);
`

export const EditIcon = styled(Edit)`${iconCSS}`
export const TrashIcon = styled(Trash)`${iconCSS}`
export const ArrowDownIcon = styled(ArrowDown)`${iconCSS}`
export const ArrowUpIcon = styled(ArrowUp)`${iconCSS}`

export const Address = styled.div`
  font-size: 15px;

  border-top: 2px solid white;
  padding: 10px 0;

  > h3 {
    padding: 10px;
    color: var(--text);
  }
`

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 100px;
  width: 300px;

  border-radius: 20px;

  background: gray;

  position: absolute;
  top: 40px;
  right: 30px;

  > span {
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: space-around;

    > button {
      background: white;
      padding: 5px 10px;

      border-radius: 5px;
    }
  }
`
