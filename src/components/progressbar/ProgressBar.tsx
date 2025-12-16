import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 200);
  }, [location.pathname]);

  return null;
};

export default ProgressBar;
