import { ArrowUp, ArrowDown, Edit, Trash } from '../../styles/Icons'
import styled, { css } from 'styled-components'

export const Item = styled.li`
  padding: 10px 20px;
  border-radius: 20px;

  background: var(--secondary);
  position: relative;
`

export const Label = styled.div`
  padding: 5px;
  color: var(--text);
`

export const AddressButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--text);

  :hover {
    opacity: 0.5;
  }
`

export const DeleteButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  border: 0;

  &:hover {
    opacity: 0.4;
  }
`

export const EditButton = styled.button`
  position: absolute;
  right: 48px;
  top: 12px;
  border: 0;

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
