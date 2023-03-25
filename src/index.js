import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromChildren, Navigate, Route, RouterProvider } from 'react-router-dom';
import { TopBar } from './views/TopBar';
import { ComponentView } from './views/ComponentsView';
import { MotherboardView } from './views/MotherboardView';
import { GpuView } from './views/GpuView';
import { CpuView } from './views/CpuView';
import { RamView } from './views/RamView';
import { CaseView } from './views/CaseView';
import { PowerUnitView } from './views/PowerUnitView';
import { DriveView } from './views/DriveView';
import { AssembledView } from './views/AssembledView';
import { MainView } from './views/MainView';
import { BuilderView } from './views/BuilderView';


const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" Component={TopBar}>
        <Route path='main' Component={MainView} />
        <Route path='components' Component={ComponentView}>
          <Route path='motherboard' Component={MotherboardView} />
          <Route path='gpu' Component={GpuView} />
          <Route path='cpu' Component={CpuView} />
          <Route path='ram' Component={RamView} />
          <Route path='case' Component={CaseView} />
          <Route path='power-unit' Component={PowerUnitView} />
          <Route path='drive' Component={DriveView} />
        </Route>
        <Route path='assembled' Component={AssembledView} />
        <Route path='builder' Component={BuilderView} />
      </Route>
      <Route path="*" element={<Navigate to="/main" replace />} />
    </>
  ));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


