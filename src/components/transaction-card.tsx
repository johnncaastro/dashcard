import { ComponentProps } from 'react'

type TransactionCardRootProps = ComponentProps<'div'>

export function TransactionCardRoot(props: TransactionCardRootProps) {
  return <div className="flex items-center" {...props} />
}

type TransactionCardPrefixProps = ComponentProps<'div'>

export function TransactionCardPrefix(props: TransactionCardPrefixProps) {
  return <div {...props} />
}

type TransactionCardTextProps = ComponentProps<'div'>

export function TransactionCardText(props: TransactionCardTextProps) {
  return <div className="ml-4 flex flex-col" {...props} />
}

interface TransactionCardPriceProps {
  price: string
}

export function TransactionCardPrice({ price }: TransactionCardPriceProps) {
  return <p className="ml-auto self-start">-${price}</p>
}
