import React, { FunctionComponent } from 'react';
import QtDone from './QtDone/QtDone.component';
import { NavBar, QtCurrent, QtNext, QtFinal } from './QuestionBar.style';

type QuestionBarProps = {
  numberDone: number;
  isCurrent: boolean;
  isNext: boolean;
}

export const QuestionBar: FunctionComponent<QuestionBarProps> = ({
  numberDone,
  isCurrent,
  isNext,
}) => {

  return (
    <NavBar>
      <QtDone nbElement={numberDone} />
      {isCurrent ? <QtCurrent /> : null}
      {isNext ? <QtNext /> : <QtFinal src={'/qt-final.svg'} />}
    </NavBar>
  );
};