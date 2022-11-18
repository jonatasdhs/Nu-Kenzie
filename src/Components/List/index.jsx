import Card from "../Card";

const List = ({ listTransaction, handleRemoveTransaction }) => {
  return listTransaction.map((transaction, index) => (
    <Card
      className="List"
      handleRemoveTransaction={handleRemoveTransaction}
      key={index}
      transaction={transaction}
    />
  ));
};

export default List;
