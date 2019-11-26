import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ResponsivePie } from '@nivo/pie'

function App() {
  
  const data = [
    {
    "id": "LowRisk",
    "label": "Low Risk",
    "value": 46,
    "color": "hsl(182, 70%, 50%)"
  },
    {
      "id": "MediumRisk",
      "label": "Medium Risk",
      "value": 40,
      "color": "hsl(129, 70%, 50%)"
    },
    
    {
      "id": "CriticalRisk",
      "label": "Critical Risk",
      "value": 1,
      "color": "hsl(245, 70%, 50%)"
    },
    {
      "id": "HighRisk",
      "label": "High Risk",
      "value": 13,
      "color": "hsl(356, 70%, 50%)"
    }
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="something">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={0}
        innerRadius={0.6}
        cornerRadius={0}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', '0' ] ] }}
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={2}
        radialLabelsLinkDiagonalLength={15}
        radialLabelsLinkHorizontalLength={36}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 12,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    </div>
  );
}

export default App;
