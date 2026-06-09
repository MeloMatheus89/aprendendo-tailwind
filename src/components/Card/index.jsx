import { Typography } from "../Typography";

const Card = ({ children }) => {
  return <div className="rounded-3xl flex flex-col ">{children}</div>;
};
const CardHeader = ({ children }) => {
  return (
    <div className="bg-neutral-header p-4 text-center rounded-t-3xl font-bold">
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};
const CardBody = ({ children }) => {
  return (
    <div
      className="bg-neutral-surface rounded-b-3xl text-neutral-text leading-[120%] flex-grow flex flex-col justify-center
  px-4 py-6 
  ">
      {children}
    </div>
  );
};

Card.header = CardHeader;
Card.body = CardBody;
export default Card;
