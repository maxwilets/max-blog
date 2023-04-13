import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
      <h1>SKKSKSKSKSKKS</h1>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
