import { Spinner } from "@chakra-ui/react";
import CanvasJSReact from "../../assets/canvasjs.stock.react";

import { useEffect, useState } from "react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const Graph = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${props.coinID}/market_chart?vs_currency=inr&days=365`
      );
      const data = await response.json();

      const prices = data.prices;

      let dps = [];

      dps = prices.map((item) => {
        return {
          x: new Date(item[0]),
          y: Number(item[1]),
        };
      });

      setData(dps);

      setLoading(false);
    };

    fetchCoin();
  }, []);

  const options = {
    title: {
      text: "",
    },
    theme: "dark2",
    subtitles: [
      {
        text: "",
      },
    ],
    charts: [
      {
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM DD YYYY",
          },
        },
        axisY: {
          title: `${props.coinName} Prices`,
          prefix: "₹",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "₹#,###.##",
          },
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Price (in INR)",
            type: "splineArea",
            color: "#3576a8",
            yValueFormatString: "₹#,###.##",
            xValueFormatString: "MMM DD YYYY",
            dataPoints: data,
          },
        ],
      },
    ],
    navigator: {
      slider: {
        minimum: new Date("2017-05-01"),
        maximum: new Date("2018-05-01"),
      },
    },
  };

  const containerProps = {
    width: "100%",
    height: "500px",
    margin: "auto",
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div>
          {!loading && (
            <CanvasJSStockChart
              containerProps={containerProps}
              options={options}
              /* onRef = {ref => this.chart = ref} */
            />
          )}
        </div>
      </div>
    );
  }
};

export default Graph;
