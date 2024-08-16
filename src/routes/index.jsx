import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Layout, WorkPage, BlogPage } from "./loaders";

import DefaultLoader from "../component/loader";

const RoutesIndex = () => {
  return (
    <>
      <Router>
        <Suspense fallback={DefaultLoader}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route index path="/projects" element={<WorkPage />} />
              <Route index path="/blogs" element={<BlogPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default RoutesIndex;
