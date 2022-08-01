import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { VictoryPie, VictoryLegend, VictoryChart, VictoryAxis, VictoryLabel, VictoryTooltip } from 'victory';


const Svg = styled.svg`

`

const DetailedStaticsTitle = styled.h3`
  margin-top: 40px;
`

//---- code ----
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];
const wantedGraphicData = [
  {x: '46%', y: 46},
  {x: '22%', y: 22},
  {x: '32%', y: 32}
];

function GenderResponseRate() {
  const legend = [
    { name: '네', symbol: { fill: '#9749B6' }},
    { name: '글쎄요', symbol: { fill: '#C1ADD1' } },
    { name: '아니오', symbol: { fill: '#EEA3BF' } }
  ];

  // 그래프 애니메이션
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  
  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, [])

  return(
    <>
    <DetailedStaticsTitle>남녀 전체 응답률</DetailedStaticsTitle>
      <VictoryChart 
        width={400} 
        height={200}
      >
      <VictoryAxis
        style={{
          axis: {stroke: 'transparent'}, // x축
          ticks: {stroke: 'transparent'}, // y축
          tickLabels: {fill: 'transparent'}  // x축 라벨 안 보이게하기
        }}
      />
      <Svg viewBox='0 0 400 200'>
        <VictoryPie
          height={200}
          standalone={false}
          animate={{easing: 'exp', duration: 500}}
          radius={45}
          innerRadius={70}
          colorScale={['#9749B6', '#C1ADD1', '#EEA3BF']}
          padAngle={1}
          data={graphicData}
          labelComponent={<VictoryTooltip
            x={200} y={145}
            orientation="top"
            pointerLength={0}
            cornerRadius={45}
            flyoutWidth={90}
            flyoutHeight={90}
            flyoutStyle={{ fill: 'white', stroke: 'none' }}
            style={{ fontSize: 20 }}
          />}
        />
        <VictoryPie
          height={200}
          standalone={false}
          data={graphicData}
          radius={75}
          innerRadius={100}
          padAngle={1}
          colorScale={['#9749B6', '#C1ADD1', '#EEA3BF']}
          startAngle={20}
          endAngle={380}
          labelComponent={<VictoryTooltip
            x={200} y={145}
            orientation="top"
            pointerLength={0}
            cornerRadius={45}
            flyoutWidth={90}
            flyoutHeight={90}
            flyoutStyle={{ fill: 'white', stroke: 'none' }}
            style={{ fontSize: 20 }}
          />}
        />

        <VictoryLabel
          textAnchor={'middle'}
          style={{fontSize: 20}}
          x={200}
          y={100}
          text='496 명'
        />
        <VictoryLegend
          standalone={false}
          x={316}
          y={60}
          title='범례'
          centerTitle
          orientation='vertical'
          gutter={{left: 5, right: 50}}
          borderPadding={{top: 5, bottom: 5}}
          style={{
            border: { stroke: '#878787' },
            title: { fontSize: 13 },
            labels: { fontSize: 10 }
          }}
          data={legend}
        />
      </Svg>
    </VictoryChart>
  </>
  )
};

export default GenderResponseRate;