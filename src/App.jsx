import React, { useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/floating-animations.css";

import LazyLottie from "./components/LazyLottie";
import Header from "./components/Header";
import Footer from "./components/Footer";

// ======================================================
// NORMAL IMPORTS
// ======================================================

import WhatsAppPage from "./pages/WhatsAppPage";
import NotFound from "./pages/NotFound";

// ======================================================
// HOME
// ======================================================

const Home = React.lazy(() => import("./pages/Home"));

// ======================================================
// WORK / DEVELOPER PAGES
// ======================================================

const AngularJSDevelopers = React.lazy(
  () => import("./pages/work/AngularJSDevelopers")
);

const IOSDevelopers = React.lazy(
  () => import("./pages/work/IOSDevelopers")
);

const ReactNativeDevelopers = React.lazy(
  () => import("./pages/work/ReactNativeDevelopers")
);

const WebDevelopers = React.lazy(
  () => import("./pages/work/WebDevelopers")
);

// ======================================================
// SERVICES
// ======================================================

const Services = React.lazy(() => import("./pages/Services"));

const MobileAppDevelopment = React.lazy(
  () => import("./pages/services/MobileAppDevelopment")
);

const CustomSoftwareDevelopment = React.lazy(
  () => import("./pages/services/CustomSoftwareDevelopment")
);

const WebDevelopment = React.lazy(
  () => import("./pages/services/WebDevelopment")
);

const SoftwareProductDevelopment = React.lazy(
  () => import("./pages/services/SoftwareProductDevelopment")
);

const ERPSoftwareDevelopment = React.lazy(
  () => import("./pages/services/ERPSoftwareDevelopment")
);

const UIUXDesign = React.lazy(
  () => import("./pages/services/UIUXDesign")
);

const SoftwareMaintenanceSupport = React.lazy(
  () => import("./pages/services/SoftwareMaintenanceSupport")
);

// ======================================================
// TECHNOLOGIES
// ======================================================

// MAIN TECHNOLOGIES PAGE

const Technologies = React.lazy(
  () => import("./pages/Technologies")
);

// INDIVIDUAL TECHNOLOGY PAGES

const ReactJS = React.lazy(
  () => import("./pages/technologies/ReactJS")
);

const AngularJS = React.lazy(
  () => import("./pages/technologies/AngularJS")
);

const KnockoutJS = React.lazy(
  () => import("./pages/technologies/KnockoutJS")
);

const VueJS = React.lazy(
  () => import("./pages/technologies/VueJS")
);

const NextJS = React.lazy(
  () => import("./pages/technologies/NextJS")
);

const AspNet = React.lazy(
  () => import("./pages/technologies/AspNet")
);

const AspNetCore = React.lazy(
  () => import("./pages/technologies/AspNetCore")
);

const VBNet = React.lazy(
  () => import("./pages/technologies/VBNet")
);

const CSharp = React.lazy(
  () => import("./pages/technologies/CSharp")
);

const PHP = React.lazy(
  () => import("./pages/technologies/PHP")
);

const NodeJS = React.lazy(
  () => import("./pages/technologies/NodeJS")
);

const MSSQLServer = React.lazy(
  () => import("./pages/technologies/MSSQLServer")
);

const MongoDB = React.lazy(
  () => import("./pages/technologies/MongoDB")
);

const OnDemandAppSolutions = React.lazy(
  () => import("./pages/technologies/OnDemandAppSolutions")
);

const Flutter = React.lazy(
  () => import("./pages/technologies/Flutter")
);

const IOS = React.lazy(
  () => import("./pages/technologies/iOS")
);

const Android = React.lazy(
  () => import("./pages/technologies/Android")
);

const ReactNative = React.lazy(
  () => import("./pages/technologies/ReactNative")
);

// ======================================================
// OTHER PAGES
// ======================================================

const Career = React.lazy(() => import("./pages/Career"));

const Contact = React.lazy(() => import("./pages/Contact"));

const OurWork = React.lazy(() => import("./pages/OurWork"));

const Company = React.lazy(() => import("./pages/Company"));

// ======================================================
// PROJECTS
// ======================================================

const Project = React.lazy(() => import("./pages/Project"));

const MedicalBilling = React.lazy(
  () => import("./pages/MedicalBilling")
);

const VoiceProcess = React.lazy(
  () => import("./pages/VoiceProcess")
);

// ======================================================
// LOADING COMPONENT
// ======================================================

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

// ======================================================
// SCROLL TO TOP ON ROUTE CHANGE
// ======================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ======================================================
// APP
// ======================================================

function App() {
  // ====================================================
  // AOS INITIALIZATION
  // ====================================================

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <Router>
      {/* Reset scroll position whenever the route changes */}
      <ScrollToTop />

      {/* ==================================================
          HEADER
      ================================================== */}

      <Header />

      {/* ==================================================
          FLOATING CHATBOT + WHATSAPP
      ================================================== */}

      <div
        className="floating-animations"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: "80%",
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {/* CHATBOT */}

        <div
          className="floating-chatbot"
          style={{
            marginLeft: "1vw",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          <LazyLottie
            animationLoader={() =>
              import("./assets/Live chatbot.json")
            }
            style={{
              width: "clamp(90px, 22vw, 200px)",
              height: "clamp(90px, 22vw, 200px)",
            }}
          />
        </div>

        {/* WHATSAPP */}

        <div
          className="floating-whatsapp"
          style={{
            marginRight: "1vw",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
          onClick={() =>
            window.open(
              "https://wa.me/9043236861",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <LazyLottie
            animationLoader={() =>
              import("./assets/WhatsApp.json")
            }
            style={{
              width: "clamp(90px, 22vw, 200px)",
              height: "clamp(90px, 22vw, 200px)",
            }}
          />
        </div>
      </div>

      {/* ==================================================
          PAGE TRANSITION
      ================================================== */}

      <AnimatePresence mode="wait">
        <motion.main
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          style={{
            minHeight: "80vh",
          }}
        >
          {/* ==================================================
              ROUTES
          ================================================== */}

          <Routes>
            {/* HOME */}

            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />

            {/* CAREER */}

            <Route
              path="/career"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Career />
                </Suspense>
              }
            />

            {/* CONTACT */}

            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />

            {/* COMPANY */}

            <Route
              path="/company"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Company />
                </Suspense>
              }
            />

            {/* SERVICES MAIN */}

            <Route
              path="/services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              }
            />

            {/* SERVICE PAGES */}

            <Route
              path="/services/mobile-app-development"
              element={
                <Suspense fallback={<PageLoader />}>
                  <MobileAppDevelopment />
                </Suspense>
              }
            />

            <Route
              path="/services/custom-software-development"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CustomSoftwareDevelopment />
                </Suspense>
              }
            />

            <Route
              path="/services/web-development"
              element={
                <Suspense fallback={<PageLoader />}>
                  <WebDevelopment />
                </Suspense>
              }
            />

            <Route
              path="/services/software-product-development"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SoftwareProductDevelopment />
                </Suspense>
              }
            />

            <Route
              path="/services/erp-software-development"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ERPSoftwareDevelopment />
                </Suspense>
              }
            />

            <Route
              path="/services/uiux-design"
              element={
                <Suspense fallback={<PageLoader />}>
                  <UIUXDesign />
                </Suspense>
              }
            />

            <Route
              path="/services/software-maintenance-support"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SoftwareMaintenanceSupport />
                </Suspense>
              }
            />

            {/* MAIN TECHNOLOGIES PAGE */}

            <Route
              path="/technologies"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Technologies />
                </Suspense>
              }
            />

            {/* INDIVIDUAL TECHNOLOGY PAGES */}

            <Route
              path="/technologies/reactjs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ReactJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/angularjs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AngularJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/knockoutjs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <KnockoutJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/vuejs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <VueJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/nextjs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <NextJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/aspnet"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AspNet />
                </Suspense>
              }
            />

            <Route
              path="/technologies/aspnetcore"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AspNetCore />
                </Suspense>
              }
            />

            <Route
              path="/technologies/vbnet"
              element={
                <Suspense fallback={<PageLoader />}>
                  <VBNet />
                </Suspense>
              }
            />

            <Route
              path="/technologies/csharp"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CSharp />
                </Suspense>
              }
            />

            <Route
              path="/technologies/php"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PHP />
                </Suspense>
              }
            />

            <Route
              path="/technologies/nodejs"
              element={
                <Suspense fallback={<PageLoader />}>
                  <NodeJS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/mssqlserver"
              element={
                <Suspense fallback={<PageLoader />}>
                  <MSSQLServer />
                </Suspense>
              }
            />

            <Route
              path="/technologies/mongodb"
              element={
                <Suspense fallback={<PageLoader />}>
                  <MongoDB />
                </Suspense>
              }
            />

            <Route
              path="/technologies/ondemandappsolutions"
              element={
                <Suspense fallback={<PageLoader />}>
                  <OnDemandAppSolutions />
                </Suspense>
              }
            />

            <Route
              path="/technologies/flutter"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Flutter />
                </Suspense>
              }
            />

            <Route
              path="/technologies/ios"
              element={
                <Suspense fallback={<PageLoader />}>
                  <IOS />
                </Suspense>
              }
            />

            <Route
              path="/technologies/android"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Android />
                </Suspense>
              }
            />

            <Route
              path="/technologies/react-native"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ReactNative />
                </Suspense>
              }
            />

            {/* WORK / DEVELOPERS */}

            <Route
              path="/work/angularjs-developers"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AngularJSDevelopers />
                </Suspense>
              }
            />

            <Route
              path="/work/ios-developers"
              element={
                <Suspense fallback={<PageLoader />}>
                  <IOSDevelopers />
                </Suspense>
              }
            />

            <Route
              path="/work/react-native-developers"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ReactNativeDevelopers />
                </Suspense>
              }
            />

            <Route
              path="/work/web-developers"
              element={
                <Suspense fallback={<PageLoader />}>
                  <WebDevelopers />
                </Suspense>
              }
            />

            {/* PROJECTS */}

            <Route
              path="/projects"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Project />
                </Suspense>
              }
            />

            <Route
              path="/projects/medical-billing"
              element={
                <Suspense fallback={<PageLoader />}>
                  <MedicalBilling />
                </Suspense>
              }
            />

            <Route
              path="/projects/voice-process"
              element={
                <Suspense fallback={<PageLoader />}>
                  <VoiceProcess />
                </Suspense>
              }
            />

            {/* OUR WORK */}

            <Route
              path="/our-work"
              element={
                <Suspense fallback={<PageLoader />}>
                  <OurWork />
                </Suspense>
              }
            />

            {/* WHATSAPP */}

            <Route
              path="/whatsapp"
              element={<WhatsAppPage />}
            />

            {/* 404 */}

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* FOOTER */}

      <Footer />
    </Router>
  );
}

export default App;