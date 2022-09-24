import PropTypes from 'prop-types';
import { Row, Data } from './TransactionRow.styled';

export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <Row>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
};

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
