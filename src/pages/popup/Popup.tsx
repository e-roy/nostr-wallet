import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { MainPage, SettingsPage, LoginPage } from "./pages";

export default function Popup(): JSX.Element {
  return (
    <AppLayout>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AppLayout>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={`py-2 px-4 h-128 w-96`}>{children}</div>;
};
