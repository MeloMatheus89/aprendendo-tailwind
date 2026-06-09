import { AccountDetail } from "../AccountDetail";
import { Button } from "../Button";
import { IconWallet } from "../icons";

const accounts = [
  { bank: "Anybank", balance: 1200 },
  { bank: "Bytebank", balance: 800 },
  { bank: "Switch Bank", balance: 1800 },
];

export const Accounts = () => {
  return (
    <div className="flex flex-col items-center gap-6 min-h-full">
      <ul className="w-full items-start grow">
        {accounts.map((account, index) => {
          return (
            <li key={index}>
              <AccountDetail info={account} />
            </li>
          );
        })}
      </ul>
      <footer className="w-full flex justify-center pb-4">
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </footer>
    </div>
  );
};
