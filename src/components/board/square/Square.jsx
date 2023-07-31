import { Button } from "@mui/material";

const Square = () => {
  const props = {
    className: style,
    variant: "contained",
    onClick: onClick,
  };
  
  return <Button {...props}>{value}</Button>;
};

export default Square;
