import { IconBank } from "../icons";

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export const AccountDetail = ({ info }) => {
  return (
    // container
    <div
      className="
    flex
    justify-between
    w-full
    font-bold 
    border-b
    border-neutral-header
    min-h-11  ">
      {/* Div da esquerda */}
      <div className="flex gap-2 h-12 items-center ">
        <IconBank /> <p>{info.bank}</p>
      </div>
      {/* Div da direita */}
      <div className="flex flex-col justify-items-start min-w-[120px]">
        <p>Saldo</p>
        <p className="font-medium">{formater.format(info.balance)}</p>
      </div>
    </div>
  );
};
