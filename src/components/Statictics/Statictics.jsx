import PropTypes from 'prop-types';

import {
  StaticticsSection,
  StatisticsHeading,
  StatisticsItem,
  StatisticsList,
} from './Statictics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StaticticsSection>
      {title && <StatisticsHeading>{title}</StatisticsHeading>}
      <StatisticsList>
        {stats.map((stat, idx) => (
          <StatisticsItem key={stat.id} idx={idx}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StaticticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
