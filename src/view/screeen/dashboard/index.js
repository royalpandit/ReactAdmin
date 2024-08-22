import { Doughnut, Line } from "react-chartjs-2"
import Card from "./card"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);
const datatransfer = [
    { id: 1, name: "Student", Value: "17890", point: "100" },
    { id: 2, name: "Director", Value: "30", point: "100" },
    { id: 3, name: "Fees", Value: "78900000", point: "100" },
    { id: 4, name: "Staff", Value: "390", point: "100" },
    { id: 5, name: "Month Fees", Value: "783390", point: "100" },
    { id: 6, name: "New Register", Value: "1890", point: "100" },
    { id: 7, name: "Leave Student", Value: "890", point: "100" },
    { id: 7, name: "Old Student", Value: "7890", point: "100" },]
const Dashboard = () => {
    return (<>

        <div style={{ backgroundColor: 'white', margin: '10px' }}>


            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

            </div>
            <div className="row">
                {
                    datatransfer.map(d => (
                        <Card title={d.name} value={d.Value} color="info" />
                    ))
                }
            </div>
            <div className='row'>
                <div className='col-lg-8'>
                    <Line options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'month',
                            },
                        },
                    }} data={{
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July'
                        ],
                        datasets: [{
                            label: 'Income in thousand',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(240, 9, 9)',
                            tension: 0.1
                        }]
                    }} />
                </div>

                <div className='col-lg-4'>
                    <Doughnut data={{
                        labels: [
                            'Student',
                            'Teacher',
                            'Cleaner',
                            'Office staff'
                        ],
                        datasets: [{
                            label: 'Staff',
                            data: [4579, 136, 19, 26],
                            backgroundColor: [
                                'rgb(0, 76, 135)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 0, 0)',
                                'rgb(0,255,0)'
                            ],
                            hoverOffset: 4
                        }]
                    }} />

                </div>
            </div>
        </div>
    </>
    )
}
export default Dashboard