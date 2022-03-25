import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["Low", "Middle", "High"],
      datasets: [
        {
          label: "Asset distribution by risk",
          data: [250, 500, 1000],
          backgroundColor: ["#e87c10", "#229466", "#3b2687"],
          borderWidth: 1,
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <Bar
          data={this.state.dataBar}
          width={900}
          height={450}
          options={this.state.barChartOptions}
        />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
