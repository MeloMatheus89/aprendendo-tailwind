export const TransactionItem = ({ info }) => {
  const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  let styleForValue = "";
  if (info.value >= 0) {
    styleForValue = "text-secondary-income ";
  } else {
    styleForValue = "text-secondary-expense";
  }

  return (
    // Container
    <div className="flex justify-between py-2 border-b border-neutral-header">
      {/* div do lado esquerdo */}
      <div className="flex flex-col gap-2">
        <p className={`font-bold leading-[120%] ${styleForValue}`}>{info.description}</p>
        <p className={`${styleForValue}`}>{formater.format(info.value)}</p>
      </div>
      {/* div do lado direito */}
      <div>
        <p>{new Date(info.date).toLocaleDateString("pt-BR")}</p>
      </div>
    </div>
  );
};
