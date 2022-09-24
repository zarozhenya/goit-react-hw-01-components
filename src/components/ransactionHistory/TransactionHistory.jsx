import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableHeadRow,
  TableBody,
} from './TransactionHistory.styled';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
