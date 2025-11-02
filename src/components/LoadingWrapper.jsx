import { useEffect, useState } from "react";

const withLoadingDelay = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};
export default withLoadingDelay;
