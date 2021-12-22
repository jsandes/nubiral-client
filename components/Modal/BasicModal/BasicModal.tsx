import React from 'react';
import {Modal, Icon } from 'semantic-ui-react';

interface ModalProps  {
  show: boolean; 
  setShow: Function;
  children: React.ReactNode;
  title: string;
  rest: Object;
}

export default function BasicModal(props: ModalProps) {
  const {show, setShow, title, children, ...rest} = props;

  const onClose = () => setShow(false);

  return (
    <Modal {...rest} className="basic-modal" open={show} onClose={onClose}>
      <Modal.Header>
        <Icon name="close" onClick={onClose}></Icon>
      </Modal.Header>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  )
}
