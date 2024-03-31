import { Header } from './components/header'
import Chart, { Props } from 'react-apexcharts'
import CardImg from './assets/images/credit-card.png'
import {
  ShoppingBag,
  ShoppingCart,
  GraduationCap,
  CarFront,
} from 'lucide-react'
import {
  TransactionCardPrefix,
  TransactionCardPrice,
  TransactionCardRoot,
  TransactionCardText,
} from './components/transaction-card'

const areaChart: Props = {
  options: {
    colors: ['#8743d8'],
    chart: {
      id: 'area-chart',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    annotations: {
      xaxis: [
        {
          x: 'Tu',
          borderWidth: 0,
          label: {
            text: '$145',
            borderColor: '#1c1c1c',
            borderRadius: 3,
            orientation: 'horizontal',
            offsetY: 30,
            style: {
              color: '#fff',
              background: '#1c1c1c',
              padding: {
                left: 8,
                right: 8,
                top: 2,
                bottom: 2,
              },
            },
          },
        },
      ],
      points: [
        {
          x: 'Tu',
          y: 145,
          marker: {
            size: 4,
            fillColor: '#1c1c1c',
          },
        },
      ],
    },
    xaxis: {
      categories: ['', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', ''],
      labels: {
        style: {
          colors: '#b7b7b7',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 220,
    },
  },
  series: [
    {
      name: 'Expense',
      data: [160, 120, 145, 160, 180, 200, 220, 195, 160],
    },
  ],
}

const barChart: Props = {
  options: {
    colors: ['#fc773c'],
    chart: {
      id: 'bar-chart',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    annotations: {
      xaxis: [
        {
          x: 'Fr',
          borderWidth: 0,
          label: {
            text: '65%',
            borderColor: '#1c1c1c',
            borderRadius: 3,
            orientation: 'horizontal',
            offsetY: 30,
            style: {
              color: '#fff',
              background: '#1c1c1c',
              padding: {
                left: 8,
                right: 8,
                top: 2,
                bottom: 2,
              },
            },
          },
        },
      ],
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      labels: {
        style: {
          colors: '#b7b7b7',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
  },
  series: [
    {
      name: 'Percentage',
      data: [30, 55, 20, 30, 65, 35, 25],
    },
  ],
}

export function App() {
  return (
    <>
      <Header />
      <div className="mt-8 grid min-h-9/10 grid-cols-9 grid-rows-6 gap-8">
        <div className="col-span-6 row-span-3 flex items-start justify-between rounded-3xl bg-white-100 px-6 py-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">My card</h2>
            <img src={CardImg} alt="Cartão de crédito" />
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-lg font-semibold text-gray-300">
              Recent transaction
            </h3>
            <TransactionCardRoot>
              <TransactionCardPrefix>
                <ShoppingBag className="h-5 w-5 text-gray-900" />
              </TransactionCardPrefix>
              <TransactionCardText>
                <strong className="font-normal">Apple store</strong>
                <span className="text-gray-300">Store</span>
              </TransactionCardText>
              <TransactionCardPrice price="145,79" />
            </TransactionCardRoot>

            <TransactionCardRoot>
              <TransactionCardPrefix>
                <ShoppingCart className="h-5 w-5 text-gray-900" />
              </TransactionCardPrefix>
              <TransactionCardText>
                <strong className="font-normal">Supermarket</strong>
                <span className="text-gray-300">Grocery</span>
              </TransactionCardText>
              <TransactionCardPrice price="358,29" />
            </TransactionCardRoot>

            <TransactionCardRoot>
              <TransactionCardPrefix>
                <GraduationCap className="h-5 w-5 text-gray-900" />
              </TransactionCardPrefix>
              <TransactionCardText>
                <strong className="font-normal">Rocketseat One</strong>
                <span className="text-gray-300">Education</span>
              </TransactionCardText>
              <TransactionCardPrice price="1645,79" />
            </TransactionCardRoot>

            <TransactionCardRoot>
              <TransactionCardPrefix>
                <CarFront className="h-5 w-5 text-gray-900" />
              </TransactionCardPrefix>
              <TransactionCardText>
                <strong className="font-normal">Uber</strong>
                <span className="text-gray-300">Transport</span>
              </TransactionCardText>
              <TransactionCardPrice price="264,59" />
            </TransactionCardRoot>
          </div>
        </div>
        <div className="col-span-3 row-span-6 rounded-3xl bg-white-100 px-6 py-4">
          <h2>Expense Control</h2>
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl bg-white-100">
          <h2 className="px-6 pt-4 text-xl font-semibold">Activity</h2>
          <Chart
            options={areaChart.options}
            series={areaChart.series}
            type="area"
            height={230}
          />
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl bg-white-100 px-2">
          <h2 className="px-4 pt-4 text-xl font-semibold">Payments</h2>
          <Chart
            options={barChart.options}
            series={barChart.series}
            type="bar"
            height={230}
          />
        </div>
      </div>
    </>
  )
}
