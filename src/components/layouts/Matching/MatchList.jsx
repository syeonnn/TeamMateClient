import React from 'react';
import * as S from './MatchList.style';
import MatchInfo from './MatchInfo';

// import TeamDetailPage from '../../../pages/team/TeamDetailPage';
// import UnitInfoRow from '../../ui/UnitInfoRow';

const dummy = [
  {
    id: 1,
    unitInfo: {
      title: '퀵 ',
      date: '24/01/04',
      time: '15:00',
      GymName: '강북청소년수련관',
      Capacity: 55,
      Region: '서울 강북구',
      age: '20~30대',
      level: '5',
      gender: '남성',
    },
    state: 1,
  },
  {
    id: 2,
    unitInfo: {
      title: '코티스트 ',
      date: '24/01/04',
      time: '17:00',
      GymName: '신당초등학교',
      Capacity: 15,
      Region: '서울 강북구',
      age: '20~30대',
      level: '93',
      gender: '남성',
    },
    state: 1,
  },
  {
    id: 1,
    unitInfo: {
      title: '팀메이트 ',
      date: '24/01/04',
      time: '19:00',
      GymName: '홍대',
      Capacity: 55,
      Region: '서울 마포구',
      age: '20~30대',
      level: '999',
      gender: '혼성',
    },
    state: 1,
  },
];

export default function MatchList() {
  return (
    <S.Wrapper>
      {dummy.map((info) => (
        <MatchInfo id={info.id} unitInfo={info.unitInfo} state={info.state} />
      ))}
    </S.Wrapper>
  );
}
