import { Button } from "../Button";
import { TransactionItem } from "../TransactionItem";
import { IconCurrency } from "../icons";

const items = [
  {
    description: "iFood",
    value: -20,
    date: "2024-10-01T00:00:00-03:00",
  },
  {
    description: "Papelaria Mila",
    value: -80,
    date: "2024-10-03T00:00:00-03:00",
  },
  {
    description: "Freela (2ª parte)",
    value: 1000,
    date: "2024-10-03T00:00:00-03:00",
  },
  {
    description: "Magazine Luiza",
    value: -300,
    date: "2024-10-05T00:00:00-03:00",
  },
];

export const Transaction = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <ul className="w-full">
        {items.map((transactionItem, index) => {
          return (
            <li key={index}>
              {" "}
              <TransactionItem info={transactionItem} />
            </li>
          );
        })}
      </ul>
      <Button>
        <IconCurrency /> Adicionar transação
      </Button>
    </div>
  );
};
