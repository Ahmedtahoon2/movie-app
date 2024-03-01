/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/error/ErrorFallback"
import Header from "../components/header/Header";
import ContextProvider from "../components/context/GlobalContext";

const RootLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ContextProvider>
        <Header />
        <Outlet />
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default RootLayout;
