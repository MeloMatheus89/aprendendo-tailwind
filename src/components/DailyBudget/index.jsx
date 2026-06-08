const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export const DailyBudget = ({ value }) => {
  return <p className="text-primary-highlight text-[39px] leading-[125%] font-bold text-center"> {formater.format(value)}</p>;
};
