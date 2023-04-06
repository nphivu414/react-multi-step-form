import React, { useState } from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  const [activeStepColor, setActiveStepColor] = useState("#FFFFFF");
  return (
    <MaterialLayout activeStepColor={activeStepColor}>
      <AppointmentForm setActiveStepColor={setActiveStepColor} />
    </MaterialLayout>
  );
}

export default App;
