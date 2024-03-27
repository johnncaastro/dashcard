import { Header } from './components/header'
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

export function App() {
  return (
    <>
      <Header />
      <div className="min-h-9/10 mt-8 grid grid-cols-9 grid-rows-6 gap-8">
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
        <div className="col-span-3 row-span-3 rounded-3xl bg-white-100 px-6 py-4">
          <h2 className="text-xl font-semibold">Activity</h2>
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl bg-white-100 px-6 py-4">
          <h2 className="text-xl font-semibold">Payments</h2>
        </div>
      </div>
    </>
  )
}
