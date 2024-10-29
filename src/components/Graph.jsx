import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const BellCurveChart = ({ percentage }) => {
	const clampedPercentage = Math.max(0, Math.min(100, percentage));

	// Generate bell curve data points
	const dataPoints = 100;
	const mean = 50;
	const stdDev = 15;

	const xValues = Array.from({ length: dataPoints }, (_, i) => i);
	const yValues = xValues.map((x) => {
		return (
			(1 / (stdDev * Math.sqrt(2 * Math.PI))) *
			Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
		);
	});

	const markerIndex = Math.round((clampedPercentage / 100) * (dataPoints - 1));

	const chartData = {
		labels: xValues,
		datasets: [
			{
				label: "Bell Curve",
				data: yValues,
				borderColor: "rgba(138, 43, 226, 1)",
				borderWidth: 2,
				fill: true,
				backgroundColor: "rgba(138, 43, 226, 0.6)",
				pointRadius: 0,
			},
			{
				label: "Marker",
				data: xValues.map((x, i) =>
					i === markerIndex ? yValues[markerIndex] : null
				),
				borderColor: "transparent",
				backgroundColor: "white",
				pointRadius: 8,
				pointHoverRadius: 8,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: { enabled: false },
		},
		scales: {
			x: { display: false },
			y: {
				display: false,
				max: Math.max(...yValues) * 1.2, // Add some padding at the top
			},
		},
	};

	return (
		<div className="relative w-4/5 mx-auto flex flex-col">
			{/* Chart container with fixed height */}
			<div className="h-48">
				<Line data={chartData} options={chartOptions} />
			</div>

			{/* Label container */}
			<div className="relative h-8 mt-2">
				{/* Marker line */}
				<div
					className="absolute w-px h-6 bg-white"
					style={{
						left: `${clampedPercentage}%`,
					}}
				/>

				{/* Label */}
				<div
					className="absolute flex flex-col items-center text-white text-sm"
					style={{
						left: `${clampedPercentage}%`,
						transform: "translateX(-50%)",
						top: "0",
					}}
				>
					<span className="whitespace-nowrap font-medium">
						You&apos;re here
					</span>
				</div>
			</div>
		</div>
	);
};

BellCurveChart.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default BellCurveChart;
