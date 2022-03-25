import React, { useState } from 'react';
import Child from './Child';
import './styles.css';
import RangeSlider from 'react-bootstrap-range-slider';
import FinacialPercentage from './FinacialPercentage';
import FinancialPercentageLegal from './FinancialPercentageLegal';
import FinancialPercentagePenality from './FinancialPercentagePenality';
import FinancialPercentageOthers from './FinancialPercentageOthers';
import HealthSafetyPercentage from './HealthSafetyPercentage';
import FinancialEnvironmentalPercentage from './FinancialEnvironmentalPercentage';
import DataOne from './Data/DataOne';
import DataThree from './Data/DataThree';
import DataFour from './Data/DataFour';
import './rangeSlide.css';
import DataTwo from './Data/DataTwo';
import DataFive from './Data/DataFive';
import DataSix from './Data/DataSix';

const RiskAnalysis = () => {
  const [value, setValue] = useState(0);
  const [health, setHealth] = useState(0);
  const [others, setOthers] = useState(0);
  const [penality, setPenality] = useState(0);
  const [financialValue, setFinancialValue] = useState(0);
  const [legal, setLegal] = useState(0);
  const [env, setEnv] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isShownn, setIsShownn] = useState(false);
  const [isShownnn, setIsShownnn] = useState(false);
  const [isShownnnn, setIsShownnnn] = useState(false);

  return (
    <div class="p-10 font bg-gray-200 table-auto ">
      <div className="p-10 font bg-gray-200 text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
        <div className="rounded overflow-hidden  shadow-md"></div>
        <div className="">
          <div className="rounded overflow-hidden  flex justify-center items-center ">
            <table class="GeneratedTablee font text-black text-3xl bg-gray-200 border-2">
              <thead></thead>
              <tbody>
                <tr className="font-semibold">
                  <td className="border-2 h-48">Business Risks</td>
                  <td className="w-64 text-3xl relative">
                    Total Loss
                    <span className="font-light text-sm absolute bottom-6 flex justify-center items-center">
                      (Average ALE USD in Millions)
                    </span>
                  </td>
                  <td className="space-y-1 relative h-36 w-64  text-3xl  flex-col justify-center items-center">
                    <span> Residual Risk</span>
                    <br />
                    <span className="absolute bottom-4 flex flex-col justify-center items-center">
                      <span className="font-light text-sm">
                        {' '}
                        (Tolerance USD in Millions){' '}
                      </span>
                      <span className="flex  justify-center items-center w-96">
                        <img
                          className="flex justify-center items-center"
                          src="https://i.ibb.co/SwxDR5j/Capture-removebg-preview.png"
                          alt="minmax"
                        />
                      </span>
                    </span>
                  </td>
                  <td className="w-64  justify-center items-center flex-col relative">
                    Risk Reduction
                    <span className="font-light mx-20 text-sm absolute bottom-6 flex justify-center items-center">
                      (in %)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold h-24 align-middle">
                    Operational
                  </td>
                  <td>
                    <div
                      className=""
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      100
                    </div>
                    {isShown && (
                      <div className="absolute bg z-100 text-sm  -mt-32 text-white w-64  p-6 h-24">
                        Minimum 0 Maximum 100
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex flex-col text-xl justify-center items-center">
                      <div className="flex space-x-4 mt-6 ">
                        <div className="">0</div>
                        <div className="detail ">
                          <RangeSlider
                            value={value}
                            min={0}
                            max={100}
                            className="custom-range"
                            onChange={(changeEvent) =>
                              setValue(changeEvent.target.value)
                            }
                          />
                        </div>
                        <div className="">100</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Child value={(100 * value) / 100} />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold h-36">Financial</td>
                  <td>
                    {/* <InteruptionSlider />
                  <PenalitySlider />
                  <LegalSlider />
                  <OthersSlider /> */}
                    <div
                      className=""
                      onMouseEnter={() => setIsShownn(true)}
                      onMouseLeave={() => setIsShownn(false)}
                    >
                      50
                    </div>
                    {isShownn && (
                      <div className=" absolute bg z-100 text-sm  -mt-32 text-white w-60  p-6 h-24">
                        Minimum 5 Maximum 25
                      </div>
                    )}
                  </td>
                  <td className="space-y-1 mt-4 border-0 flex flex-col text-xl justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="">Business Interruption</div>
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          financialValue={financialValue}
                          min={0}
                          max={5}
                          onChange={(changeEvent) =>
                            setFinancialValue(changeEvent.target.value)
                          }
                        />
                        <div className="">5</div>
                      </div>

                      <DataOne financialValue={financialValue} />
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <div className="">Penality and fees</div>
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          penality={penality}
                          min={0}
                          max={10}
                          onChange={(changeEvent) =>
                            setPenality(changeEvent.target.value)
                          }
                        />
                        <div className="">10</div>
                      </div>
                      <DataTwo penality={penality} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="">Legal</div>
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          legal={legal}
                          min={0}
                          max={25}
                          onChange={(changeEvent) =>
                            setLegal(changeEvent.target.value)
                          }
                        />
                        <div className="">25</div>
                      </div>
                      <DataThree legal={legal} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="">Others</div>
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          others={others}
                          min={0}
                          max={15}
                          onChange={(changeEvent) =>
                            setOthers(changeEvent.target.value)
                          }
                        />
                        <div className="">15</div>
                      </div>
                      <DataFour others={others} />
                    </div>
                  </td>
                  <td className="space-y-16">
                    <FinacialPercentage
                      financialValue={(100 * financialValue) / 5}
                    />
                    <FinancialPercentagePenality
                      penality={(100 * penality) / 10}
                    />
                    <FinancialPercentageLegal legal={(100 * legal) / 25} />
                    <FinancialPercentageOthers others={(100 * others) / 15} />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold h-36">Health and Safety</td>
                  <td>
                    <div
                      className=""
                      onMouseEnter={() => setIsShownnnn(true)}
                      onMouseLeave={() => setIsShownnnn(false)}
                    >
                      0
                    </div>
                    {isShownnnn && (
                      <div className="absolute bg z-100 text-sm  -mt-32 text-white w-64  p-6 h-24">
                        Minimum 0 Maximum 100
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex flex-col mt-10 w-96 justify-center text-xl items-center">
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          health={health}
                          min={50}
                          max={200}
                          onChange={(changeEvent) =>
                            setHealth(changeEvent.target.value)
                          }
                        />
                        <div className="">0</div>
                      </div>
                      <DataSix health={health} />
                    </div>
                  </td>
                  <td>
                    <HealthSafetyPercentage health={(100 * health) / 200} />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold h-36">
                    Environmental Ramifications
                  </td>
                  <td>
                    <div
                      className=""
                      onMouseEnter={() => setIsShownnn(true)}
                      onMouseLeave={() => setIsShownnn(false)}
                    >
                      0
                    </div>
                    {isShownnn && (
                      <div className="absolute bg z-100 text-sm  -mt-32 text-white w-64  p-6 h-24">
                        Minimum 0 Maximum 100
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex flex-col mt-10 w-96 justify-center text-xl items-center">
                      <div className="flex space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          env={env}
                          min={0}
                          max={200}
                          onChange={(changeEvent) =>
                            setEnv(changeEvent.target.value)
                          }
                        />
                        <div className="">0</div>
                      </div>
                      <DataFive env={env} />
                    </div>
                  </td>
                  <td>
                    <FinancialEnvironmentalPercentage env={(100 * env) / 200} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            className="detail text-decoration-none mt-2 justify-center text-sm flex items-center"
            href="https://www.google.com"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;
