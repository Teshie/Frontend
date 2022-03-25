import React, { useState } from 'react';
import './rangeSlide.css';
import HealthSafetyPercentage from './HealthSafetyPercentage';
import RiskAnalysisThree from './RiskAnalysisThree';
import GuageRiskAnalysis from './GuageRiskAnalysis';
import GuagePenality from './GuagePenality';
import { Slider } from '@mui/material';
import GuageLegal from './GuageLegal';
import GuageOthers from './GuageOthers';
import { makeStyles } from '@material-ui/core/styles';
import EnvironmentalGuage from './EnvironmentalGuage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 8,
    color: '#04365d',
    '& .MuiSlider-thumb': {
      height: 10,
      width: 44,
      borderRadius: 10,
    },
  },
  oprational: {
    color: '#04365d',
    '& .MuiSlider-thumb': {
      height: 10,
      width: 44,
      borderRadius: 10,
    },
  },
}));
const RiskAnalysisTwo = () => {
  const classes = useStyles();
  const [value, setValue] = useState(100);
  const [health, setHealth] = useState(20);
  const [others, setOthers] = useState(15);
  const [interuption, setInteruption] = useState(10);
  const [financialValue, setFinancialValue] = useState(5);
  const [legal, setLegal] = useState(15);
  const [env, setEnv] = useState(30);

  return (
    <div className="flex flex-col font -space-y-8 relative">
      <div className="p-10 font  bg-gray-200 text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
        <div className="rounded mt-16 overflow-hidden  shadow-md height_risk_card">
          <span className="flex flex-1  font-semibold text-4xl justify-center  items-center ">
            Financial
          </span>{' '}
          <div className="flex justify-between  -mt-16 text-white text-center">
            <div className="flex space-x-16   text-center">
              <div className="flex flex-col  flex-start space-y-2  text-center">
                <div className="flex space-x-10">
                  <div className="flex flex-col mt-14 space-y-16 mx-16 ">
                    <div className="risk_one mt-32">
                      <h2 className=" font-bold total_loss_font  ">
                        {parseFloat(financialValue) +
                          parseFloat(interuption) +
                          parseFloat(legal) +
                          parseFloat(others)}
                      </h2>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-black font-bold">Avg Loss</h4>
                      <h6 className="text-black ">(USD in Millions)</h6>
                    </div>
                  </div>
                  <div className="mt-24 text-sm">
                    <GuageRiskAnalysis myValue={financialValue} />
                    <h4 className=" text-black">Business Interruption</h4>
                  </div>
                  <div className="mt-24 text-sm">
                    <GuagePenality myValue={interuption} />
                    <h4 className=" text-black">Penality and fees</h4>
                  </div>
                  <div className="mt-24 text-sm">
                    <GuageLegal myValue={legal} />
                    <h4 className="  text-black">Legal</h4>
                  </div>
                  <div className="mt-24 text-sm">
                    <GuageOthers myValue={others} />
                    <h4 className="text-black">Others</h4>
                  </div>
                </div>
                <div className="flex absolute top_input z-100 justify-center items-center space-x-28 mx-96">
                  {' '}
                  <div className="">
                    <input
                      min="0"
                      max="5"
                      type="number"
                      value={financialValue}
                      name="firstName"
                      onChange={(e) => setFinancialValue(e.target.value)}
                      className="text-black mx-20  p-3 w-36 h-10 text-center border-2 outline-none"
                    />
                  </div>
                  <div className="">
                    <input
                      min="0"
                      max="10"
                      type="number"
                      value={interuption}
                      name="firstName"
                      onChange={(e) => setInteruption(e.target.value)}
                      className="text-black mx-20  p-3 w-36 h-10 text-center border-2 outline-none"
                    />
                  </div>
                  <div className=" ">
                    <input
                      min="0"
                      max="15"
                      type="number"
                      value={legal}
                      name="firstName"
                      onChange={(e) => setLegal(e.target.value)}
                      className="text-black mx-20  p-3 w-36 h-10 text-center border-2 outline-none"
                    />
                  </div>
                  <div className="">
                    <input
                      min="0"
                      max="20"
                      type="number"
                      value={others}
                      name="firstName"
                      onChange={(e) => setOthers(e.target.value)}
                      className="text-black mx-20  p-3 w-36 h-10 text-center border-2 outline-none"
                    />
                  </div>
                </div>
              </div>{' '}
            </div>{' '}
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-200 text-2xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded  z-10 overflow-hidden flex flex-col justify-center items-center shadow-md height_risk_card_operational ">
          <span className="flex justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            <span className="flex justify-center  items-center space-x-1">
              <span className="flex flex-col bottom-10 justify-center items-center">
                <span>Operational</span>
              </span>
            </span>{' '}
            <span className=" -mt-4 text-sm cursor-pointer"></span>
          </span>

          <div className="mt-1 flex text-sm">
            <RiskAnalysisThree myValue={value} />
          </div>
          <div className="h-72 mx-96 z-100 absolute left-36">
            <Slider
              className={classes.root}
              orientation="vertical"
              size="small"
              defaultValue={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="mt-5 flex space-x-3 justify-center items-center">
            <div className="flex flex-col">
              <h4 className="text-black ">Avg Loss</h4>
              <h6 className="text-black text-sm">(USD in Millions)</h6>
            </div>{' '}
            <input
              min="0"
              max="100"
              type="number"
              value={value}
              name="firstName"
              onChange={(e) => setValue(e.target.value)}
              className="text-black mx-20  p-3 w-36 h-14 text-center border-2 outline-none"
            />
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded  z-10 overflow-hidden flex flex-col justify-center items-center shadow-md">
          <span className="flex justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            <span className="flex justify-center  items-center space-x-1">
              <span className="flex flex-col bottom-10 justify-center items-center">
                <span>Health and Safety</span>
              </span>
            </span>{' '}
            <span className=" -mt-4 text-sm cursor-pointer"></span>
          </span>
          <div className="mt-1 text-sm">
            <HealthSafetyPercentage myValue={health} />
          </div>
          <div className="h-72  z-100 absolute middle_slider">
            <Slider
              className={classes.root}
              max={20}
              orientation="vertical"
              size="small"
              defaultValue={health}
              onChange={(e) => setHealth(e.target.value)}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="mt-5 flex space-x-3 justify-center items-center">
            <div className="flex flex-col">
              <h4 className="text-black ">Avg Loss</h4>
              <h6 className="text-black text-sm">(USD in Millions)</h6>
            </div>{' '}
            <input
              min="0"
              max="20"
              type="number"
              value={health}
              name="firstName"
              onChange={(e) => setHealth(e.target.value)}
              className="text-black mx-20  p-3 w-36 h-14 text-center border-2 outline-none"
            />
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded  z-10 overflow-hidden flex flex-col justify-center items-center shadow-md">
          <span className="flex justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            <span className="flex justify-center  items-center space-x-1">
              <span className="flex flex-col bottom-10 justify-center items-center">
                <span className="w-full -mx-36">
                  Environmental Ramifications
                </span>
              </span>
            </span>{' '}
            <span className=" -mt-4 text-sm cursor-pointer"></span>
          </span>
          <div className="mt-1 text-sm">
            <EnvironmentalGuage myValue={env} />
          </div>
          <div className="h-72 mx-96 z-100 absolute -right-64">
            <Slider
              max={30}
              className={classes.root}
              orientation="vertical"
              size="small"
              defaultValue={env}
              onChange={(e) => setEnv(e.target.value)}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="mt-1 flex space-x-3 justify-center items-center">
            <div className="flex flex-col">
              <h4 className="text-black ">Avg Loss</h4>
              <h6 className="text-black text-sm">(USD in Millions)</h6>
            </div>{' '}
            <input
              min="0"
              max="100"
              type="number"
              value={env}
              name="firstName"
              onChange={(e) => setEnv(e.target.value)}
              className="text-black  mx-20  p-3 w-36 h-14 text-center border-2 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisTwo;
