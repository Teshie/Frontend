import React, { useState } from 'react';

import { Table } from 'react-bootstrap';
import ThreatCatalogTable, 
{ calculatePercentageOfThreatCatalogByGiveField as CPTCGF } 
from '../../resources/helpers';

import SelectTableRow from './SelectTableRow';
import PieChart from '../charts/pie';
import BarGraph from '../charts/barGraph';

const ThreatProfileTable = ({ threat_catalog }) => {

  const [customCols, setCustomCols] = useState(new ThreatCatalogTable(threat_catalog, 'id', 'threat_description'))

  const updateSelectedCols = (rest) => {
    setCustomCols((pervState) => {
      return pervState.factory(pervState.choices, rest);
    })
  }

  const selectAllCols = () => {
    setCustomCols((pervState) => {
      return pervState.factory(pervState.choices, pervState.choices);
    })
  }

  const result =
    threat_catalog.length > 0 ? (
      <div style={{ margin: '20px 0 0 0' }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              { customCols.is_selected('year') && <th>Year</th>}
              { customCols.is_selected('events') && <th>Events</th>}
              { customCols.is_selected('industry_sector') && <th>Industry Sector</th>}
              { customCols.is_selected('threat_category') && <th>Threat Category</th>}
              { customCols.is_selected('threat_scenario') && <th>Threat Scenario</th>}
              { customCols.is_selected('primary_actor') && <th>Primary Actor</th>}
              { customCols.is_selected('target') && <th>Target</th>}
              { customCols.is_selected('trigger') && <th>Triggers</th>}
              { customCols.is_selected('motivation') && <th>Motivation/Intent</th>}
              { customCols.is_selected('assets') && <th>Assets</th>}
              { customCols.is_selected('severity') && <th>Severity</th>}
              { customCols.is_selected('business_risk') && <th>Business Risks</th>}
              { customCols.is_selected('business_impact') && <th>Business Impact</th>}
              { customCols.is_selected('attack_sequence') && <th>Action Sequence</th>}
            </tr>
          </thead>
          <tbody>
            {threat_catalog.map((tc, i) => (
              <tr key={tc.id}>
                <td>{i + 1}</td>
                { customCols.is_selected('year') && <td>{tc.year}</td> }
                { customCols.is_selected('events') && <td>{tc.events}</td> }
                { customCols.is_selected('industry_sector') &&  <td>
                  {tc.industry_sector ? tc.industry_sector.name : ""}
                </td> }
                { customCols.is_selected('threat_category') &&  <td>
                  {tc.threat_category.map(tc => {
                    return <p key={tc.id}>{tc ? `- ${tc.name}` : ""}</p>
                  })}
                </td> }
                { customCols.is_selected('threat_scenario') && <td>{tc.threat_scenario}</td> }
                { customCols.is_selected('primary_actor') && <td>
                  {tc.primary_actor ? tc.primary_actor.name : ""}
                </td> }
                { customCols.is_selected('target') && <td>
                  {tc.target ? tc.target.name : ""}
                </td> }
                { customCols.is_selected('trigger') && <td>
                  {tc.trigger.map(tr => {
                    return <p key={tr.id}>{tr ? `- ${tr.name}` : ""}</p>
                  })}
                </td> }
                { customCols.is_selected('motivation') && <td>{tc.motivation}</td> }
                { customCols.is_selected('assets') && <td>
                  {tc.assets.map(as => {
                    return <p key={as.id}>{as ? `- ${as.name}` : ""}</p>
                  })}
                </td> }
                { customCols.is_selected('severity') && <td>
                  {tc.severity ? tc.severity.name : ""}
                </td> }
                { customCols.is_selected('business_risk') && <td>
                  {tc.business_risk ? tc.business_risk.name : ""}
                </td> }
                { customCols.is_selected('business_impact') && <td>
                  {tc.business_impact ? tc.business_impact.name : ""}
                </td> }
                { customCols.is_selected('attack_sequence') && 
                  <td>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Seq #</th>
                          <th>Action</th>
                          <th>Consequence</th>
                          <th>Access</th>
                          <th>Target Entity</th>
                          <th>Targeted Value</th>
                          <th>Control failure</th>
                          <th>MITRE ATTACK (TTPs)</th>
                          <th>Mitigating control</th>
                          <th>Source</th>
                          <th>Controls Mapping</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tc.attack_sequence.map((ac, i) => (
                          <tr key={ac.id}>
                            <td>{ac.sequence}</td>
                            <td>{ac.action}</td>
                            <td>{ac.consequence}</td>
                            <td>{ac.access}</td>
                            <td>{ac.threat}</td>
                            <td>{ac.target_value}</td>
                            <td>{ac.controle_failure}</td>
                            <td>{ac.mitre_attack}</td>
                            <td>{ac.mitigation_control}</td>
                            <td>{ac.source}</td>
                            <td>
                              {ac.controls_mapping}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </td> 
                }
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ) : null;

  return (
    <>
      {threat_catalog.length !== 0 && (
        <SelectTableRow 
          col_choices={customCols.choices} 
          updateSelectedCols={updateSelectedCols}
          selectAllCols={selectAllCols}
        />
      )}
      {result}
      <br />
      <br />
      <PieChart 
        data={CPTCGF(threat_catalog, 
          {
            name: 'threat_category', 
            inPercent: false,
            multiple: true,
          })
        } 
      />
      <br />
      <BarGraph 
        data={CPTCGF(threat_catalog, 
          {
            name: 'assets',
            inPercent: false,
            multiple: true,
          })
        } 
        name={'Threats'} 
        title={'Assets vs Threats'}
      />
      
    </>
  );
};

export default ThreatProfileTable;
