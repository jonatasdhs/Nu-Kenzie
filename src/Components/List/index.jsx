import Card from "../Card";

const List = ({ listTransaction, handleRemoveTransaction, filter }) => {
  const filteredTransactions = listTransaction.filter((transaction) => {
    return filter === "todos" ? transaction : transaction.type === filter;
  });
  return filteredTransactions.map((transaction, index) => (
    <Card
      className="List"
      handleRemoveTransaction={handleRemoveTransaction}
      key={index}
      transaction={transaction}
    />
  ));
};

export default List;
