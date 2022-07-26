import Reat, { FunctionComponent } from 'react';
import { ListQtDone, Icon } from './QtDone.style';

type QtDoneProps = {
  nbElement: number;
}

const QtDone: FunctionComponent<QtDoneProps> = ({
  nbElement,
}) => {
  var rows = [];
  for (var i = 0; i < nbElement; i++) {
      rows.push(<Icon />);
  }
  return <ListQtDone>{rows}</ListQtDone>
}

export default QtDone;