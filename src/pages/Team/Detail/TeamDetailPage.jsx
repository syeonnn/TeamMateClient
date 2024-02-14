import { useNavigate, useParams } from 'react-router-dom';

import Gap from '../../../components/atoms/Gap';
import Level from '../../../components/ui/Level/Level';

import { formatMembers } from '../../../utils/formatData';

import * as S from './TeamDetailPage.style';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import { useEffect, useState } from 'react';
import authInstance from '../../../services/authInstance';
import withAuth from '../../../hooks/hoc/withAuth';

function TeamDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teamInfo, setTeamInfo] = useState({
    description: '',
    isTeamLeader: false,
    logo: null,
    mannerLevel: 0,
    skillLevel: 0,
    name: '',
    participants: {
      leader: { nickname: '' },
      member: [],
    },
  });

  const members = formatMembers(
    teamInfo.participants.leader,
    teamInfo.participants.member,
  );

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { result } = (await authInstance.get(`/teams/${id}`)).data;
        setTeamInfo({ ...result });
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    };
    fetchTeam();
  }, [id, navigate]);

  return (
    <S.Wrapper>
      <S.TeamBanner>
        <S.TeamLogo />
      </S.TeamBanner>

      <S.TeamNameSection>
        <S.TeamName>{teamInfo.name}</S.TeamName>
        <Level />
        <S.description>{teamInfo.description}</S.description>
      </S.TeamNameSection>
      <Gap />

      <S.Title>팀 코드</S.Title>
      <S.TeamCodeSection>
        <S.TeamCode>BF123RT</S.TeamCode>
      </S.TeamCodeSection>
      <Gap />

      <S.Title>팀원 목록</S.Title>
      <S.TeamMembersSection>
        <MemberRows members={members} />
      </S.TeamMembersSection>

      {teamInfo.isTeamLeader && (
        <Gap height='7.19rem'>
          <S.SaveButton onClick={() => navigate(`/team/${id}/update`)}>
            수정하기
          </S.SaveButton>
        </Gap>
      )}
    </S.Wrapper>
  );
}

export default withAuth(TeamDetailPage);
