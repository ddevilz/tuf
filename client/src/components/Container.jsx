import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
