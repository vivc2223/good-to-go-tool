import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

interface Submission {
  id: string;
  profile_type?: string;
  requester_name: string;
  email: string;
  title: string;
  company: string;
  company_size?: string;
  country?: string;
  message?: string;
  has_use_case?: string;
  use_case?: string;
  states?: string[];
  total_units?: number;
  workflow_media?: Array<{
    originalName: string;
    url: string;
    size: number;
    type: string;
  }>;
  created_at: string;
}

interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, logout, session } = useAuth();
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    if (!session) {
      toast({
        title: "Authentication Error",
        description: "No active session found.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const authHeaders = {
        Authorization: `Bearer ${session.access_token}`,
      };

      const [submissionsResponse, newsletterResponse] = await Promise.all([
        axios.get("/api/submissions", { headers: authHeaders }),
        axios.get("/api/newsletter", { headers: authHeaders }),
      ]);

      if (submissionsResponse.data?.success) {
        setSubmissions(submissionsResponse.data.data);
      } else {
        throw new Error("Failed to fetch submissions");
      }

      if (newsletterResponse.data?.success) {
        setNewsletter(newsletterResponse.data.data);
      } else {
        throw new Error("Failed to fetch newsletter subscribers");
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }
    if (session) {
      fetchDashboardData();
    }
  }, [isAuthenticated, navigate, session, fetchDashboardData]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportSubmissionsToCSV = () => {
    if (submissions.length === 0) {
      toast({
        title: "No Data",
        description: "No submissions to export",
        variant: "destructive",
      });
      return;
    }

    const headers = [
      "Date",
      "Profile Type",
      "Requester Name",
      "Email",
      "Title",
      "Company",
      "Company Size",
      "Use Case",
      "States",
      "Total Units",
      "Files Count",
    ];

    const csvData = submissions.map((submission) => [
      formatDate(submission.created_at),
      submission.profile_type || "N/A",
      submission.requester_name,
      submission.email,
      submission.title,
      submission.company,
      submission.company_size || "N/A",
      submission.use_case || "N/A",
      submission.states?.join("; ") || "N/A",
      submission.total_units || "N/A",
      submission.workflow_media?.length || 0,
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.map((field) => `"${field}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `submissions_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: "Submissions data exported to CSV",
    });
  };

  const exportNewsletterToCSV = () => {
    if (newsletter.length === 0) {
      toast({
        title: "No Data",
        description: "No newsletter subscribers to export",
        variant: "destructive",
      });
      return;
    }

    const headers = ["Email", "Subscribed At", "Status"];

    const csvData = newsletter.map((subscriber) => [
      subscriber.email,
      formatDate(subscriber.subscribed_at),
      subscriber.is_active ? "Active" : "Inactive",
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.map((field) => `"${field}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `newsletter_subscribers_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: "Newsletter subscribers exported to CSV",
    });
  };

  if (loading) {
    return (
      <div
        className="min-h-screen w-full relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white text-xl">
          Loading dashboard...
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage:
          "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Dashboard Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-end space-x-4">
              <img
                src="/lovable-uploads/dyna_logo_white_transparent.png"
                alt="DYNA Logo"
                className="h-10"
              />
              <div>
                {/* <h1 className="text-3xl font-bold text-white">
                  Admin Dashboard
                </h1> */}
                <p className="text-gray-300">Deployment Submissions</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-2">Total Submissions</h2>
              <p className="text-3xl font-bold">{submissions.length}</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-2">
                Newsletter Subscribers
              </h2>
              <p className="text-3xl font-bold">{newsletter.length}</p>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Submissions
            </h3>
            <button
              onClick={exportSubmissionsToCSV}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Export CSV
            </button>
          </div>

          {submissions.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No submissions found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Profile
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Requester
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Use Case
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Units
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Files
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(submission.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          submission.profile_type === "Business Customer" ? "bg-blue-100 text-blue-800" :
                          submission.profile_type === "Media" ? "bg-purple-100 text-purple-800" :
                          submission.profile_type === "Investor" ? "bg-green-100 text-green-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {submission.profile_type || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {submission.requester_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {submission.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.use_case || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.total_units || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.workflow_media?.length || 0} files
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() =>
                            navigate(`/admin/submission/${submission.id}`)
                          }
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Newsletter Subscribers Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
          <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Newsletter Subscribers
            </h3>
            <button
              onClick={exportNewsletterToCSV}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Export CSV
            </button>
          </div>

          {newsletter.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No subscribers found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscribed At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newsletter.map((n) => (
                    <tr key={n.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {n.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(n.subscribed_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            n.is_active
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {n.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
