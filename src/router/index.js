import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "../pages/dashboard/dashboard";
import DailyReports from "../pages/dashboard/reports/daily-report";
import YesterdayReport from "../pages/dashboard/reports/yesterday-report";
import TodayReport from "../pages/dashboard/reports/today-report";
import Campaigns from "../pages/dashboard/campaigns";
import JRSales from "../pages/dashboard/sales/jr-sales";
import JRPremiumSales from "../pages/dashboard/sales/jr-premium-sales";
import AllCallsBlocked from "../pages/dashboard/crm/all-calls-blocked";
import AllLeads from "../pages/dashboard/crm/all-leads";
import HeighQualityLeads from "../pages/dashboard/crm/heigh-quality-leads";
import { BestAds } from "../assets/icons/best-ads-icon";
import BestAdSet from "../pages/dashboard/best-ads/best-ads-set";
import AIChat from "../pages/dashboard/ai";

function RoutesContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard"  >
        <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        {/* reports routes */}
        <Route path="reports"  >
          <Route path="daily-report" element={<ProtectedRoute><DailyReports /></ProtectedRoute>} />
          <Route path="today-report" element={<ProtectedRoute><TodayReport /></ProtectedRoute>} />
          <Route path="yesterday-report" element={<ProtectedRoute><YesterdayReport /></ProtectedRoute>} />
        </Route>
        {/* campaigns route */}
        <Route path="campaigns" element={<ProtectedRoute><Campaigns /></ProtectedRoute>} />

        {/* best ads routes */}
        <Route path="best-ads">
          <Route index element={<ProtectedRoute><BestAds /></ProtectedRoute>} />
          <Route path="set" element={<ProtectedRoute><BestAdSet /></ProtectedRoute>} />
        </Route>

        {/* crm routes */}
        <Route path="crm">
          <Route path="all-calls-blocked" element={<ProtectedRoute><AllCallsBlocked /></ProtectedRoute>} />
          <Route path="all-leads" element={<ProtectedRoute><AllLeads /></ProtectedRoute>} />
          <Route path="heigh-quality-leads" element={<ProtectedRoute><HeighQualityLeads /></ProtectedRoute>} />
        </Route>
        {/* sales routes */}
        <Route path="sales">
          <Route path="jr-sales" element={<ProtectedRoute><JRSales /></ProtectedRoute>} />
          <Route path="jr-premium-sales" element={<ProtectedRoute><JRPremiumSales /></ProtectedRoute>} />
        </Route>

        <Route path="ai-chat" element={<ProtectedRoute><AIChat /></ProtectedRoute>} />

      </Route>
    </Routes>
  );
}

export default RoutesContainer;
