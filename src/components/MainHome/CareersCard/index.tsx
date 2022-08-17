import React from 'react';
import {
    Box,
    Collapse,
    useDisclosure,
    Grid,
    GridItem
  } from '@chakra-ui/react'
import styled from 'styled-components';
import awardsIcon from '../CareersCard/IMG/awardsIcon.png';
import awardsIcon2 from '../CareersCard/IMG/awardsIcon2.png';
import companyIcon from '../CareersCard/IMG/companyIcon.png';

const CareerBtn = styled.button`
    font-size: 32px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    padding: 5%;
    &:hover{  
        background-color : white;
        color : red
    }
`

const CareerItemsTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-family: 'Kanit', sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  padding: 5%;
`

const CareerItemsAward = styled.img`
  width: 300px;
  height: 200px;
  margin-left: 20%;
`

const CareerItemsData = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Kanit', sans-serif;
  letter-spacing: 1px;
  padding: 2%;
  &:hover{  
    background-color : white;
    color : red
  }
`

const CareerItemsText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Kanit', sans-serif;
  line-height: 1.45;
  letter-spacing: 2px;
  padding: 5%;
`



const careerItemsContents = [
  {
    title: 'Hallym AI+X R&D Challenge(상반기) - Track03 1st 대상',
    awardImg: awardsIcon,
    data: '2021.05.31 ~ 2021.06.21',
    text: '본 대회의 목표는 공개된 dataset인 “Smartphone-Based Recognition of Human Activities and Postural Transitions Data Set”을 이용해 사람의 활동을 판별하는 것입니다.',
  },
  {
    title: '방학? 놀면 뭐하니? 오픈소스SW 개발 공모전 - 1st 금상',
    awardImg: awardsIcon,
    data: '2021.06.21 ~ 2021.09.06',
    text: '본 대회의 목표는 생활의 불편함을 해소하거나 사회적 문제를 해결하는 등의 아이디어를 제안하고 오픈소스SW를 활용하여 SW 개발 하는 것입니다.',
  },
  {
    title: 'Hallym AI+X R&D Challenge(하반기) - Track05 3st 은상',
    awardImg: awardsIcon,
    data: '2021.12.10 ~ 2021.12.19',
    text: '본 대회의 목표는 소형 로봇 시스템이 놓은 표면(바닥)에 충격을 가했을 때 발생하는 가속도 데이터를 분석하여 표면의 종류를 판별하는 것입니다.',
  },
  {
    title: '2021년도 추계종합학술발표회 - 학부논문합격 + 우수논문선정 + 장려상',
    awardImg: awardsIcon2,
    data: '2021.11.17 ~ 2021.11.19',
    text: '딥 러닝기반 실시간 영상처리를 통한 크랙 탐지 및 개인형 이동수단 주행 보조 시스템 개발.',
  },
  {
    title: '에이치나인 R&D팀 인턴',
    awardImg: companyIcon,
    data: '2022.01.03 ~ 2022.07.01',
    text: 'LG 경영연구원, LG 리서치인프라 QA & 자사 출퇴근 앱 클론 코딩',
  },
];

const IntroCareers = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <div>
        <CareerBtn onClick={onToggle}>Career</CareerBtn>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='10px'
            color='black'
            mt='1'
            rounded='md'
          >
          <Grid templateColumns='repeat(3, 1fr)' gap='100px'>
          {careerItemsContents.map((item, index) => (
            <GridItem w='100%' h='100%' bg='white' rounded='md' key={index}>
              <CareerItemsTitle>
                {item.title}<br/>
              </CareerItemsTitle>
              <CareerItemsAward alt='award' src={item.awardImg}/> 
              <br/>
              <CareerItemsData>
                {item.data}<br/>
              </CareerItemsData>
              <CareerItemsText>
                {item.text}
              </CareerItemsText>
            </GridItem>
          ))}
          </Grid>
          </Box>
        </Collapse>
      </div>
    )
};

export default IntroCareers;